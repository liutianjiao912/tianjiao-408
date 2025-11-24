import { defineVipNavbarConfig, defineVipSidebarConfig } from '@142vip/vuepress'
import { cppSidebar } from './ccp/cpp.sidebar'
import { cnSidebar } from './cn/cn.sidebar'
import { dsSidebar } from './ds/ds.sidebar'
import { linearAlgebraSidebar } from './linear-algebra/linear-algebra.sidebar'
import { MarkMapSidebar } from './mark-map/mark-map.sidebar'
import { advancedMathematicsSidebar } from './advanced-mathematics/advanced-mathematics.sidebar'
import { osSidebar } from './os/os.sidebar'
import { mathProblemsSidebar } from './math-problems/math-problems.sidebar'

export const navbarConfig = defineVipNavbarConfig([])

export const sidebarConfig = defineVipSidebarConfig({
  '/ds': dsSidebar,
  '/os': osSidebar,
  '/ccp': cppSidebar,
  '/cn': cnSidebar,
  '/advanced-mathematics': advancedMathematicsSidebar,
  '/linear-algebra': linearAlgebraSidebar,
  '/mark-map': MarkMapSidebar,
  '/math-problems': mathProblemsSidebar,
})
