import { createStore } from 'vuex'
import auth_store from '@/modules/auth/store/auth_store';
export default createStore({
  modules: {
    auth_store
  }
})
