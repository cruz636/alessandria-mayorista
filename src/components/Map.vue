<template>
  <!-- web About-->
  <div class="map">
    <div class="row">
      <div class="col-3" />
      <div class="col-6" style="font-size: 5vh; color: #f7ccac">
        Donde encontrarnos
      </div>
    </div>
    <div class="row">
      <div class="col-3" />
      <div class="col-6">
        <img src="../assets/map.png" alt="map" class="img-thumbnail" />
      </div>
    </div>
    <div class="row">
      <div class="col-3" />
      <div class="col-6">
        Podes venir a que te asesoremos personalmente en Libertad Buenos Aires
        AR, Av. Calle Real 2431, B1716 OBJ
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Map",
};
</script>

<style scoped>
.map {
  /* margin-top: 10vh; */
  color: #826f66;
  font-family: "Nunito", sans-serif;
  background: black;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
}

.map-text {
  align-items: center;
  display: flex;
  justify-content: center;
  color: #f7ccac;
  text-align: start;
}
.img-thumbnail {
  height: 70vh;
}
</style>