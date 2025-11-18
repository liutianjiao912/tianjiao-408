import { defineVipNavbarConfig, defineVipSidebarConfig } from '@142vip/vuepress'
import { cppSidebar } from './ccp/cpp.sidebar'
import { cnSidebar } from './cn/cn.sidebar'
import { dsSidebar } from './ds/ds.sidebar'
import { MarkMapSidebar } from './mark-map/mark-map.sidebar'
import { osSidebar } from './os/os.sidebar'

/**
 * 导航栏
 */
export const navbarConfig = defineVipNavbarConfig([
  { text: '🔥 首页', link: '/' },
  { text: '📙 数据结构', link: '/ds/' },
  { text: '📕 操作系统', link: '/os/' },
  { text: '📘 计算机组成原理', link: '/ccp/' },
  { text: '📗 计算机网络', link: '/cn/' },
  { text: '🧠 思维导图', link: '/mark-map/ds-map.html' },
  {
    text: '👉 了解更多',
    children: [
      { text: '📄 变更记录', link: '/changelog.md' },
      { text: '📣 网站动态', link: '/big-event-history.md' },
      {
        text: '外链',
        children: [
          { text: '🎯 开发计划', link: 'https://142vip-cn.feishu.cn/share/base/view/shrcnCSIIgL5Tg2PUpKWwiQnr6g' },
        ],
      },
    ],
  },
])

/**
 * 侧边栏
 */
export const sidebarConfig = defineVipSidebarConfig({
  '/ds': dsSidebar,
  '/os': osSidebar,
  '/ccp': cppSidebar,
  '/cn': cnSidebar,
  '/mark-map': MarkMapSidebar,
})
