<template>
  <gv-character-count
    :max-chars="1000"
    v-model="response.description"
    :label-is-page-heading="true"
    label-class="govuk-label--l"
  >
    <template #label> Describe how and where you lost the {{ toothOrTeeth }} </template>
    <template #hint>
      You should include details of why the {{ toothOrTeeth }} {{ isAre }} not available for
      collection by the Tooth Fairy
    </template>
  </gv-character-count>
  <gv-button @click="go">Continue</gv-button>
</template>
<script setup lang="ts">
const response = useResponseStore()
const toothOrTeeth = parseInt(response.teethLost.length) > 1 ? 'teeth' : 'tooth'
const isAre = parseInt(response.teethLost.length) > 1 ? 'are' : 'is'

async function go() {
  await navigateTo(useReturnToSummary() ? '/check-your-answers' : '/drawing')
}
</script>
