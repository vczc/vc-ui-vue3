<script lang="ts" setup></script>

<script lang="ts">
export default {
  name: 'vc-main'
}
</script>

<template>
  <header class="vc_main">
    <slot />
  </header>
</template>

<style lang="scss">
@include create(main) {
  display: block;
  flex: 1;
  flex-basis: auto;
  overflow: auto;
  box-sizing: border-box;
  padding: $--main-padding;
}
</style>
