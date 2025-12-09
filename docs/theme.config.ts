import { defineVipNavbarConfig, defineVipSidebarConfig } from '@142vip/vuepress'
import { advancedMathematicsSidebar } from './考研数学/advanced-mathematics.sidebar'
import { sidebar408 } from './408/408.sidebar'
import { englishWordsSidebar } from './考研英语/english-words.sidebar'
import { politicsSidebar } from './考研政治/politics.sidebar'

export const navbarConfig = defineVipNavbarConfig([])

export const sidebarConfig = defineVipSidebarConfig({
  '/408': sidebar408,
  '/考研数学': advancedMathematicsSidebar,
  '/考研英语': englishWordsSidebar,
  '/考研政治': politicsSidebar,
})
