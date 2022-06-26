 <template>
  <!-- web Banner-->
  <div class="banner">
    <br />
    <div class="row">
      <div class="row mb-4">
        <div class="col-3" />
        <div class="col-6">
          <h2 style="font-family: 'Nunito', sans-serif; color: #f7ccac">
            Categorias que te recomendamos
          </h2>
        </div>
      </div>
      <div class="col-3" />
      <div class="col-3">
        <div class="img-container-zoom">
          <img src="../assets/mtb.jpg" class="img-thumbnail" />
        </div>
        <!-- <button class="banner-button">EQUIPOS MTB</button> -->
      </div>
      <div class="col-3">
        <div class="img-container-zoom">
          <img src="../assets/rutera.jpg" class="img-thumbnail" />
          asd
        </div>
        <!-- <button class="banner-button">EQUIPOS RUTEROS</button> -->
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col-3" />
      <div class="col-3">
        <div class="img-container-zoom">
          <img src="../assets/gears.jpg" class="img-thumbnail" />
        </div>
        <!-- <button class="banner-button">REPUESTOS</button> -->
      </div>
      <div class="col-3">
        <div class="img-container-zoom">
          <img
            src="../assets/ropa.jpg"
            class="img-thumbnail"
            style="height: 34vh"
          />
        </div>

        <!-- <button class="banner-button">ROPA Y ACCESORIOS</button> -->
      </div>
    </div>
    <div class="row">
      <div class="col-3" />
      <div class="col-3">
        <div class="parent">
          <div class="child">
            <br /><br /><br /><br /><br /><br /><br />
            <button class="label">RUTERA</button>
          </div>
        </div>
        <!-- <button class="banner-button">REPUESTOS</button> -->
      </div>
      <div class="col-3">
        <div class="img-container-zoom">
          <img
            src="../assets/ropa.jpg"
            class="img-thumbnail"
            style="height: 34vh"
          />
        </div>

        <!-- <button class="banner-button">ROPA Y ACCESORIOS</button> -->
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-3" />
      <div class="col-6">
        <button class="boton-compra">EXPLORAR MÁS CATEGORIAS</button>
        <br />
        <br />
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style scoped>
.banner {
  background: black;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
}
.banner-button {
  background: #3a3845;
  border-radius: 0;
  border: 0px;
  margin-right: 15px;
  font-size: 3vh;
  color: #c69b7b;
  margin-bottom: 10px;
  width: 50vh;
  font-family: "Nunito", sans-serif;
}

.img-thumbnail {
  height: 240px;
  width: 50vh;
  border: 1px solid black;
}
.img-container-zoom {
  overflow: hidden;
}
.img-container-zoom img {
  transition: transform 0.5s ease;
}
.img-container-zoom:hover img {
  transform: scale(1.1);
}

.boton-compra {
  color: #f7ccac;
  border-radius: 5px;
  border: 0px;
  background: #4a4859;
  font-size: larger;
  height: 8vh;
  width: 40vh;
}
.boton-compra:hover {
  color: #f7ccac;
  border: 0px;
  background: rgb(35, 32, 32);
}

.label {
  background: #3a3845;
  opacity: 0%;
  border: 0px solid;
  color: #f7ccac;
}

.parent {
  height: 240px;
  width: 50vh;
  overflow: hidden;
}
.child {
  background: url("../assets/rutera.jpg");
  background-size: cover;
  background-position: center;
  background-color: black;
  width: 100%;
  height: 100%;
  transition: all 0.5s;
}

.parent:hover .child,
.parent:focus .child {
  transform: scale(1.2);
}
.parent:hover .label {
  opacity: 100%;
}
</style>