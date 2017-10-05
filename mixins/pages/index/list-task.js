import { mapGetters } from 'vuex'
import PageTemplate from '~/mixins/page-template'

export default {
  extends: PageTemplate,
  data () {
    return {
      item: null,
      modalConfirm: false
    }
  },
  computed: mapGetters({
    list: 'tarefa/listOrder'
  }),
  methods: {
    tarefaFeita (item) {
      this.$store.commit('tarefa/TAREFAFEITA', item)
    },
    deletaFeita (item) {
      this.item = item
      this.$store.dispatch('openConfirmModal', {
        message: 'Tem certeza que deseja excluir a tarefa?',
        info: item,
        resolve: () => this.$store.commit('tarefa/DELTAREFA', this.item)
      })
      // this.modalConfirm = true
    },
    continueDel () {
      this.$store.commit('tarefa/DELTAREFA', this.item)
      this.modalConfirm = false
      this.item = null
    }
  }
}
