/**
 * 项目配置常量
 * 集中管理项目中的配置项，便于统一维护
 */

/**
 * Sidebar 配置
 */
export const SIDEBAR_CONFIG = {
  /** 默认是否可折叠 */
  defaultCollapsible: false,
  /** 总结文件的标准名称 */
  summaryFileName: '总结.md',
} as const

/**
 * Mark Map 配置
 */
export const MARK_MAP_CONFIG = {
  /** 源文件路径 */
  sourcePath: 'docs/mark-map',
  /** 目标文件路径 */
  targetPath: 'docs/.vuepress/public/mind-map',
  /** 文件扩展名 */
  fileExtension: 'md',
} as const

/**
 * XMind 配置
 */
export const XMIND_CONFIG = {
  /** 默认区域设置 */
  defaultRegion: 'cn' as 'cn' | 'global',
  /** 默认文件路径 */
  defaultFilePath: '../mark-map/操作系统发展历程.xmind',
  /** 容器样式 */
  containerStyles: {
    width: '100%',
    minHeight: '600px',
    height: 'auto',
    maxHeight: '1200px',
  },
} as const

/**
 * 数学真题配置
 */
export const MATH_PROBLEMS_CONFIG = {
  /** 起始年份 */
  startYear: 2025,
  /** 结束年份 */
  endYear: 2015,
  /** 题目总数 */
  questionCount: 23,
  /** 选择题范围 */
  choiceRange: { start: 1, end: 10 },
  /** 填空题范围 */
  fillRange: { start: 11, end: 16 },
  /** 解答题范围 */
  answerRange: { start: 17, end: 23 },
} as const

