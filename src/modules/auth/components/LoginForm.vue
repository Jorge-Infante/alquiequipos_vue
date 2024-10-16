<template>
  <div>
    <section class="vh-100">
      <div class="container-fluid h-custom">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              class="img-fluid"
              alt="Sample image"
            />
          </div>
          <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form v-if="!loading" @submit.prevent="handleLogin"> <!-- Modificación aquí -->
              <!-- Email input -->
              <div data-mdb-input-init class="form-outline mb-4">
                <input
                  type="text"
                  v-model="username"
                  class="form-control form-control-lg"
                  placeholder="Ingrese Usuario"
                  required
                />
              </div>

              <!-- Password input -->
              <div data-mdb-input-init class="form-outline mb-3">
                <input
                  type="password"
                  v-model="password"
                  class="form-control form-control-lg"
                  placeholder="Ingrese Contraseña"
                  required
                />
              </div>

              <div class="d-flex justify-content-between align-items-center">
                <!-- Olvido de contraseña link y checkBox -->
                <div class="form-check mb-0">
                  <input
                    class="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label class="form-check-label" for="form2Example3">
                    Mostrar contraseña
                  </label>
                </div>
                <a href="#!" class="text-body">¿Olvidaste la Contraseña?</a>
              </div>

              <div class="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit" 
                   
                  data-mdb-button-init
                  data-mdb-ripple-init
                  class="btn btn-primary btn-lg"
                  style="padding-left: 2.5rem; padding-right: 2.5rem"
                  :disabled="loading" 
                 
                >
                  Iniciar sesión
                </button>
                <p class="small fw-bold mt-2 pt-1 mb-0">
                  Haz click aquí para
                  <a href="#!" class="link-danger">Registrate</a>
                </p>
              </div>
            </form>

            <!-- Imagen de carga --> <!-- Modificación aquí -->
            <div v-if="loading" class="loading-overlay"> <!-- Modificación aquí -->
              <img :src="loadingImage" alt="Cargando..." /> <!-- Modificación aquí -->
            </div> <!-- Modificación aquí -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import loadingImage from "@/assets/Moo.gif";
import { mapActions } from "vuex";
export default {
  name: "LoginForm",
  data() {
    return {
      username: null,
      password: null,
      loading: false, // Modificación aquí
      loadingImage,
    };
  },
  computed: {
    formData() {
      return {
        username: this.username,
        password: this.password,
      };
    },
  },
  methods: {
    ...mapActions("shared_store", ["loginApp"]),
    async handleLogin() {
      this.loading = true; // Modificación aquí
      console.log("Datos para el formulario: ", this.formData);
      const params = {
        url: `auth/login/`,
        data: this.formData,
        enty: "user",
        mutation: "setState",
      };

      try {
        await new Promise((resolve) => setTimeout(resolve, 5000)); // Ajusta el tiempo (en milisegundos)
        const response = await this.loginApp(params);
        console.log("RESPUESTA SERVIDOR ", response.data);
        localStorage.setItem("accessToken", response.data.access);
        localStorage.setItem("refreshToken", response.data.refresh);
        this.$router.push("/users");
      } catch (error) {
        console.log("RESPUESTA SERVIDOR: ", error);
      } finally {
        this.loading = false; // Modificación aquí
      }
    },
  },
};
</script>

<style scoped>
.custom-height {
  height: 80vh; /* Ajusta la altura a lo que necesites */
}
.h-custom {
  height: calc(82% - 0px);
}

/* Asegúrate de que las imágenes sean responsivas */
.img-fluid {
  max-width: 100%;
  height: auto;
}

.loading-overlay { /* Modificación aquí */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
}

.loading-overlay img {
  max-width: 80%; /* Ajusta el tamaño máximo de la imagen */
  max-height: 80%; /* Ajusta la altura máxima de la imagen */
}
</style>

