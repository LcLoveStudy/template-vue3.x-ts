import directives from './directives'
import components from './components'
import echarts from './echarts'
const DOCUMENTS: RouterType = {
  path: '/documents',
  name: 'documents',
  meta: {
    orderNo: 2,
    title: '使用手册',
    icon: 'CopyDocument',
    hideMenu: false,
    hideBreadcrumb: false,
    hideChildrenInMenu: false,
    role: ['admin', 'superadmin', 'user']
  },
  children: [
    {
      path: '/documents/home',
      name: 'total',
      meta: {
        title: '集合',
        hideMenu: false,
        hideBreadcrumb: false,
        hideChildrenInMenu: true,
        role: ['admin', 'superadmin', 'user']
      },
      component: () => import('@/views/sys/documents/index.vue'),
      children: []
    },
    {
      path: '/documents/utils',
      name: 'utils',
      meta: {
        title: '工具函数',
        hideMenu: false,
        hideBreadcrumb: false,
        hideChildrenInMenu: true,
        role: ['admin', 'superadmin', 'user']
      },
      component: () => import('@/views/sys/documents/utils/index.vue'),
      children: []
    },
    components,
    echarts,
    directives
  ]
}
export default DOCUMENTS
