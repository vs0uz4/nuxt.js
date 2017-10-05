import axios from 'axios'

export const state = () => ({
  auth: false,
  token: null,
  usuario: null,
  confirmModal: {
    show: false,
    message: '',
    info: null,
    resolve: null
  }
})

export const mutations = {
  SETUSER (state, { token, usuario }) {
    state.auth = true
    state.token = token
    state.usuario = usuario
  },
  REMUSER (state) {
    state.auth = false
    state.token = null
    state.usuario = null
  },
  UPDATECONFIRMMODAL (state, show) {
    state.confirmModal.show = show
  },
  CONFIRMMODAL (state, payload) {
    state.confirmModal = payload
  }
}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    if (req.session && req.session.auth) {
      commit('SETUSER', req.session.auth)
    } else {
      commit('REMUSER')
    }
  },

  async login ({ commit }, form) {
    try {
      const { data } = await axios.post('/api/login', form)
      commit('SETUSER', data)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Usuário e/ou senha não encontrados')
      }
      throw error
    }
  },

  async logout ({ commit }) {
    await axios.post('/api/logout')
    commit('REMUSER', null)
  },

  openConfirmModal ({ commit }, { message, info, resolve }) {
    commit('CONFIRMMODAL', { show: true, message, info, resolve })
  },

  updateConfirm ({ commit }, show) {
    commit('UPDATECONFIRMMODAL', show)
  },

  continueConfirm ({ commit, state }) {
    state.confirmModal.resolve(state.confirmModal.info)
    commit('CONFIRMMODAL', { show: false, message: '', info: null, resolve: null })
  }
}
