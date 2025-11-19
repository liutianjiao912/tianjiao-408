import { vipDocSite, VipPackageJSON } from '@142vip/utils'
import {
  defineVipVuepressConfig,
  getVipHopeTheme,
  VUEPRESS_DEFAULT_DOCS_DIR,
} from '@142vip/vuepress'
import { navbarConfig, sidebarConfig } from './docs/theme.config'

const pkg = VipPackageJSON.getPackageJSON<{ description: string }>()

export default defineVipVuepressConfig({
  base: vipDocSite.getBase(pkg.name),
  title: '天阶斗技',
  port: 4200,
  head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
  markdown: {
    headers: { level: [2, 3, 4] },
  },
  theme: getVipHopeTheme({
    navbar: navbarConfig,
    sidebar: sidebarConfig,
    navbarLayout: {
      start: ['Brand'],
      center: ['Links'],
      end: ['Language', 'Outlook', 'Search'],
    },
    logo: '/images/logo.jpeg',
    logoDark: '/images/logo.jpeg',
    docsDir: VUEPRESS_DEFAULT_DOCS_DIR,
    plugins: {
      search: {
        maxSuggestions: 10,
        locales: {
          '/': {
            placeholder: '搜索文档',
            empty: '没有找到结果',
            searching: '搜索中...',
          },
        },
      },
    },
  }),
})
