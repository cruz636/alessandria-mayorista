<template>
  <!-- web Login-->
  <div class="login">
    <form action class="form" @submit="Register">
      <h1 class="title">Ingresa a tu cuenta</h1>
      <label class="form-label" for="#email">Correo electrónico:</label>
      <input
        v-model="email"
        class="form-input"
        id="email"
        required
        placeholder="Ingresa tu email"
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
        <input class="form-submit" type="submit" value="Login" />
      </div>
      <div v-if="!error" class="mt-2" style="color: transparent">.</div>
      <div v-else class="error mt-2">
        <small> Error con el email o la contraseña </small>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data: () => ({
    email: "",
    password: "",
    error: false,
  }),
  methods: {
    async Register() {
      try {
        // const endpoint = "/v1/jwt/create/";
        // let payload = {
        //   username: this.email,
        //   password: this.password,
        // };
        // let response = await axios.post(endpoint, payload);

        // save that on Pine
        console.log(12);
        console.log(2);
        // redirect to home
        // this.$router.push("/items");
      } catch (error) {
        console.log(error);
        this.error = true;
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
  min-height: 45vh;
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