import axios from 'axios'

export default {
  get () {
    return axios.get('http://localhost:3000/api/tarefa')
  },
  put (dados) {
    return axios.put('http://localhost:3000/api/tarefa', dados)
  },
  feita (dados) {
    return axios.post('http://localhost:3000/api/tarefa/feita', dados)
  },
  excluir (dados) {
    return axios.post('http://localhost:3000/api/tarefa/excluir', dados)
  }
}
