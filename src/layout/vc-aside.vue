<script setup lang="ts">
import { withDefaults } from 'vue'

interface Props {
  width: string
}
withDefaults(defineProps<Props>(), {
  width: '300px'
})
</script>

<script lang="ts">
export default {
  name: 'vc-aside'
}
</script>

<template>
  <aside class="vc_aside" :style="{ width }">
    <slot />
  </aside>
</template>

<style lang="scss">
@include create(aside) {
  overflow: auto;
  box-sizing: border-box;
  flex-shrink: 0;
}
</style>
