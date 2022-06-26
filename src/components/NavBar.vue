 <template>
  <!-- web navBar-->
  <div class="nav-height">
    <div class="nav-style">
      <div class="row">
        <div class="col-8">
          <b-icon-bicycle scale="2" class="mx-2" /> Mayorista de equipos de
          ciclismo.
        </div>
        <div v-if="!isLogged()" class="col-3 mt-4">
          <button class="nav-button">Registrarse</button>
          <button class="nav-button" @click="goToLogin">Iniciar sesión</button>
        </div>
        <div v-else class="col-3 mt-4">
          <button class="nav-button mx-2">
            <b-icon-person-fill scale="2" />
          </button>
          <button class="nav-button mx-2" @click="goToCart()">
            <b-icon-cart2 scale="2" />
          </button>
          <button class="nav-button mx-1" @click="goToSearch()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <img src="../assets/black-logo.png" style="width: 20%" />
      </div>
      <button class="nav-button" @click="goToHome">INICIO</button>
      <button class="nav-button">BICICLETAS</button>
      <button class="nav-button">INDUMENTARIA</button>
      <button class="nav-button">ACCESORIOS</button>
      <button class="nav-button">REPUESTOS</button>
      <button class="nav-button">CONTACTO</button>
      <button class="nav-button" disabled />
      <br />
      <br />
      <br />
    </div>
  </div>
</template>

<script>
import { useMainStore } from "../store/mainStore";

export default {
  name: "NavBar",
  setup() {
    const store = useMainStore();
    return { store };
  },
  methods: {
    isLogged() {
      return this.store.is_logged;
    },
    goToLogin() {
      this.$router.push(`/login`);
    },
    goToRegister() {
      this.$router.push(`/register`);
    },
    goToHome() {
      this.$router.push(`/`);
    },
    goToProfile() {
      this.$router.push(`/profile`);
    },
    goToCart() {
      this.$router.push(`/cart`);
    },
    goToSearch() {
      this.$router.push(`/items`);
    },
  },
};
</script>

<style scoped>
.nav-height {
  height: 10vh;
  margin-bottom: 17vh;
}

.nav-style {
  background: white;
  color: #3a3845;
  text-align: center;
}

.nav-button {
  background: transparent;
  border-radius: 0;
  border: 0px;
  margin-right: 15px;
  font-size: 2vh;
  color: #3a3845;
}

.nav-button:hover {
  background: transparent;
  border-bottom: 1px solid;
  color: #da7f8f;
}
</style>
