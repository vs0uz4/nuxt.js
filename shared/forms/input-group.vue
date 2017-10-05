<script>
export default {
  props: ['field', 'name', 'error'],
  name: 'cpInputGroup'
}
</script>

<template>
  <div :class="{'form-error': error}">
    <div class="label" :for="field">{{ name }}</div>
    <div class="input-group">
      <slot name="input"></slot>
      <span class="input-group-btn">
        <slot name="button"></slot>
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/config";
div.label {
  font-weight: 500;
  margin-bottom: .5rem;
}
.form-error {
  div.label {
    color: $danger;
  }
  .form-control {
    border-color: $danger;
  }
}
.form-success {
  div.label {
    color: $success;   
  }
  .form-control {
    border-color: $success;
  }
}
</style>

