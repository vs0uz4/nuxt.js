import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState({
    confirmModal: state => state.confirmModal
  }),
  methods: {
    async logout () {
      await this.$store.dispatch('logout')
      this.$router.push('/login')
    },
    ...mapActions({
      updateModal: 'updateConfirm',
      continueModal: 'continueConfirm'
    })
  }
}
