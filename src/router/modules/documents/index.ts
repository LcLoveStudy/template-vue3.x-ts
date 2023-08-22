import directives from './directives'
import components from './components'
const DOCUMENTS: RouterType = {
  path: '/documents',
  name: 'documents',
  meta: {
    title: '使用手册',
    icon: 'CopyDocument',
    hideMenu: false,
    keepChild: false,
    hideBreadcrumb: false,
    hideChildrenInMenu: false,
    role: ['admin', 'superadmin', 'user']
  },
  children: [
    {
      path: '/documents/utils',
      name: 'utils',
      meta: {
        title: '工具函数',
        hideMenu: false,
        icon: '',
        keepChild: false,
        hideBreadcrumb: false,
        hideChildrenInMenu: true,
        role: ['admin', 'superadmin', 'user']
      },
      component: () => import('@/views/documents/utils/index.vue'),
      children: []
    },
    {
      path: '/documents/style',
      name: 'style',
      meta: {
        title: '原子化css',
        hideMenu: false,
        keepChild: true,
        icon: '',
        hideBreadcrumb: false,
        hideChildrenInMenu: true,
        role: ['admin', 'superadmin', 'user']
      },
      component: () => import('@/views/documents/style-show/index.vue'),
      children: []
    },
    components,
    {
      path: '/documents/code/chart',
      name: 'chart',
      meta: {
        title: '图表',
        hideMenu: false,
        keepChild: true,
        icon: '',
        hideBreadcrumb: false,
        hideChildrenInMenu: true,
        role: ['admin', 'superadmin', 'user']
      },
      component: () => import('@/views/documents/chart/index.vue'),
      children: []
    },
    directives
  ]
}
export default DOCUMENTS
