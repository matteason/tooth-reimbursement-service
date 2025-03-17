<template>
  <h1 class="govuk-heading-l">Check your answers before sending your claim</h1>

  <trs-summary />
  <h2 class="govuk-heading-m">Now send your claim</h2>
  <p class="govuk-body">
    By submitting this claim you are confirming that, to the best of your knowledge, the details you
    are providing are correct.
  </p>

  <gv-button @click="go">Accept and send</gv-button>
</template>
<script setup lang="ts">
async function go() {
  await navigateTo('/confirmation')
}
</script>
