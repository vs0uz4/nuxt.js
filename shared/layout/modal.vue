<script>
export default {
  name: 'cpLayoutModal',
  props: {
    size: { type: String, required: false },
    show: { type: Boolean, required: false }
  },
  created () {
    this.show = this.show || false
  },
  methods: {
    continuar () {
      this.$emit('continue')
    },
    close () {
      this.$emit('update:show', false)
      this.$emit('close')
    }
  }
}
</script>

<template>
  <div>
    <div class="modal fade" :class="{'show': show}" tabindex="-1">
      <div class="modal-dialog" :class="'modal-'+size">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <slot name="title"></slot>
            </h5>
          </div>
          <div class="modal-body">
            <slot name="body"></slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <div class="full-wd">
                <div class="row">
                  <div class="col-6">
                    <button class="btn btn-primary btn-block btn-sm" @click="continuar">Ok</button>
                  </div>
                  <div class="col-6"> 
                    <button class="btn btn-secondary btn-block btn-sm" @click="close">Cancelar</button>
                  </div>
                </div>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade" v-show="show" :class="{'show': show}"></div>
  </div>
</template>

<style lang="scss" scoped>
  .modal.fade.show {
    display: block !important;
  }
</style>


