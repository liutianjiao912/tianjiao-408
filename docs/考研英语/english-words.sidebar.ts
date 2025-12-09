/**
 * 考研英语
 */
import { englishProblemsSidebar } from './英语二真题/english-problems.sidebar'

export const englishWordsSidebar = [
  { text: '词根词缀', link: '词根词缀.md' },
  {
    text: '英语二真题',
    prefix: '英语二真题',
    collapsible: true,
    children: englishProblemsSidebar,
  },
]

