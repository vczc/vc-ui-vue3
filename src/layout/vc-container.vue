<script lang="ts" setup>
import { Component, computed, useSlots, VNode } from 'vue'

interface Props {
  direction?: string
}

const props = defineProps<Props>()
const slots = useSlots()
const isVertical = computed(() => {
  if (slots && slots.default) {
    return slots.default().some((vn: VNode) => {
      const tag = (vn.type as Component).name
      return tag === 'vc-header' || tag === 'vc-footer'
    })
  } else {
    return props.direction === 'vertical'
  }
})
</script>

<script lang="ts">
export default {
  name: 'vc-container'
}
</script>

<template>
  <section class="vc_container" :class="{ is_vertical: isVertical }">
    <slots />
  </section>
</template>

<style lang="scss">
@include create(container) {
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;

  @include when(vertical) {
    flex-direction: column;
  }
}
</style>
