<script>
export default {
  props: ['field', 'name', 'error'],
  name: 'cpFormGroup'
}
</script>

<template>
  <div>
    <div class="form-group" :class="{'form-error': error}">
      <label :for="field">{{ name }}</label>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/config";

.form-error {
  label {
    color: $danger;
  }
  .form-control {
    border-color: $danger;
  }
}
.form-success {
  label {
    color: $success;   
  }
  .form-control {
    border-color: $success;
  }
}
</style>

