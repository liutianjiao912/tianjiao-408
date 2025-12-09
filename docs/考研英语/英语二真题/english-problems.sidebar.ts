/**
 * 英语二真题 Sidebar 配置
 */

import { ENGLISH_PROBLEMS_CONFIG } from '../../config/constants'

/** 起始年份 */
const START_YEAR = ENGLISH_PROBLEMS_CONFIG.startYear
/** 结束年份 */
const END_YEAR = ENGLISH_PROBLEMS_CONFIG.endYear

/**
 * 生成 2. 阅读理解 Part A 链接
 */
function generateReadingPartALinks(): Array<{ text: string; link: string }> {
  const textCount = ENGLISH_PROBLEMS_CONFIG.readingPartATextCount
  return Array.from({ length: textCount }, (_, idx) => {
    const textNum = idx + 1
    return {
      text: `Text ${textNum}`,
      link: `2. 阅读理解/Part A/Text ${textNum}.md`,
    }
  })
}

/**
 * 生成年份数组（从起始年份到结束年份，降序）
 */
const years = Array.from(
  { length: START_YEAR - END_YEAR + 1 },
  (_, idx) => START_YEAR - idx,
)

/**
 * 英语二真题 Sidebar 配置
 */
export const englishProblemsSidebar = years.map(year => ({
  text: `${year} 真题`,
  prefix: `${year}`,
  collapsible: true,
  children: [
    {
      text: '1. 完形填空',
      link: '1.完形填空.md',
    },
    {
      text: '2. 阅读理解',
      collapsible: true,
      children: [
        {
          text: 'Part A',
          collapsible: true,
          children: generateReadingPartALinks(),
        },
        {
          text: 'Part B',
          link: '2. 阅读理解/Part B.md',
        },
      ],
    },
    {
      text: '3. 翻译',
      link: '3. 翻译.md',
    },
    {
      text: '4. 写作',
      collapsible: true,
      children: [
        {
          text: 'Part A',
          link: '4. 写作/Part A.md',
        },
        {
          text: 'Part B',
          link: '4. 写作/Part B.md',
        },
      ],
    },
  ],
}))
