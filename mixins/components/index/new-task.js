import ApiTarefa from '~/mixins/api/tarefa'
import PageTemplate from '~/mixins/template/page'

export default {
  extends: PageTemplate,
  data () {
    return {
      newTask: {
        feita: false,
        nome: null
      }
    }
  },
  methods: {
    async onSubmit () {
      const response = await this.$validator.validateAll()
      if (!response) return this.warnMsg({ message: 'Campos obrigatórios não prenchidos' })
      await ApiTarefa.put(this.newTask)
      this.$store.commit('tarefa/NEWTASK', this.newTask)
    }
  }
}
