<template>
  <div>
    <div class="d-none d-lg-block">
      <div id="front" class="full-height front">
        <div class="row medium-height">
          <div class="col-1" />
          <div class="col-10">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div class="row">
              <div class="col-1" />
              <div class="col-3">
                <button class="boton-compra" @click="goToItems">
                  EXPLORAR PRODUCTOS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div style="height: 70vh">
        <About />
      </div>
      <div class="small-height" style="background: white">
        <HowTo />
      </div>
      <div class="full-height">
        <PopularCategories />
      </div>
      <div class="full-height">
        <Map />
      </div>
    </div>

    <!-- MOBILE PAGE -->
    <div class="d-block d-lg-none">
      <div id="front-mobile" class="full-height front">ipsum</div>
    </div>
  </div>
</template>

<script>
import HowTo from "./HowTo.vue";
import About from "./About.vue";
import Map from "./Map.vue";
import PopularCategories from "./PopularCategories.vue";

export default {
  name: "MainPage",
  components: {
    HowTo,
    About,
    Map,
    PopularCategories,
  },
  methods: {
    goToItems() {
      this.$router.push(`/items`);
    },
  },
};
</script>

<style scoped>
.full-height {
  min-height: 90vh;
}
.medium-height {
  height: 80vh;
}
.small-height {
  height: 25vh;
}

.boton-compra {
  color: #f7ccac;
  border-radius: 5px;
  border: 0px;
  background: #3a3845;
  font-size: 3vh;
  height: 6vh;
  width: 40vh;
}
.boton-compra:hover {
  color: #f7ccac;
  border: 0px;
  background: rgb(58, 52, 52);
  font-size: 3vh;
}

.front {
  background: url("../assets/front-background.jpg") no-repeat center center;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
}
</style>
