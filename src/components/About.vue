<template>
  <!-- web About-->
  <div class="about">
    <div class="row">
      <div class="col-1" />
      <div class="col-5">
        <img src="../assets/bicycle.jpg" alt="about" class="img-thumbnail" />
      </div>
      <div class="col-5 about-text">
        En ALESSANDRIA Bicipartes vas a encontrar uan gran variedad de prodcutos
        al mejor precio de todos. Estamos para ayudarte en lo que necesites.
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a tellus
        rutrum, ornare enim nec, condimentum erat. Praesent aliquet blandit
        nisl, eget auctor ante hendrerit faucibus. Sed varius nibh a vulputate
        venenatis. Morbi tempus tincidunt ex ac fringilla.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.about {
  background: black;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  font-size: 3vh;
  color: #da7f8f;
  font-family: "Nunito", sans-serif;
}

.about-text {
  align-items: center;
  display: flex;
  justify-content: center;
  color: white;
  text-align: start;
}
.img-thumbnail {
  height: 60vh;
}
</style>