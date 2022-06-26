<template>
  <!-- web Product table-->
  <div class="productPage row">
    <div class="col-2">
      <button class="button-back" style="width: 12vh" @click="goBack">
        <b-icon-arrow-left scale="2" class="mx-2" /> Volver
      </button>
    </div>
    <div class="col-4">
      <br />
      <br />
      <img src="../assets/bicycle.jpg" alt="about" class="img-thumbnail" />
    </div>
    <div class="col-4">
      <br />
      <br />
      <div class="title" style="text-align: start">{{ name }}</div>
      <div class="category"><strong>CATEGORIA:</strong> {{ category }}</div>
      <div class="description" style="text-align: start">{{ description }}</div>
      <div style="text-align: center">
        <div>
          Stock disponibles: <b>{{ stock }}</b>
        </div>
        <div class="mt-2">
          <div class="mt-1 precio">Precio: ${{ price }}</div>
          <b-button
            v-if="stock > 0"
            class="button"
            @click="add_item_to_cart(name, 1)"
            variant="primary"
          >
            Agregar al carrito
          </b-button>
          <b-button v-else class="button" disabled>
            Agregar al carrito
          </b-button>
        </div>
        <div v-if="discount != 0" class="precio">Descuento:{{ discount }}%</div>
        <div v-if="discount == 0" style="color: transparent">.</div>
      </div>

      <div v-if="show_success" class="mt-3">Item agregado al carrito!</div>
      <br v-else class="my-2" />
    </div>
    <div class="col-2" />
  </div>
</template>

<script>
import axios from "axios";
import { useMainStore } from "../store/mainStore";
import publicPath from "../config";

export default {
  name: "ProductPage",
  setup() {
    const store = useMainStore();
    return { store };
  },
  props: {
    id: Number,
  },
  data: function () {
    return {
      item_name: "",
      item_description: "",
      item_price: 0,
      item_discount: 0,
      item_stock: 0,
      item_category: "Alessandria",
      show_success: false,
      show_failure: false,
    };
  },
  created() {
    this.load_item_data(this.id);
    this.store.set_start_from_local_storage();
  },
  computed: {
    name() {
      return this.item_name;
    },
    description() {
      return this.item_description;
    },
    price() {
      return this.item_price - (this.item_price * this.item_discount) / 100;
    },
    discount() {
      return this.item_discount;
    },
    stock() {
      return this.item_stock;
    },
    category() {
      return this.item_category;
    },
  },
  watch: {
    $route() {
      this.load_item_data();
    },
  },
  methods: {
    showSuccess() {
      this.show_success = true;
    },
    showFailure() {
      this.show_failure = true;
    },
    async load_item_data() {
      let itemId = this.$route.params.itemId;
      let response = await axios.get(`${publicPath}/v1/items/${itemId}`);
      this.item_name = response.data.name;
      this.item_description = response.data.description;
      this.item_price = response.data.unit_price;
      this.item_discount = response.data.discount;
      this.item_stock = response.data.stock;
    },
    add_item_to_cart(item_name, quantity) {
      try {
        this.store.add_to_cart(item_name, quantity);
        this.showSuccess();
      } catch (error) {
        console.log(error);
        this.showFailure();
      }
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.productPage {
  background: rgb(58, 52, 52);
  height: 80vh;
  color: white;
  border-top: 2px solid #000000;
  border-radius: 1vh;
}
.thumbnail {
  border: 0;
}
.button {
  border: 0px;
  font-size: 2vh;
  margin-top: 10px;
  color: #1f1e24;
  background: #f7ccac;
  border-radius: 2px;
  width: 20vh;
  cursor: pointer;
}
.button:hover {
  background: #9f826c;
  color: #3a3845;
}
.button:focus {
  color: #3a3845;
  background: #f7ccac;
}
.button-back {
  border: 0px;
  font-size: 2vh;
  margin-top: 10px;
  color: #f7ccac;
  background: transparent;
  border-radius: 2px;
  border: 0px solid;
  cursor: pointer;
}
.button-back:hover {
  border-bottom: 1px solid #f7ccac;
}

.description {
  min-height: 28vh;
}
.title {
  font-size: 5vh;
}
.precio {
  font-size: 3vh;
}
.category {
  text-align: start;
  font-size: 2vh;
  margin-bottom: 2vh;
}
</style>