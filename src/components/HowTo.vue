 <template>
  <!-- web HowTo-->
  <div>
    <div>
      <br />
      <h2>Comprar con nosotros es muy sencillo</h2>
    </div>
    <div class="howTo">.</div>
    <div class="howTo row">
      <div class="col-2 border-r">
        <div class="big-text">Elige los productos</div>
      </div>
      <div class="col-2 border-r">
        <small class="big-text">Selecciona método de pago</small>
      </div>
      <div class="col-2 border-r">
        <small class="big-text">Confirma tus datos</small>
      </div>
      <div class="col-2">
        <small class="big-text">Tu compra estará en camino</small>
      </div>
    </div>
    <div class="howTo row">
      <div class="col-2 border-r">
        <div class="small-text">Tenemos más de 500 productos para ti.</div>
      </div>
      <div class="col-2 border-r">
        <div class="small-text">Efectivo o tarjetas.</div>
      </div>
      <div class="col-2 border-r">
        <div class="small-text">Ingresa tu dirección y contacto.</div>
      </div>
      <div class="col-2">
        <div class="small-text">Te avisaremos cuando estemos cerca</div>
      </div>
    </div>
    <div class="howTo">.</div>
  </div>
</template>

<script>
export default {
  name: "HowTo",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;400&display=swap");

.howTo {
  background: white;
  align-items: center;
  display: flex;
  justify-content: center;
  font-family: "Nunito", sans-serif;
}
.big-text {
  font-size: 17px;
}
.small-text {
  font-size: 13px;
  color: #826f66;
}
.border-r {
  border-right: 2px solid white;
}
</style>