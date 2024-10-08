/**
 * meta:{
 *  hideChildrenInMenu:是否在菜单中隐藏子项
 *  orderNo:在菜单中的第几项
 *  icon:图标
 *  role:权限
 *  title:菜单上显示的名称
 *  hideMenu:是否在菜单上隐藏
 *  hideBreadcrumb:是否在面包屑上隐藏
 *  keepChild:是否是嵌套路由
 * }
 */
declare type RouterMetaType = {
  hideChildrenInMenu: boolean
  orderNo?: number
  icon?: string
  title: string
  role: Array<string>
  hideMenu: boolean
  hideBreadcrumb: boolean
  keepChild?: boolean
}

/**
 * 路由的类型规范
 * path:路径(如果有子路由需要和子路由第一项保持一致)
 * name:名称(要和路径最后一级保持一致)
 * component:要渲染的组件
 * children:子路由配置
 */
declare interface RouterType {
  path: string
  name: string
  redirect?: string
  component?: Function
  meta: RouterMetaType
  children: Array<RouterType> | never
}
