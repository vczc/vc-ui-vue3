<script lang="ts" setup>
interface Props {
  height?: string
}

const props = defineProps<Props>()
withDefaults(props, { height: '60px' })
</script>

<script lang="ts">
export default {
  name: 'vc-header'
}
</script>

<template>
  <header class="vc_header" :style="{ height }">
    <slot />
  </header>
</template>

<style lang="scss">
@include create(header) {
  padding: $--header-padding;
  box-sizing: border-box;
  flex-shrink: 0;
}
</style>
