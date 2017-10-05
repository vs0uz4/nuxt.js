import { mapGetters } from 'vuex'
import ApiTarefa from '~/mixins/api/tarefa'
import PageTemplate from '~/mixins/page-template'

export default {
  extends: PageTemplate,
  computed: mapGetters({
    list: 'tarefa/listOrder'
  }),
  methods: {
    async tarefaFeita (item) {
      await ApiTarefa.feita(item)
      this.$store.commit('tarefa/TAREFAFEITA', item)
    },
    deletaFeita (item) {
      this.$store.dispatch('openConfirmModal', {
        message: 'Tem certeza que deseja excluir a tarefa?',
        info: item,
        resolve: async info => {
          await ApiTarefa.excluir(info)
          return this.$store.commit('tarefa/DELTAREFA', info)
        }
      })
    }
  }
}
