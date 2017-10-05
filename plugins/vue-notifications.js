import Vue from 'vue'
import VueNotifications from 'vue-notifications'

function toast ({ title, message, type, timeout, cb }) {
  if (type === VueNotifications.types.warn) type = 'warning'
  if (!process.browser) return () => {}
  return require('izitoast')[type]({ title, message, timeout })
}

VueNotifications.config.timeout = 5000

Vue.use(VueNotifications, {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
})
