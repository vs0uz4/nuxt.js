import axios from '~/plugins/axios'

export default {
  get () {
    return axios.get('/tarefa')
  },
  put (dados) {
    return axios.put('/tarefa', dados)
  },
  feita (dados) {
    return axios.post('/tarefa/feita', dados)
  },
  excluir (dados) {
    return axios.post('/tarefa/excluir', dados)
  }
}
