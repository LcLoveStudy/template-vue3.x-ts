import type { UserType } from '#/userinfo'
import { LocalStorageKeys } from '@/enums/localstorage'
import { getItem, startProcess } from '@/utils'
import type { AxiosInstance } from 'axios'
import { ElMessage } from 'element-plus'

/**
 * 初始化请求拦截器
 * @param service axios实例对象
 */
export const initRequestInterceptors = (service: AxiosInstance) => {
  service.interceptors.request.use(
    (config: any) => {
      const showMessage = config.showMessage
      const message = config.message
      const token = getItem<UserType>(LocalStorageKeys.USERINFO)
      // 是否展示弹框提示，自定义提示信息
      if (showMessage) {
        config.headers.showMessage = true
        if (message) {
          config.headers.message = encodeURIComponent(message)
        }
      }
      // 是否展示头部进度条
      if (config.showProgress) {
        startProcess()
      }
      // 设置token
      if (token) {
        config.headers.token = token
      }
      return config
    },
    (error) => {
      ElMessage.warning('请稍后再试')
      return Promise.reject(error)
    }
  )
}