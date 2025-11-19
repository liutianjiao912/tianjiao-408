import { defineVipNavbarConfig, defineVipSidebarConfig } from '@142vip/vuepress'
import { cppSidebar } from './ccp/cpp.sidebar'
import { cnSidebar } from './cn/cn.sidebar'
import { dsSidebar } from './ds/ds.sidebar'
import { MarkMapSidebar } from './mark-map/mark-map.sidebar'
import { osSidebar } from './os/os.sidebar'

export const navbarConfig = defineVipNavbarConfig([])

export const sidebarConfig = defineVipSidebarConfig({
  '/ds': dsSidebar,
  '/os': osSidebar,
  '/ccp': cppSidebar,
  '/cn': cnSidebar,
  '/mark-map': MarkMapSidebar,
})
