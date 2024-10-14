import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useUserSettings = defineStore('userSettings', () => {
  const groupCode = ref(localStorage.getItem('groupCode') || undefined)
  const theme = ref(localStorage.getItem('theme') || 'light')

  watch([groupCode], (newGroupCode) => {
    localStorage.setItem('groupCode', newGroupCode)
  })
  watch([theme], (newTheme) => {
    localStorage.setItem('theme', newTheme)
  })

  return { groupCode, theme }
})
