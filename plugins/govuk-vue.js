import { GovUkVue } from 'govuk-vue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(GovUkVue)
})
