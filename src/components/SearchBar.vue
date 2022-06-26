<template>
  <!-- web SearchBar-->
  <div class="SearchBar">
    <div class="row">
      <div class="col align-self-center">
        <input
          v-model="input"
          class="form-input"
          id="search_item"
          placeholder="Ingresa el nombre del producto"
        />
        <button class="form-submit mx-3" @click="search_items(input)">
          <b>BUSCAR</b>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  components: {},
  data: function () {
    return {
      input: "",
    };
  },

  methods: {
    search_items(input) {
      console.log(input);
    },
  },
};
</script>

<style scoped>
.form-input {
  background: none;
  color: #c69b7b;
  border: 1px solid #c69b7b;
  width: 40vh;
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
  background: #4f4c5f;
}
</style>