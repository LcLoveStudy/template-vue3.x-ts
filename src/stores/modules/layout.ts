import { ref } from 'vue'
import { LocalStorageKeys } from '@/enums/localstorage'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@/hooks'

export const useLayoutStore = defineStore('layout', () => {
  const asideMenuFold = ref(false)
  const menuPosition = useLocalStorage<'aside' | 'top'>(LocalStorageKeys.MENUPOSITION, 'aside')
  return { menuPosition, asideMenuFold }
})
