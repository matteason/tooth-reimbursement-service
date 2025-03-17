<template>
  <gv-notification-banner v-if="showSavedBanner" type="success" :disable-auto-focus="true">
    <h3 class="govuk-notification-banner__heading">Settings saved</h3>
    <p class="govuk-body">
      <a
        class="govuk-link"
        href="#"
        @click.prevent="
          () => {
            showSavedBanner = false
          }
        "
        >Hide this message</a
      >
    </p>
  </gv-notification-banner>
  <h1 class="govuk-heading-xl">Claim for a missing tooth</h1>
  <p class="govuk-body">
    Use this service to claim financial reimbursement for a tooth which has been lost and cannot be
    collected by the Tooth Fairy - for example, teeth which have been:
  </p>
  <ul class="govuk-list govuk-list--bullet">
    <li>accidentally swallowed</li>
    <li>stolen by a ferret</li>
    <li>destroyed by an asteroid</li>
  </ul>
  <gv-button :is-start-button="true" @click="go">Start now</gv-button>
  <h2 class="govuk-heading-m">Other ways to claim</h2>
  <p class="govuk-body">
    You can also print and fill in
    <a
      href="https://drive.google.com/file/d/1mZ09dgW9UO0_CBxXoc_VTN7wC93ABrVe/view"
      class="govuk-link"
      >Form TF-230</a
    >
    and leave it under your pillow.
  </p>
</template>

<script setup lang="ts">
const showSavedBanner = ref(false)

onMounted(() => {
  showSavedBanner.value = new URLSearchParams(new URL(window.location.toString()).search).has(
    'saved'
  )
})

async function go() {
  await navigateTo('/your-details')
}
</script>
