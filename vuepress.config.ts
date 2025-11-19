import { vipDocSite, VipPackageJSON } from '@142vip/utils'
import {
  defineVipVuepressConfig,
  getVipHopeTheme,
  handleImportCodePath,
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
    importCode: {
      handleImportPath: handleImportCodePath([
        ['@code', 'code'],
        ['@ds', 'code/ds'],
        ['~', ''],
      ]),
    },
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
    hostname: 'localhost',
    footer: `<div>All Rights Reserved | <strong>${pkg.name}@v${pkg.version}</strong></div>`,
    copyright: `版权所有 © 2015-${new Date().getFullYear()} 408CSFamily`,
    author: { name: '408CSFamily' },
    docsDir: VUEPRESS_DEFAULT_DOCS_DIR,
    docsBranch: 'main',
    docsRepo: `https://github.com/142vip/${pkg.name}`,
    contributors: true,
    plugins: {
      search: {
        maxSuggestions: 10,
        isSearchable: page => page.path !== '/',
        getExtraFields: page => (page.frontmatter.title ? [page.frontmatter.title as string] : []),
        locales: {
          '/': {
            placeholder: '搜索文档',
            empty: '没有找到结果',
            searching: '搜索中...',
          },
        },
      },
      watermark: { enabled: false },
    },
  }),
})
