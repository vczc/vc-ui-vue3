<script lang="ts" setup>
interface Props {
  height?: string
}

const props = defineProps<Props>()
withDefaults(props, { height: '60px' })
</script>

<script lang="ts">
export default {
  name: 'vc-footer'
}
</script>

<template>
  <header class="vc_footer" :style="{ height }">
    <slot />
  </header>
</template>

<style lang="scss">
@include create(footer) {
  padding: $--footer-padding;
  box-sizing: border-box;
  flex-shrink: 0;
}
</style>
