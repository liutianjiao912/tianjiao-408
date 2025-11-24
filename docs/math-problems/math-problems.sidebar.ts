/**
 * 数学二真题
 */

const START_YEAR = 2025
const END_YEAR = 2015
const QUESTION_COUNT = 23

const questionChildren = Array.from({ length: QUESTION_COUNT }, (_, idx) => {
  const order = idx + 1
  return {
    text: `第${order}题`,
    link: `${order}.md`,
  }
})

const years = Array.from(
  { length: START_YEAR - END_YEAR + 1 },
  (_, idx) => START_YEAR - idx,
)

export const mathProblemsSidebar = years.map(year => ({
  text: `${year} 真题`,
  prefix: `${year}`,
  collapsible: true,
  children: questionChildren,
}))
