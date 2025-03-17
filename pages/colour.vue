<template>
  <gv-radios
    legend="Tooth colour"
    :legend-is-page-heading="true"
    legend-class="govuk-fieldset__legend--xl"
    v-model="response.colour"
  >
    <gv-radio value="white">White</gv-radio>
    <gv-radio value="eggshell" class="radio-eggshell">Eggshell</gv-radio>
    <gv-radio value="lemonade" class="radio-lemonade">Lemonade</gv-radio>
    <gv-radio value="custard" class="radio-custard">Custard</gv-radio>
    <gv-radio value="wee" class="radio-wee">Wee</gv-radio>
    <gv-radio value="ripe-banana" class="radio-banana">Ripe banana</gv-radio>
  </gv-radios>

  <gv-inset-text>
    The condition and colour of the tooth may affect cash amount paid, in keeping with market
    valuations agreed upon by Tooth Fairy assessors, and awards offered may vary if brushing and
    cleaning is found to have been subpar.
  </gv-inset-text>

  <gv-button @click="go">Continue</gv-button>
</template>
<script setup lang="ts">
const response = useResponseStore()

async function go() {
  await navigateTo(useReturnToSummary() ? '/check-your-answers' : '/select-teeth')
}
</script>
<style lang="scss">
$eggshell: #f6efea;
$lemonade: #fff9c4;
$custard: #ffe389;
$wee: #f1e91a;
$banana: #ffcc00;

.radio-eggshell + .govuk-label::before {
  background: $eggshell;
}
.radio-lemonade + .govuk-label::before {
  background: $lemonade;
}
.radio-custard + .govuk-label::before {
  background: $custard;
}
.radio-wee + .govuk-label::before {
  background: $wee;
}
.radio-banana + .govuk-label::before {
  background: $banana;
}
</style>
