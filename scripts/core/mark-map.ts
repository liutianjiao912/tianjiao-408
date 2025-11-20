import { VipExecutor, VipNodeJS } from '@142vip/utils'
import { readdir, unlink, rename } from 'fs/promises'
import { join, extname } from 'path'

const __dirname = VipNodeJS.getProcessCwd()

const markMapSourcePath = VipNodeJS.pathJoin(__dirname, 'docs/mark-map')
const markMapTargetPath = VipNodeJS.pathJoin(__dirname, 'docs/.vuepress/public/mind-map')

/**
 * 扫描目录，返回指定类型的文件路径列表
 * @param directory - 要扫描的目录路径
 * @param fileType - 文件类型（不包含点号，如 'md', 'html'）
 * @returns 文件路径数组
 */
function scanDirectory(directory: string, fileType: string): string[] {
  const fileList = VipNodeJS.readdirSync(directory)

  return fileList
    .map((file) => {
      const filePath = VipNodeJS.pathJoin(directory, file)
      const fileExtension = VipNodeJS.pathExtname(file).toLowerCase()

      if (fileExtension === `.${fileType.toLowerCase()}`) {
        return filePath
      }
      return null
    })
    .filter((c): c is string => c !== null)
}

/**
 * 将思维导图的md格式转化为html，提供在线预览
 * 链接：https://www.npmjs.com/package/markmap-cli
 */
async function markMapMain(): Promise<void> {
  try {
    // 第一步：清空目标目录
    try {
      const files = await readdir(markMapTargetPath)
      await Promise.all(
        files.map((file) =>
          unlink(join(markMapTargetPath, file)).catch(() => {
            // 忽略删除失败的文件
          })
        )
      )
    } catch (error) {
      // 目录不存在或为空，继续执行
      console.log('Target directory is empty or does not exist, continuing...')
    }

    // 第二步：将md文档转化为思维导图网页
    const mdList = scanDirectory(markMapSourcePath, 'md')
    for (const md of mdList) {
      try {
        await VipExecutor.commandStandardExecutor([
          `npx markmap --no-open ${md}`,
        ])
      } catch (error) {
        console.error(`Failed to convert ${md}:`, error)
        throw error
      }
    }

    // 第三步：移动HTML文件到目标目录
    const sourceFiles = await readdir(markMapSourcePath)
    const htmlFiles = sourceFiles.filter(
      (f) => extname(f).toLowerCase() === '.html'
    )

    for (const htmlFile of htmlFiles) {
      const sourcePath = join(markMapSourcePath, htmlFile)
      const targetPath = join(markMapTargetPath, htmlFile)
      try {
        await rename(sourcePath, targetPath)
        console.log(`Moved ${htmlFile} to target directory`)
      } catch (error) {
        console.error(`Failed to move ${htmlFile}:`, error)
        throw error
      }
    }

    console.log('Mark map generation completed successfully')
  } catch (error) {
    console.error('Mark map generation failed:', error)
    process.exit(1)
  }
}

void markMapMain()
