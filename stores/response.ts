export const useResponseStore = defineStore(
  'response',
  () => {
    const name: Ref<string> = ref('')
    const age: Ref<string> = ref('')
    const customQuestionResponse: Ref<string> = ref('')
    const description: Ref<string> = ref('')
    const teethLost: Ref<Array<string>> = ref([])
    const drawing: Ref<string> = ref('')
    const drawingStrokes: Ref<any | null> = ref(null)
    const colour: Ref<string> = ref('')
    const submissionRef: Ref<string> = ref('')

    return {
      name,
      age,
      customQuestionResponse,
      description,
      teethLost,
      drawing,
      drawingStrokes,
      colour,
      submissionRef
    }
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.sessionStorage()
    }
  }
)
