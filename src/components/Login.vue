<template>
  <!-- web Login-->
  <div class="login">
    <br />
    <form action class="form" @submit="login">
      <h1 class="title">Ingresa a tu cuenta</h1>
      <label class="form-label" for="#usuario">Usuario:</label>
      <input
        v-model="usuario"
        class="form-input"
        id="usuario"
        required
        placeholder="Ingresa tu usuario"
      />

      <label class="form-label" for="#password">Contraseña:</label>
      <input
        v-model="password"
        class="form-input"
        type="password"
        id="password"
        placeholder="Ingresa tu contraseña"
      />

      <div>
        <input class="form-submit" type="submit" value="Iniciar sesión" />
      </div>
      <div v-if="!error" class="mt-2" style="color: transparent">.</div>
      <div v-else class="error mt-2">
        <small> Error con el email o la contraseña </small>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { useMainStore } from "../store/mainStore";
import publicPath from "../config";

export default {
  name: "Login",
  setup() {
    const store = useMainStore();
    return { store };
  },
  data: () => ({
    usuario: "",
    password: "",
    error: false,
  }),
  methods: {
    async login() {
      try {
        const endpoint = `${publicPath}/v1/jwt/create/`;
        let payload = {
          username: this.usuario,
          password: this.password,
        };
        let response = await axios.post(endpoint, payload);

        // save that on Pine
        this.store.set_access(response.data.access);
        this.store.set_refresh(response.data.refresh);
        this.get_user_data();
        // redirect to home
        this.$router.push("/items");
      } catch (error) {
        console.log(error);
        this.error = true;
      }
    },
    async get_user_data() {
      try {
        const endpoint = `${publicPath}/v1/users/me`;
        const config = {
          headers: {
            Authorization: `Bearer ${this.store.access}`,
          },
        };
        let response = await axios.get(endpoint, config);
        this.store.set_id(response.data.id);
        this.store.set_cart_id(response.data.cart_id);
        this.store.logged(true);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: rgb(58, 52, 52);
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
  margin-top: 2rem;
  margin-bottom: 0.5rem;
}
.login {
  background: #3a3845;
  min-width: 40vh;
  height: 90vh;
  color: white;
  border: 0px solid #c69b7b;
  border-radius: 1vh;
  margin: 1vh;
  margin-right: 1vh;
}
.form-input {
  background: none;
  color: #c69b7b;
  border: 1px solid #c69b7b;
}
.form-submit {
  color: #3a3845;
  border: 0px;
  background: #f7ccac;
  font-size: 2vh;
  margin-top: 3vh;
  border-radius: 2px;
  width: 20vh;
  cursor: pointer;
}
.form-submit:hover {
  color: #9f6233;
  background: rgb(23, 20, 20);
}
.form-submit:focus {
  color: #f7ccac;
  background: rgb(11, 8, 8);
}
.title {
  font-size: 3vh;
}
</style>