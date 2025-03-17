<template>
  <h1 class="govuk-heading-xl">Your details</h1>
  <gv-input label="Your name" class="govuk-!-width-three-quarters" v-model="response.name" />
  <gv-input
    label="Your age, in years"
    suffix="years old"
    inputmode="numeric"
    :spellcheck="false"
    class="govuk-input--width-3"
    v-model="response.age"
  />
  <gv-input
    :label="settings.customQuestion"
    v-if="settings.customQuestion"
    v-model="response.customQuestionResponse"
  ></gv-input>

  <gv-button @click="go">Continue</gv-button>
</template>
<script setup lang="ts">
const settings = useSettingsStore()
const response = useResponseStore()

async function go() {
  await navigateTo(useReturnToSummary() ? '/check-your-answers' : '/colour')
}
</script>
