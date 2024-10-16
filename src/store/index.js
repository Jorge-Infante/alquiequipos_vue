import { createStore } from "vuex";
import auth_store from "@/modules/auth/store/auth_store";
import shared_store from "@/modules/shared/store/shared_store";
import user_store from "@/modules/users/store/user_store";
export default createStore({
  modules: {
    auth_store,
    shared_store,
    user_store,
  },
  mutations: {
    // Mutación global para modificar directamente el estado de cualquier módulo
    SET_GLOBAL_STATE(state, { moduleName, key, value }) {
      if (state[moduleName] && state[moduleName][key] !== undefined) {
        state[moduleName][key] = value; // Cambia directamente el state
      } else {
        console.error(`El módulo o propiedad ${moduleName}.${key} no existe.`);
      }
    },
  },
});
