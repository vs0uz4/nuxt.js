import PageTemplate from '~/mixins/template/page'

export default {
  extends: PageTemplate,
  created () {
    if (this.$store.state.auth) {
      this.$store.dispatch('logout')
    }
  },
  data () {
    return {
      form: {
        usuario: null, senha: null
      }
    }
  },
  methods: {
    async onSubmit () {
      const response = await this.$validator.validateAll()
      if (!response) return this.warnMsg({ message: 'Campos obrigatórios não prenchidos' })

      try {
        await this.$store.dispatch('login', this.form)
        this.$router.push('/')
      } catch (e) {
        this.errorMsg({message: e.message})
      }
    }
  }
}
