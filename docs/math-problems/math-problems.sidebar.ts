/**
 * 数学二真题 Sidebar 配置
 */

import { MATH_PROBLEMS_CONFIG } from '../config/constants'

/** 题目类型 */
enum QuestionType {
  /** 选择题 */
  CHOICE = '选择题',
  /** 填空题 */
  FILL = '填空题',
  /** 解答题 */
  ANSWER = '解答题',
}

/** 题目类型范围配置 */
const QUESTION_TYPE_RANGES = {
  [QuestionType.CHOICE]: MATH_PROBLEMS_CONFIG.choiceRange,
  [QuestionType.FILL]: MATH_PROBLEMS_CONFIG.fillRange,
  [QuestionType.ANSWER]: MATH_PROBLEMS_CONFIG.answerRange,
} as const

/** 起始年份 */
const START_YEAR = MATH_PROBLEMS_CONFIG.startYear
/** 结束年份 */
const END_YEAR = MATH_PROBLEMS_CONFIG.endYear
/** 题目总数 */
const QUESTION_COUNT = MATH_PROBLEMS_CONFIG.questionCount

/**
 * 根据题目序号获取题目类型
 */
function getQuestionType(order: number): QuestionType {
  if (order <= QUESTION_TYPE_RANGES[QuestionType.CHOICE].end) {
    return QuestionType.CHOICE
  }
  if (order <= QUESTION_TYPE_RANGES[QuestionType.FILL].end) {
    return QuestionType.FILL
  }
  return QuestionType.ANSWER
}

/**
 * 生成题目链接文件名
 */
function generateQuestionLink(order: number): string {
  const type = getQuestionType(order)
  return `${order}${type}.md`
}

/**
 * 生成题目子项配置
 */
const questionChildren = Array.from({ length: QUESTION_COUNT }, (_, idx) => {
  const order = idx + 1
  const link = generateQuestionLink(order)
  return {
    text: link.replace('.md', ''),
    link,
  }
})

/**
 * 生成年份数组（从起始年份到结束年份，降序）
 */
const years = Array.from(
  { length: START_YEAR - END_YEAR + 1 },
  (_, idx) => START_YEAR - idx,
)

/**
 * 数学二真题 Sidebar 配置
 */
export const mathProblemsSidebar = years.map(year => ({
  text: `${year} 真题`,
  prefix: `${year}`,
  collapsible: true,
  children: questionChildren,
}))
