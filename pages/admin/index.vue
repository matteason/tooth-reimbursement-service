<template>
  <gv-error-summary v-if="oldFartError">
    <gv-error-link target-id="old-fart">
      {{ oldFartError }}
    </gv-error-link>
  </gv-error-summary>
  <h1 class="govuk-heading-xl">Sign in to admin console</h1>
  <p class="govuk-body">
    Access to the admin console is only available to Senior Fairy-Approved Reimbursement Technicians
    (Old FARTs).
  </p>
  <gv-radios
    id="old-fart"
    legend="Are you an Old FART?"
    v-model="isOldFart"
    :error-message="oldFartError"
  >
    <gv-radio :value="true">Yes</gv-radio>
    <gv-radio :value="false">No</gv-radio>
  </gv-radios>
  <gv-warning-text>
    Lying about being an Old FART is a criminal offence punishable by no TV for a week.
  </gv-warning-text>
  <gv-button @click="validate">Continue</gv-button>
</template>

<script setup lang="ts">
const isOldFart: Ref<boolean | null> = ref(null)
const oldFartError: Ref<string | null> = ref(null)

async function validate() {
  if (isOldFart.value === null) {
    oldFartError.value = "Select yes if you're an Old FART"
  } else {
    oldFartError.value = null
  }

  if (oldFartError.value === null) {
    if (isOldFart.value) {
      await navigateTo('/admin/im-an-old-fart')
    } else {
      await navigateTo('/admin/access-denied')
    }
  }
}
</script>
