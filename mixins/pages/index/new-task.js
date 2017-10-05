import PageTemplate from '~/mixins/page-template'

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
      this.$store.commit('tarefa/NEWTASK', this.newTask)
    }
  }
}
