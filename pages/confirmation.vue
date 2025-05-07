<template>
  <gv-panel id="foo">
    <template #title> Claim submitted </template>
    Your reference number<br /><strong>TF-230/{{ response.submissionRef }}</strong>
  </gv-panel>
  <p class="govuk-body">
    You can
    <a href="#" @click.prevent="downloadSummary" class="govuk-link"
      >download a copy of your answers</a
    >
    for your records.
  </p>
  <h2 class="govuk-heading-m">If you have a printer</h2>
  <p class="govuk-body">
    <NuxtLink to="/certificate" class="govuk-link">Print a certificate</NuxtLink>
    for the Tooth Fairy to complete upon reimbursement. Leave this under your pillow in lieu of your
    tooth. If you can't print the certificate, you'll still be reimbursed.
  </p>

  <h2 class="govuk-heading-m">What happens next</h2>
  <p class="govuk-body">
    We've sent your claim to trained Tooth Fairy assessors at the Department of Teeth.
  </p>
  <p class="govuk-body">
    If your claim is approved, your reimbursement
    <template v-if="totalDue">of {{ totalDue }}</template> will usually be delivered to your pillow
    within 48 hours.
  </p>
  <p class="govuk-body">
    Please show this confirmation to any grown-ups you live with to ensure they are prepared for the
    Tooth Fairy's arrival.
  </p>
  <h2 class="govuk-heading-m">If your tooth is found</h2>
  <p class="govuk-body">
    In the event of your tooth’s eventual recovery, please submit Form TF-230b within six business
    days, including the state and current location of the tooth, so it can be collected and archived
    in the national vault.
  </p>
  <gv-warning-text>
    Do not attempt to re-submit said tooth for pillow reimbursement as ‘double dental disclosure’ is
    illegal under Section 17B(2) of the Teeth Finance & Renewal Act (1978) and you will be
    prosecuted, jailed, or blasted into space.
  </gv-warning-text>
  <h2 class="govuk-heading-m">Tell us what you think of this service</h2>
  <p class="govuk-body">
    The Department of Teeth are committed to continual improvement. You can ask a grown-up to
    <a href="mailto:matt@matteason.co.uk?subject=TF-230" class="govuk-link">email their feedback</a
    >.
  </p>
  <div
    v-if="showSummaryForDownload"
    id="summary"
    style="width: 630px; max-width: 630px !important; padding: 40px; background: white"
  >
    <img src="/images/department-of-teeth.png" height="40" class="govuk-!-margin-bottom-5" />
    <h1 class="govuk-heading-l govuk-!-margin-bottom-0">TF-230: Claim for a missing tooth</h1>
    <span class="govuk-caption-l govuk-!-margin-bottom-5"
      >Claim submission confirmation TF-230/{{ response.submissionRef }}</span
    >

    <trs-summary :show-actions="false" />
  </div>
</template>

<script setup lang="ts">
import html2canvas from 'html2canvas'

const response = useResponseStore()
const settings = useSettingsStore()

response.submissionRef = parseInt(Date.now() / 1000).toString()

const showSummaryForDownload = ref(false)

const totalDue = computed(() => {
  const formatter = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' })
  return settings.amountPerTooth && response.teethLost.length > 0
    ? formatter.format(response.teethLost.length * settings.amountPerTooth ?? 0)
    : null
})

function downloadSummary() {
  showSummaryForDownload.value = true

  nextTick(() => {
    html2canvas(document.querySelector('#summary')).then((canvas) => {
      showSummaryForDownload.value = false
      const link = document.createElement('a')
      link.download = `TF-230-${response.submissionRef}.png`
      link.href = canvas.toDataURL('image/png')
      link.click()

      window._paq.push(['trackEvent', 'Confirmation', 'Download answers'])
    })
  })
}
</script>

<style lang="scss">
#summary {
  position: absolute;
  top: -10000px;
  left: -10000px;
}
</style>
