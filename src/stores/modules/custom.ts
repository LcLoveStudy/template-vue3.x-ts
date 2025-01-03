import { ref } from 'vue'
import { LocalStorageKeys } from '@/enums/localstorage'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@/hooks'

export const useCustomStore = defineStore('custom', () => {
  const asideMenuFold = ref(false)
  const theme = useLocalStorage<'dark' | 'light'>(LocalStorageKeys.THEME, 'light') // 主题色
  /** 切换默认主题 */
  const checkoutTheme = () => {
    document.documentElement.classList.toggle('dark')
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  onMounted(() => {
    if (theme.value === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })

  const menuPosition = useLocalStorage<'aside' | 'top'>(LocalStorageKeys.MENUPOSITION, 'aside')
  return { menuPosition, asideMenuFold, theme, checkoutTheme }
})
