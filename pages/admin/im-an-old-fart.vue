<template>
  <h1 class="govuk-heading-xl">Admin console</h1>
  <gv-input v-model="customQuestion">
    <template #label>Custom question (optional)</template>
    <template #hint
      >For example, Favourite Minecraft mob. This will be shown when asking the applicant for their
      details.</template
    >
  </gv-input>
  <gv-input
    prefix="£"
    class="govuk-input--width-3"
    v-model="amountPerTooth"
    inputmode="numeric"
    :spellcheck="false"
  >
    <template #label>Amount reimbursed per tooth, in pounds and pence (optional)</template>
    <template #hint>If left blank, a reimbursement amount won't be shown</template>
  </gv-input>

  <gv-details summary="More information for Old FARTs">
    <p class="govuk-body">
      The settings above only apply on the device you're currently using, so set them to whatever
      you want.
    </p>
    <p class="govuk-body">
      The information your child enters in this service doesn't actually go anywhere, so don't worry
      about them entering things like their name or address.
    </p>
  </gv-details>

  <gv-button @click="save"> Save and continue </gv-button>
</template>
<script setup lang="ts">
const settings = useSettingsStore()
const customQuestion: Ref<string | null> = ref(settings.customQuestion)
const amountPerTooth: Ref<string | null> = ref(
  settings.amountPerTooth ? settings.amountPerTooth.toString() : null
)

async function save() {
  settings.customQuestion = customQuestion.value
  const parsedAmount = amountPerTooth.value ? parseFloat(amountPerTooth.value) : NaN
  settings.amountPerTooth = isNaN(parsedAmount) ? null : parsedAmount

  await navigateTo('/?saved')
}
</script>
