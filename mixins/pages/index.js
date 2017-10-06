import SecretPage from '~/mixins/template/secret-page'
import ApiTarefa from '~/mixins/api/tarefa'

export default {
  extends: SecretPage,
  async fetch ({ store }) {
    let { data } = await ApiTarefa.get()
    store.commit('tarefa/SETALL', data)
  }
}
