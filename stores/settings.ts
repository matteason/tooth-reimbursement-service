export const useSettingsStore = defineStore(
  'settings',
  () => {
    const customQuestion: Ref<string | null> = ref(null)
    const amountPerTooth: Ref<number | null> = ref(null)

    return { customQuestion, amountPerTooth }
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.localStorage()
    }
  }
)
