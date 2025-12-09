/**
 * 重新生成英语二真题的 md 文件结构
 * 新的文件结构：
 * 1. Section I: Use of English (完形填空).md
 * 2. Section II: Reading Comprehension (阅读理解)/
 *    - Part A/ (Text 1.md, Text 2.md, Text 3.md, Text 4.md)
 *    - Part B.md
 * 3. Section III: Translation (翻译).md
 * 4. Section IV: Writing (写作)/
 *    - Part A.md
 *    - Part B.md
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const ENGLISH_PROBLEMS_CONFIG = {
  startYear: 2025,
  endYear: 2005,
  useOfEnglishCount: 20,
  readingPartATextCount: 4,
  readingPartAQuestionPerText: 5,
  readingPartBCount: 5,
}

const baseDir = path.join(__dirname, '../docs/英语二真题')

/**
 * 生成年份数组（从起始年份到结束年份，降序）
 */
const years = Array.from(
  { length: ENGLISH_PROBLEMS_CONFIG.startYear - ENGLISH_PROBLEMS_CONFIG.endYear + 1 },
  (_, idx) => ENGLISH_PROBLEMS_CONFIG.startYear - idx,
)

/**
 * 创建目录（如果不存在）
 */
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }
}

/**
 * 创建文件
 */
function createFile(filePath, content) {
  const dir = path.dirname(filePath)
  ensureDir(dir)
  fs.writeFileSync(filePath, content, 'utf-8')
}

/**
 * 生成 Section I: Use of English (完形填空).md
 */
function generateUseOfEnglish(yearDir) {
  const filePath = path.join(yearDir, 'Section I: Use of English (完形填空).md')
  let content = `---
title: Section I: Use of English (完形填空)
prev: false
next: false
---

# Section I: Use of English (完形填空)

> 待补充题目内容与解析

## 题目

（待补充）

## 题目列表

`

  for (let i = 1; i <= ENGLISH_PROBLEMS_CONFIG.useOfEnglishCount; i++) {
    content += `### Question ${i}

**选项：**
- A. （待补充）
- B. （待补充）
- C. （待补充）
- D. （待补充）

**答案：** （待补充）

**解析：** （待补充）

---
`
  }

  createFile(filePath, content)
}

/**
 * 生成 Section II: Reading Comprehension Part A
 */
function generateReadingPartA(yearDir) {
  const partADir = path.join(yearDir, 'Section II: Reading Comprehension (阅读理解)', 'Part A')
  const textCount = ENGLISH_PROBLEMS_CONFIG.readingPartATextCount
  const questionPerText = ENGLISH_PROBLEMS_CONFIG.readingPartAQuestionPerText

  for (let textNum = 1; textNum <= textCount; textNum++) {
    const filePath = path.join(partADir, `Text ${textNum}.md`)
    let content = `---
title: Text ${textNum}
prev: ${textNum > 1 ? `Text ${textNum - 1}` : false}
next: ${textNum < textCount ? `Text ${textNum + 1}` : false}
---

# Section II: Reading Comprehension Part A - Text ${textNum}

> 待补充题目内容与解析

## 文章

（待补充）

## 题目

`

    for (let qNum = 1; qNum <= questionPerText; qNum++) {
      content += `### Question ${qNum}

**选项：**
- A. （待补充）
- B. （待补充）
- C. （待补充）
- D. （待补充）

**答案：** （待补充）

**解析：** （待补充）

---
`
    }

    createFile(filePath, content)
  }
}

/**
 * 生成 Section II: Reading Comprehension Part B
 */
function generateReadingPartB(yearDir) {
  const filePath = path.join(
    yearDir,
    'Section II: Reading Comprehension (阅读理解)',
    'Part B.md'
  )
  let content = `---
title: Part B
prev: false
next: false
---

# Section II: Reading Comprehension Part B

> 待补充题目内容与解析

## 题目

`

  for (let i = 1; i <= ENGLISH_PROBLEMS_CONFIG.readingPartBCount; i++) {
    content += `### Question ${i}

**选项：**
- A. （待补充）
- B. （待补充）
- C. （待补充）
- D. （待补充）
- E. （待补充）
- F. （待补充）
- G. （待补充）

**答案：** （待补充）

**解析：** （待补充）

---
`
  }

  createFile(filePath, content)
}

/**
 * 生成 Section III: Translation
 */
function generateTranslation(yearDir) {
  const filePath = path.join(yearDir, 'Section III: Translation (翻译).md')
  const content = `---
title: Section III: Translation (翻译)
prev: false
next: false
---

# Section III: Translation (翻译)

> 待补充翻译题目与解析

## 题目

（待补充英文原文）

## 参考译文

（待补充）

## 解析

（待补充）
`
  createFile(filePath, content)
}

/**
 * 生成 Section IV: Writing Part A
 */
function generateWritingPartA(yearDir) {
  const filePath = path.join(yearDir, 'Section IV: Writing (写作)', 'Part A.md')
  const content = `---
title: Part A
prev: false
next: false
---

# Section IV: Writing Part A

> 待补充应用文写作题目与范文

## 题目

（待补充）

## 参考范文

（待补充）

## 写作要点

（待补充）
`
  createFile(filePath, content)
}

/**
 * 生成 Section IV: Writing Part B
 */
function generateWritingPartB(yearDir) {
  const filePath = path.join(yearDir, 'Section IV: Writing (写作)', 'Part B.md')
  const content = `---
title: Part B
prev: false
next: false
---

# Section IV: Writing Part B

> 待补充图表/图画作文题目与范文

## 题目

（待补充）

## 参考范文

（待补充）

## 写作要点

（待补充）
`
  createFile(filePath, content)
}

/**
 * 删除旧的文件结构
 */
function removeOldStructure(yearDir) {
  if (fs.existsSync(yearDir)) {
    const oldDirs = ['section-i', 'section-ii', 'section-iii', 'section-iv']
    oldDirs.forEach(dir => {
      const oldPath = path.join(yearDir, dir)
      if (fs.existsSync(oldPath)) {
        fs.rmSync(oldPath, { recursive: true, force: true })
      }
    })
  }
}

/**
 * 主函数：为所有年份生成文件
 */
function main() {
  console.log('开始重新生成英语二真题文件...')

  years.forEach(year => {
    console.log(`正在生成 ${year} 年的文件...`)
    const yearDir = path.join(baseDir, String(year))

    // 删除旧的文件结构
    removeOldStructure(yearDir)

    // 生成新的文件结构
    generateUseOfEnglish(yearDir)
    generateReadingPartA(yearDir)
    generateReadingPartB(yearDir)
    generateTranslation(yearDir)
    generateWritingPartA(yearDir)
    generateWritingPartB(yearDir)

    console.log(`  ✓ ${year} 年文件生成完成`)
  })

  console.log(`\n完成！共生成 ${years.length} 年的文件。`)
  console.log(`文件位置: ${baseDir}`)
}

main()

