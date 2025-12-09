/**
 * 重命名 Section 文件并更新内容
 * Section I: -> 1.
 * Section II: -> 2.
 * Section III: -> 3.
 * Section IV: -> 4.
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const baseDir = path.join(__dirname, '../docs/英语二真题')

const ENGLISH_PROBLEMS_CONFIG = {
  startYear: 2025,
  endYear: 2005,
}

/**
 * 生成年份数组（从起始年份到结束年份，降序）
 */
const years = Array.from(
  { length: ENGLISH_PROBLEMS_CONFIG.startYear - ENGLISH_PROBLEMS_CONFIG.endYear + 1 },
  (_, idx) => ENGLISH_PROBLEMS_CONFIG.startYear - idx,
)

/**
 * 读取文件内容
 */
function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf-8')
}

/**
 * 写入文件内容
 */
function writeFile(filePath, content) {
  const dir = path.dirname(filePath)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
  fs.writeFileSync(filePath, content, 'utf-8')
}

/**
 * 替换文件内容中的 Section 文本
 */
function replaceSectionText(content) {
  return content
    .replace(/Section I:/g, '1.')
    .replace(/Section II:/g, '2.')
    .replace(/Section III:/g, '3.')
    .replace(/Section IV:/g, '4.')
}

/**
 * 重命名文件并更新内容
 */
function renameAndUpdateFile(oldPath, newPath) {
  if (fs.existsSync(oldPath)) {
    let content = readFile(oldPath)
    content = replaceSectionText(content)
    writeFile(newPath, content)
    fs.unlinkSync(oldPath)
    console.log(`  ✓ 重命名: ${path.basename(oldPath)} -> ${path.basename(newPath)}`)
  }
}

/**
 * 重命名目录
 */
function renameDir(oldPath, newPath) {
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath)
    console.log(`  ✓ 重命名目录: ${path.basename(oldPath)} -> ${path.basename(newPath)}`)
  }
}

/**
 * 递归处理目录中的所有文件
 */
function processDirectory(dirPath, relativePath = '') {
  const items = fs.readdirSync(dirPath, { withFileTypes: true })
  
  for (const item of items) {
    const oldItemPath = path.join(dirPath, item.name)
    const relativeItemPath = path.join(relativePath, item.name)
    
    if (item.isDirectory()) {
      // 处理目录名
      let newItemName = item.name
        .replace(/^Section I:/g, '1.')
        .replace(/^Section II:/g, '2.')
        .replace(/^Section III:/g, '3.')
        .replace(/^Section IV:/g, '4.')
      
      const newItemPath = path.join(dirPath, newItemName)
      
      if (newItemName !== item.name) {
        renameDir(oldItemPath, newItemPath)
        processDirectory(newItemPath, path.join(relativePath, newItemName))
      } else {
        processDirectory(oldItemPath, relativeItemPath)
      }
    } else if (item.isFile() && item.name.endsWith('.md')) {
      // 处理文件名
      let newFileName = item.name
        .replace(/^Section I:/g, '1.')
        .replace(/^Section II:/g, '2.')
        .replace(/^Section III:/g, '3.')
        .replace(/^Section IV:/g, '4.')
      
      const newFilePath = path.join(dirPath, newFileName)
      
      if (newFileName !== item.name) {
        renameAndUpdateFile(oldItemPath, newFilePath)
      } else {
        // 即使文件名不变，也要更新内容
        let content = readFile(oldItemPath)
        const newContent = replaceSectionText(content)
        if (content !== newContent) {
          writeFile(oldItemPath, newContent)
          console.log(`  ✓ 更新内容: ${item.name}`)
        }
      }
    }
  }
}

/**
 * 主函数
 */
function main() {
  console.log('开始重命名 Section 文件...\n')

  years.forEach(year => {
    console.log(`正在处理 ${year} 年...`)
    const yearDir = path.join(baseDir, String(year))
    
    if (fs.existsSync(yearDir)) {
      processDirectory(yearDir)
      console.log(`  ✓ ${year} 年处理完成\n`)
    }
  })

  console.log('完成！')
}

main()

