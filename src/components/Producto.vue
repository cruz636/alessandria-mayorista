<template>
  <!-- web Product-->
  <div class="producto">
    <img src="../assets/bicycle.jpg" alt="about" class="img-thumbnail" />
    <div class="title">{{ title }}</div>
    <div class="precio">
      <strong>Precio:</strong> ${{ price - (price * discount) / 100 }}
    </div>
    <div v-if="discount != 0" class="precio">Descuento:{{ discount }}%</div>
    <div v-if="discount == 0" style="color: white">.</div>

    <div class="precio">Unidades disponibles: {{ stock }}</div>
    <b-button
      v-if="stock > 0"
      class="button"
      @click="add_item_to_cart(title, 1)"
      variant="primary"
    >
      Agregar al carrito
    </b-button>
    <b-button v-else class="button" disabled> Agregar al carrito </b-button>
    <div>
      <b-button
        class="button"
        @click="goToItem"
        variant="primary"
        style="width: 19vh"
      >
        Más detalles
      </b-button>
    </div>
    <div v-if="show_success" class="mt-3">Item agregado al carrito!</div>
    <br v-else class="my-2" />
  </div>
</template>

<script>
import { useMainStore } from "../store/mainStore";

export default {
  name: "Producto",
  setup() {
    const store = useMainStore();
    return { store };
  },
  props: {
    title: String,
    price: String,
    description: String,
    discount: Number,
    stock: Number,
    id: Number,
  },
  data: function () {
    return {
      show_success: false,
      show_failure: false,
    };
  },
  created() {
    this.store.set_start_from_local_storage();
  },
  methods: {
    goToItem() {
      this.$router.push(`/item/${this.id}`);
    },
    showSuccess() {
      this.show_success = true;
    },
    showFailure() {
      this.show_failure = true;
    },
    add_item_to_cart(item_name, quantity) {
      try {
        this.store.add_to_cart(item_name, quantity);
        this.showSuccess();
      } catch (error) {
        console.log(error);
        this.showFailure();
      }
      //   try {
      //     let cart_id = this.store.cart_id;
      //     let token = this.store.access;
      //     const config = {
      //       headers: {
      //         Authorization: `Bearer ${token}`,
      //       },
      //     };
      //     let response = await axios.post(
      //       `/v1/carts/${cart_id}/add-item/`,
      //       {
      //         item: item_name,
      //         quantity: quantity,
      //       },
      //       config
      //     );
      //     console.log(response.data.data);
      //     this.showSuccess();
      //   } catch (error) {
      //     console.log(error);
      //     this.showFailure();
      //   }
    },
  },
};
</script>

<style scoped>
.producto {
  background: white;
  min-width: 40vh;
  min-height: 45vh;
  color: #3a3845;
  border: 0px solid #c69b7b;
  border-radius: 1vh;
  margin: 1vh;
  margin-right: 1vh;
}
.thumbnail {
  border: 0;
}
.button {
  border: 0px;
  font-size: 2vh;
  margin-top: 10px;
  color: #3a3845;
  background: #f7ccac;
  border-radius: 2px;
  width: 20vh;
  cursor: pointer;
}
.button:hover {
  background: #c6a287;
  color: #3a3845;
}
.button:focus {
  color: #3a3845;
  background: #c6a287;
}
.product:hover {
  border: 2px solid #c69b7b;
}
.title {
  font-size: 4vh;
  color: #3a3845;
}

.b-alert {
  height: 1vh;
  color: red;
}
</style>