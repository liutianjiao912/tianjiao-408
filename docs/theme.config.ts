import { defineVipNavbarConfig, defineVipSidebarConfig } from '@142vip/vuepress'
import { cppSidebar } from './ccp/cpp.sidebar'
import { cnSidebar } from './cn/cn.sidebar'
import { dsSidebar } from './ds/ds.sidebar'
import { linearAlgebraSidebar } from './linear-algebra/linear-algebra.sidebar'
import { MarkMapSidebar } from './mark-map/mark-map.sidebar'
import { mathSidebar } from './math/math.sidebar'
import { osSidebar } from './os/os.sidebar'

export const navbarConfig = defineVipNavbarConfig([])

export const sidebarConfig = defineVipSidebarConfig({
  '/ds': dsSidebar,
  '/os': osSidebar,
  '/ccp': cppSidebar,
  '/cn': cnSidebar,
  '/math': mathSidebar,
  '/linear-algebra': linearAlgebraSidebar,
  '/mark-map': MarkMapSidebar,
})
