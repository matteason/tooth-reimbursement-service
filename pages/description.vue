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
  <gv-details>
    <template #summary> If you have swallowed the {{ toothOrTeeth }} </template>
    <p class="govuk-body">
      If you have swallowed the {{ toothOrTeeth }} we will notify our Rat Volunteer Network, who
      will monitor the sewerage system for your {{ toothOrTeeth }} over the next 24 to 48 hours.
    </p>
    <p class="govuk-body">
      Any teeth found will be matched to your DNA for verification before being cleaned and sent to
      the national vault for archival.
    </p>
  </gv-details>
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
