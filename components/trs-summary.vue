<template>
  <h2 class="govuk-heading-m">Your details</h2>
  <gv-summary-list>
    <gv-summary-list-row key-text="Name" :value-text="response.name">
      <template #actions>
        <gv-summary-list-row-action
          v-if="showActions"
          :component="NuxtLink"
          href="/your-details?returntosummary"
          >Change</gv-summary-list-row-action
        >
      </template>
    </gv-summary-list-row>
    <gv-summary-list-row key-text="Age" :value-text="`${response.age} years old`">
      <template #actions>
        <gv-summary-list-row-action
          v-if="showActions"
          :component="NuxtLink"
          href="/your-details?returntosummary"
          >Change</gv-summary-list-row-action
        >
      </template>
    </gv-summary-list-row>
    <gv-summary-list-row
      v-if="settings.customQuestion"
      :key-text="settings.customQuestion"
      :value-text="response.customQuestionResponse"
    >
      <template #actions>
        <gv-summary-list-row-action
          v-if="showActions"
          :component="NuxtLink"
          href="/your-details?returntosummary"
          >Change</gv-summary-list-row-action
        >
      </template>
    </gv-summary-list-row>
  </gv-summary-list>

  <h2 class="govuk-heading-m">Details of tooth loss</h2>
  <gv-summary-list>
    <gv-summary-list-row
      key-text="Colour"
      :value-text="response.colour.replace('-', ' ')"
      style="text-transform: capitalize"
    >
      <template #actions>
        <gv-summary-list-row-action
          v-if="showActions"
          :component="NuxtLink"
          href="/colour?returntosummary"
          >Change</gv-summary-list-row-action
        >
      </template>
    </gv-summary-list-row>
    <gv-summary-list-row
      key-text="Missing teeth"
      :value-text="response.teethLost.join(', ').replaceAll('tooth', '')"
    >
      <template #actions>
        <gv-summary-list-row-action
          v-if="showActions"
          :component="NuxtLink"
          href="/select-teeth?returntosummary"
          >Change</gv-summary-list-row-action
        >
      </template>
    </gv-summary-list-row>
    <gv-summary-list-row
      key-text="Description of loss"
      :value-text="`${response.description}`"
      style="white-space: pre-line"
    >
      <template #actions>
        <gv-summary-list-row-action
          v-if="showActions"
          :component="NuxtLink"
          href="/description?returntosummary"
          >Change</gv-summary-list-row-action
        >
      </template>
    </gv-summary-list-row>
    <gv-summary-list-row
      key-text="Drawing of incident"
      key-class="top-align"
      actions-class="top-align"
    >
      <template #actions>
        <gv-summary-list-row-action
          v-if="showActions"
          :component="NuxtLink"
          href="/drawing?returntosummary"
          >Change</gv-summary-list-row-action
        >
      </template>
      <template #value>
        <img :src="response.drawing" class="drawing-canvas" alt="Your drawing" />
      </template>
    </gv-summary-list-row>
  </gv-summary-list>
</template>
<script setup lang="ts">
const props = defineProps({
  showActions: {
    type: Boolean,
    default: true
  }
})
import { NuxtLink } from '#components'

const response = useResponseStore()
const settings = useSettingsStore()
</script>
<style lang="scss">
.top-align {
  vertical-align: top;
}

.drawing-canvas {
  border: 2px solid black;
}
</style>
