<template>
  <!-- web PopularCategories-->
  <div class="popularCategories">
    <br />
    <div class="row">
      <div class="row mb-4">
        <div class="col-3" />
        <div class="col-7">
          <h2 style="font-family: 'Nunito', sans-serif; color: #f7ccac">
            Categorias Destacadas
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="col-2" />
        <div class="col-6">
          <div class="PopularCategoriesContainer large">
            <div class="child rutera">
              <br /><br /><br /><br /><br /><br /><br />
              <button class="label">Equipos Ruta</button>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="PopularCategoriesContainer medium-large">
            <div class="child ropa">
              <br /><br /><br /><br /><br /><br /><br />
              <button class="label" @click="goToAccesorios">
                Ropa y Accesorios
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-2" />
        <div class="col-3">
          <div class="PopularCategoriesContainer medium">
            <div class="child mtb">
              <br /><br /><br /><br /><br /><br /><br />
              <button class="label" @click="goToMTB">Equipos MTB</button>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="PopularCategoriesContainer medium">
            <div class="child gears">
              <br /><br /><br /><br /><br /><br /><br />
              <button class="label" @click="goToRepuestos">Repuestos</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="PopularCategoriesContainer medium-large">
            <div class="child tienda">
              <br /><br /><br /><br /><br /><br /><br />
              <button class="label" @click="goToItems">
                Todos los Productos
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopularCategories",
  methods: {
    goToItems() {
      this.$router.push(`/items`);
    },
    goToMTB() {
      this.$router.push(`/items/MTB`);
    },
    goToAccesorios() {
      this.$router.push(`/items/Accesorios`);
    },
    goToRepuestos() {
      this.$router.push(`/items/Repuestos`);
    },
  },
};
</script>

<style scoped>
.popularCategories {
  background: black;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
}

.label {
  background: #3a3845;
  opacity: 0%;
  border: 0px solid;
  color: #f7ccac;
}

.PopularCategoriesContainer {
  height: 240px;
  /* width: 10vh; */
  overflow: hidden;
}

.large {
  width: 99vh;
  margin-bottom: 2vh;
}
.medium {
  width: 49vh;
}
.medium-large {
  width: 43vh;
}

.child {
  width: 100%;
  height: 100%;
  transition: all 0.5s;
}

.gears {
  background: url("../assets/gears.jpg");
  background-size: cover;
  background-color: white;
}
.mtb {
  background: url("../assets/mtb.jpg");
  background-size: cover;
  background-position: center;
  background-color: white;
}
.rutera {
  background: url("../assets/rutera.jpg");
  background-size: cover;
  background-position: center;
  background-color: black;
}
.ropa {
  background: url("../assets/ropa.jpg");
  background-size: cover;
  background-position: center;
  background-color: black;
}
.tienda {
  background: url("../assets/bicicleteria.jpg");
  background-size: cover;
  background-position: center;
  background-color: black;
}

.PopularCategoriesContainer:hover .child,
.PopularCategoriesContainer:focus .child {
  transform: scale(1.2);
}
.PopularCategoriesContainer:hover .label {
  opacity: 100%;
}
</style>