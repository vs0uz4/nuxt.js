<script>
export default {
  props: ['show'],
  name: 'cpFormError'
}
</script>

<template>
  <div class="error" v-show="show"><slot/></div>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/config";

.error {
  color: $danger !important;
  font-size: 12px !important;
}
</style>