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
});
