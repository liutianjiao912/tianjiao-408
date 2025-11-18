import { vipDocSite, VipPackageJSON } from '@142vip/utils'
import {
  defineVipVuepressConfig,
  getVipHopeTheme,
  handleImportCodePath,
  VUEPRESS_DEFAULT_DOCS_DIR,
} from '@142vip/vuepress'
import { navbarConfig, sidebarConfig } from './docs/theme.config'

const pkg = VipPackageJSON.getPackageJSON<{ description: string }>()

/**
 * 页脚
 */
const footerHtmlStr = `
<div>
    All Rights Reserved | 
    <strong>${pkg.name}@v${pkg.version} </strong>
</div>
`

/**
 * 版权信息
 */
const copyrightHtmlStr = `
<strong>MIT 协议</strong> | 版权所有 © 2015-${new Date().getFullYear()} 408CSFamily
`

/**
 * 用户自定义配置
 */
export default defineVipVuepressConfig({
  base: vipDocSite.getBase(pkg.name),
  title: '计算机408全家桶',
  description: '磨刀不误砍柴工，读完硕士再打工',
  port: 4200,
  source: '',
  head: [
    ['link', { rel: 'icon', href: 'favicon.ico' }],
  ],
  markdown: {
    importCode: {
      handleImportPath: handleImportCodePath([
        ['@code', 'code'],
        ['@ds', 'code/ds'],
        ['~', ''],
      ]),
    },
    headers: {
      level: [2, 3, 4],
    },
  },
  // 主题配置
  theme: getVipHopeTheme({
    // 导航栏
    navbar: navbarConfig,
    // 侧边栏
    sidebar: sidebarConfig,
    navbarLayout: {
      start: ['Brand'],
      center: ['Links'],
      end: ['Language', 'Outlook', 'Repo', 'Search'],
    },
    logo: '/logo.png',
    logoDark: '/logo.png',
    hostname: 'localhost',
    // 页脚
    footer: footerHtmlStr,
    // 版权
    copyright: copyrightHtmlStr,
    // 仓库
    repo: `142vip/${pkg.name}`,

    // 作者信息
    author: {
      name: '408CSFamily',
    },

    // 文档路径，开启编辑功能
    docsDir: VUEPRESS_DEFAULT_DOCS_DIR,
    docsBranch: 'main',
    // 主题布局选项
    docsRepo: `https://github.com/142vip/${pkg.name}`,

    contributors: true,
    // 插件
    plugins: {
      // 水印
      watermark: {
        enabled: false,
        watermarkOptions: {
          content: '408CSFamily',
        },
      },
    },
  }),
})
