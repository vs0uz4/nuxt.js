<script>
import cpLayoutModal from '~/shared/layout/modal.vue'
import Default from '~/mixins/layouts/default'

export default {
  extends: Default,
  components: { cpLayoutModal }
}
</script>

<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-md-7 ml-auto mr-auto">
          <div class="text-right mt-3 mb-2">
            <button class="btn btn-link" @click="logout">
              <i class="fa fa-sign-out"></i> Sair
            </button>
          </div>
          <nuxt/>
        </div>
      </div>
    </div>
    <cp-layout-modal size="sm" :show="confirmModal.show" @update:show="updateModal" @continue="continueModal">
      <span slot="title">Confirme</span>  
      <div slot="body">{{ confirmModal.message }}</div>  
    </cp-layout-modal>
  </div>
</template>
