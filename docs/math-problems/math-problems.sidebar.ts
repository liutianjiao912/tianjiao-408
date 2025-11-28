/**
 * 数学二真题
 */

const START_YEAR = 2025
const END_YEAR = 2015
const QUESTION_COUNT = 23

const questionChildren = Array.from({ length: QUESTION_COUNT }, (_, idx) => {
  const order = idx + 1
  let link: string
  if (order <= 10) {
    // 选择题 1-10
    link = `${order}选择题.md`
  }
  else if (order <= 16) {
    // 填空题 11-16
    link = `${order}填空题.md`
  }
  else {
    // 解答题 17-23
    link = `${order}解答题.md`
  }
  return {
    text: link.replace('.md', ''),
    link,
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
