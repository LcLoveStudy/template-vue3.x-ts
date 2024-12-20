const HOME: RouterType = {
  path: '/home',
  name: 'home',
  meta: {
    orderNo: 2,
    title: '首页',
    icon: 'EditPen',
    hideMenu: false,
    keepChild: true,
    hideBreadcrumb: false,
    hideChildrenInMenu: true,
    role: ['admin', 'superadmin', 'user']
  },
  children: [
    {
      path: '/home',
      name: '/home',
      component: () => import('@/views/sys/home/index.vue'),
      meta: {
        title: '首页',
        hideMenu: true,
        keepChild: false,
        hideBreadcrumb: true,
        hideChildrenInMenu: true,
        role: ['admin', 'superadmin', 'user']
      },
      children: []
    }
  ]
}
export default HOME
