import lodash from 'lodash'

export const plugins = [ lodash ]

export const state = () => ({
  list: [
    { feita: true, nome: 'Lavar a Louça' },
    { feita: false, nome: 'Arrumar a casa' },
    { feita: false, nome: 'Ir no mercado' }
  ]
})

export const getters = {
  listOrder: state => lodash.orderBy(state.list, ['feita'])
}

export const mutations = {
  NEWTASK (state, payload) {
    state.list.push(lodash.clone(payload))
  },
  TAREFAFEITA (state, payload) {
    const i = state.list.indexOf(payload)
    state.list[i].feita = !state.list[i].feita
  },
  DELTAREFA (state, payload) {
    const i = state.list.indexOf(payload)
    state.list.splice(i, 1)
  }
}
