<template>
  <h1 class="govuk-heading-xl">Drawing of tooth loss incident</h1>
  <p class="govuk-body">
    Draw the scene and circumstances of the tooth loss to the best of your recollection. Include any
    relevant animals, siblings or foodstuffs.
  </p>
  <vue-drawing-canvas
    width="300"
    height="400"
    class="drawing-canvas govuk-!-margin-bottom-5"
    ref="VueCanvasDrawing"
    :lineWidth="eraser ? 15 : 2"
    :eraser="eraser"
    v-model:image="response.drawing"
    :initial-image="response.drawingStrokes"
  />
  <div class="govuk-button-group">
    <gv-button class="govuk-button--secondary" @click="() => (eraser = !eraser)"
      >{{ eraser ? 'Disable' : 'Enable' }} eraser</gv-button
    >
  </div>
  <gv-button @click="go">Continue</gv-button>
</template>
<script setup lang="ts">
import VueDrawingCanvas from 'vue-drawing-canvas'

const response = useResponseStore()
const VueCanvasDrawing = useTemplateRef('VueCanvasDrawing')
const eraser = ref(false)

watch(
  () => {
    return response.drawing
  },
  () => {
    response.drawingStrokes = VueCanvasDrawing.value.getAllStrokes()
  }
)

async function go() {
  await navigateTo(useReturnToSummary() ? '/check-your-answers' : '/check-your-answers')
}
</script>

<style lang="scss">
.drawing-canvas {
  border: 2px solid black;
  display: block;
}
</style>
