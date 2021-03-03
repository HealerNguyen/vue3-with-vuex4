import { createStore, createLogger } from 'vuex'
import login from './modules/login'
import users from './modules/users'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    login,
    users
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})