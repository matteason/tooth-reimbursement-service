<template>
  <h1 class="govuk-heading-xl">Which teeth are missing?</h1>
  <p class="govuk-body">
    Select which teeth you've lost. Only include teeth which are missing or destroyed and cannot be
    collected by the Tooth Fairy.
  </p>

  <DentalInput
    v-model="selectedTeeth"
    :radio-mode="false"
    style="width: min(32em, 100%)"
    class="dental-input"
    :class="`dental-input--${response.colour}`"
  />

  <gv-inset-text v-if="response.teethLost.length > 0 && settings.amountPerTooth > 0">
    Total due for reimbursement: <span class="govuk-!-font-weight-bold">{{ totalDue }}</span>
  </gv-inset-text>

  <gv-warning-text class="govuk-!-margin-top-5">
    Knowingly making a false claim is a criminal offense under Section 17B(2) of the Teeth Finance &
    Renewal Act (1978) and you may be prosecuted, jailed, or blasted into space.
  </gv-warning-text>

  <gv-button @click="go">Continue</gv-button>
</template>
<script setup lang="ts">
import { DentalInput } from 'dental-input'
import 'dental-input/style'

const settings = useSettingsStore()
const response = useResponseStore()

const selectedTeeth: Ref<Set<string>> = ref(new Set(response.teethLost))

watch(selectedTeeth, () => {
  response.teethLost = Array.from(selectedTeeth.value)
})

const totalDue = computed(() => {
  const formatter = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' })
  return formatter.format(response.teethLost.length * settings.amountPerTooth ?? 0)
})

async function go() {
  await navigateTo(useReturnToSummary() ? '/check-your-answers' : '/description')
}
</script>

<style lang="scss">
$eggshell: #f6efea;
$lemonade: #fff9c4;
$custard: #ffe389;
$wee: #f1e91a;
$banana: #ffcc00;

.dental-input {
  &--eggshell {
    path[id^='tooth'] {
      fill: $eggshell !important;
    }
  }

  &--lemonade {
    path[id^='tooth'] {
      fill: $lemonade !important;
    }
  }

  &--custard {
    path[id^='tooth'] {
      fill: $custard !important;
    }
  }

  &--wee {
    path[id^='tooth'] {
      fill: $wee !important;
    }
  }

  &--ripe-banana {
    path[id^='tooth'] {
      fill: $banana !important;
    }
  }
}
</style>
