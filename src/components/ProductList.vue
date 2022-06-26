<template>
  <!-- web ProductList-->
  <div class="ProductList">
    <div class="row mb-3">
      <div class="col align-self-center mt-4">
        <br />
        <h1 style="font-family: 'Nunito', sans-serif; color: #f7ccac">
          Nuestros Productos
        </h1>
      </div>
    </div>
    <SearchBar />
    <!-- <div class="row">
      <div class="col align-self-center">
        <button class="button-filtro" @click="this.showCategoria">
          Categoria
        </button>
        <button class="button-filtro" @click="this.showPrecio">Precio</button>
        <button class="button-filtro" @click="this.showColor">Color</button>
        <button class="button-filtro" @click="this.showDescuento">
          Descuento
        </button>
        <button class="button" style="font-size: 3vh" @click="this.hideFilters">
          Filtrar
        </button>
      </div>
    </div>
    <div v-if="filtro_categoria" id="FiltrosCategoria" class="row">
      <div class="col-4" />
      <div class="col-4 filtros mt-3" style="height: 9vh">
        <div class="mt-1">
          <input type="checkbox" id="opt-mtb" />
          <label class="button-in" for="opt-mtb">Equipos MTB</label>
          <input type="checkbox" id="opt-ruta" />
          <label class="button-in" for="opt-ruta">Equipos Ruta</label>
          <input type="checkbox" id="opt-accesorios" />
          <label class="button-in" for="opt-accesorios">Accesorios</label>
          <input type="checkbox" id="opt-ropa" />
          <label class="button-in" for="opt-ropa">Ropa</label>
          <br />
          <input type="checkbox" id="opt-repuestos" />
          <label class="button-in" for="opt-repuestos">Repuestos</label>
          <input type="checkbox" id="opt-categoria-default" />
          <label class="button-in" for="opt-categoria-default">Todos</label>
        </div>
      </div>
    </div>
    <div id="FiltrosPrecio" v-if="filtro_precio" class="row">
      <div class="col-4" />
      <div class="col-4 filtros mt-3" style="color: #f7ccac">
        <label class="button-in mt-3">Precio entre:</label>
        <input type="input" class="input" id="opt-rango-min" />
        y
        <input type="input" class="input" id="opt-rango-max" />
        <input type="checkbox" id="opt-rango-default" />
        <label class="button-in" for="opt-rango-default">Todos</label>
      </div>
    </div>
    <div id="FiltrosColor" v-if="filtro_color" class="row">
      <div class="col-4" />
      <div class="col-4 filtros mt-3">
        <div class="mt-2">
          <input type="checkbox" id="opt-white" />
          <label class="button-in" for="opt-white">Blanco</label>
          <input type="checkbox" id="opt-black" />
          <label class="button-in" for="opt-black">Negro</label>
          <input type="checkbox" id="opt-blue" />
          <label class="button-in" for="opt-blue">Azul</label>
          <input type="checkbox" id="opt-red" />
          <label class="button-in" for="opt-red">Rojo</label>
          <input type="checkbox" id="opt-grey" />
          <label class="button-in" for="opt-grey">Gris</label>
          <input type="checkbox" id="opt-color-default" />
          <label class="button-in" for="opt-color-default">Todos</label>
        </div>
      </div>
    </div>
    <div id="FiltrosDescuento" v-if="filtro_descuento" class="row">
      <div class="col-4" />
      <div class="col-4 filtros mt-3">
        <div class="mt-2">
          <input type="checkbox" id="opt-disc" />
          <label class="button-in" for="opt-disc">Con Descuento</label>
          <input type="checkbox" id="opt-no-disc" />
          <label class="button-in" for="opt-no-disc">Sin Descuento</label>
          <input type="checkbox" id="opt-descuentos-todos" />
          <label class="button-in" for="opt-descuentos-todos">Todos</label>
        </div>
      </div>
    </div> -->
    <br />

    <b-container>
      <b-row>
        <b-col
          sm="3"
          class="my-1"
          :key="item.id"
          v-for="item in paginated_products"
        >
          <Producto
            :title="item.name"
            :price="item.unit_price"
            :discount="item.discount"
            :stock="item.stock"
            :id="item.id"
          />
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col md="3" />
        <b-col md="6" class="my-1">
          <b-pagination
            @change="onPageChange"
            align="fill"
            :total-rows="totalRows"
            :per-page="perPage"
            v-model="currentPage"
            class="my-0"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Producto from "./Producto.vue";
import SearchBar from "./SearchBar.vue";
import axios from "axios";
import publicPath from "../config";

export default {
  name: "ProductList",
  components: {
    Producto,
    SearchBar,
  },
  props: {
    categoria: String,
  },
  data: function () {
    return {
      filtro_categoria: false,
      filtro_precio: false,
      filtro_color: false,
      filtro_descuento: false,
      product_list: [],
      paginated_products: [],
      perPage: 8,
      currentPage: 1,
    };
  },
  computed: {
    productList() {
      return this.product_list;
    },
    totalRows() {
      return this.product_list.length;
    },
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.load_products();
    },
    showCategoria() {
      this.filtro_categoria = !this.filtro_categoria;
    },
    showPrecio() {
      this.filtro_precio = !this.filtro_precio;
    },
    showColor() {
      this.filtro_color = !this.filtro_color;
    },
    showDescuento() {
      this.filtro_descuento = !this.filtro_descuento;
    },
    hideFilters() {
      this.filtro_categoria = false;
      this.filtro_precio = false;
      this.filtro_color = false;
      this.filtro_descuento = false;
    },
    async load_products() {
      try {
        let category = this.$route.params.category;
        let response;
        if (category) {
          response = await axios.get(
            `${publicPath}/v1/items/filtrar/?categoria=${category}`
          );
          this.product_list = response.data.data;
          this.paginated_products = response.data.data;
        } else {
          response = await axios.get(`${publicPath}/v1/items/`);
          this.product_list = response.data;
          this.paginated_products = response.data;
        }

        this.paginate(this.perPage, 0);
      } catch (error) {
        console.log(error);
      }
    },

    // Pagination
    paginate(page_size, page_number) {
      this.paginated_products = this.product_list.slice(
        page_number * page_size,
        (page_number + 1) * page_size
      );
    },
    onPageChange(page) {
      this.paginate(this.perPage, page - 1);
    },
  },
};
</script>

<style scoped>
.productList {
  background: black;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
}
.button {
  color: #f7ccac;
  border: 0px;
  background: rgb(58, 52, 52);
  font-size: 2vh;
  margin-right: 1vh;
}
.button:hover {
  color: #c69b7b;
  background: rgb(23, 20, 20);
}
.button-filtro {
  color: #f7ccac;
  border: 0px;
  border-bottom: 1px solid #c69b7b;
  background: transparent;
  font-size: 2vh;
  margin-right: 1vh;
}
.button-filtro:hover {
  color: #c69b7b;
  background: rgb(23, 20, 20);
}

.filtros {
  background: rgb(58, 52, 52);
  height: 8vh;
}

.button-in {
  color: #f7ccac;
  border: 0px;
  border-bottom: 0px solid;
  background: transparent;
  font-size: 2vh;
  margin-right: 1vh;
}
input[type="checkbox"]:hover label {
  border-bottom: 1px solid #c69b7b;
}
input[type="checkbox"]:checked + label {
  border-bottom: 1px solid #c69b7b;
}
input[type="checkbox"] {
  margin: 1vh;
}
.input {
  width: 9vh;
  height: 3vh;
  margin: 1vh;
}
</style>