<template>
  <div class="cart">
    <br />
    <br />
    <div>
      <div class="title">Finaliza tu compra</div>
      <div class="row" style="color: white">
        <div class="col" />
        <div class="col-6">
          <div class="row" style="text-align: start">
            <p></p>
            <p></p>
            <h2>Datos personales</h2>
            <div class="col-6">
              <b-form>
                <label for="nombre">Ingresa tu apellido</label>
                <b-form-input id="apellido" placeholder="Apellido" required />
                <label for="nombre">Ingresa tu correo</label>
                <b-form-input
                  id="correo"
                  placeholder="Correo Electrónico"
                  required
                  type="email"
                />
              </b-form>
            </div>
            <div class="col-6">
              <b-form>
                <label for="nombre">Ingresa tu nombre</label>
                <b-form-input
                  id="nombre"
                  placeholder="Nombre Completo"
                  required
                />
                <label for="nombre">Teléfono de contacto</label>
                <b-form-input
                  id="telefono"
                  placeholder="Número de teléfono"
                  required
                />
              </b-form>
            </div>
          </div>
          <div class="row" style="text-align: start">
            <p></p>
            <p></p>
            <h2>Datos de Facturación</h2>
            <div class="col-8">
              <b-form>
                <label for="nombre">Dirección</label>
                <b-form-input id="direccion" placeholder="Dirección" required />
                <label for="nombre">Piso y Departamento</label>
                <b-form-input
                  id="departamento"
                  placeholder="Piso y departamento"
                />
              </b-form>
            </div>
            <div class="col-3">
              <b-form>
                <label for="nombre">Altura</label>
                <b-form-input id="altura" placeholder="Altura" required />
              </b-form>
            </div>
          </div>
          <div class="row" style="text-align: start">
            <p></p>
            <p></p>
            <h2>Datos de Envio</h2>
            <div class="col-6">
              <b-form>
                <label for="nombre">Dirección</label>
                <b-form-input id="direccion" placeholder="Dirección" required />
                <label for="nombre">Altura</label>
                <b-form-input id="altura" placeholder="Altura" required />
              </b-form>
            </div>
            <div class="col-6">
              <b-form>
                <label for="nombre">Piso y Departamento</label>
                <b-form-input
                  id="departamento"
                  placeholder="Piso y departamento"
                />
                <label for="nombre">Entre calles</label>
                <b-form-input
                  id="calles"
                  placeholder="Ingrese calles"
                  required
                />
              </b-form>
            </div>
          </div>
          <div class="row mt-4" style="text-align: start">
            <h2>Método de pago</h2>
            <b-form-group>
              <b-form-radio name="mercado-pago">
                <h4 class="payment-choice mx-3">Mercado pago</h4>
              </b-form-radio>
              <b-form-radio name="mercado-pago">
                <h4 class="payment-choice mx-3">
                  Transferencia Bancaria/Depósito
                </h4>
              </b-form-radio>
              <b-form-radio name="mercado-pago">
                <h4 class="payment-choice mx-3">Efectivo</h4>
              </b-form-radio>
            </b-form-group>
          </div>
        </div>
        <div class="col-5 items mt-5">
          <br />
          <div class="mb-4" style="text-align: center">
            <h2>Productos seleccionados</h2>
          </div>

          <ul id="example-1">
            <li
              style="list-style-type: none"
              v-for="(quantity, item) in cartItems()"
              :key="item"
              class="my-2"
            >
              <b v-if="quantity > 0">
                <button class="button-add-remove" @click="incrementItem(item)">
                  +
                </button>
                {{ quantity }}
                <button class="button-add-remove" @click="decrementItem(item)">
                  -
                </button>
                {{ item }} ( <b>${{ getPrice(item) }} </b>)

                <button
                  class="bin-button"
                  @click="removeItemFromCart(item, quantity)"
                >
                  <b-icon-trash /></button
              ></b>
            </li>
          </ul>
          <div style="text-align: center">
            <b style="font-size: 4vh"> TOTAL: {{ totalPrice() }} </b>
            <br />
            <input class="form-submit" type="submit" value="Finalizar compra" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useMainStore } from "../store/mainStore";
import axios from "axios";
import publicPath from "../config";

export default {
  name: "Cart",
  setup() {
    const store = useMainStore();
    return { store };
  },
  data: function () {
    return {
      total: 0,
      items_costs: [],
    };
  },
  created() {
    this.getItemsPrices();
  },
  computed: {
    cartItems() {
      return this.cart_items;
    },
    totalPrice() {
      return this.calculateTotal;
    },
  },
  methods: {
    cart_items() {
      const items = this.store.get_active_items();
      let active_items = {};
      const keys = Object.keys(items);
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        if (items[key] > 0) {
          active_items[key] = items[key];
        }
      }
      return active_items;
    },
    incrementItem(item_name) {
      this.store.add_to_cart(item_name, 1);
    },
    decrementItem(item_name) {
      this.store.add_to_cart(item_name, -1);
    },
    removeItemFromCart(item_name, quantity) {
      this.store.add_to_cart(item_name, -quantity);
    },
    async getItemsPrices() {
      let items = this.store.get_items_names();
      let response = await axios.post(`${publicPath}/v1/items/items-cost/`, {
        items_names: items,
      });
      this.items_costs = response.data.items_and_cost;
    },
    calculateTotal() {
      let total = 0;
      const items_quantity = this.store.get_active_items();
      const items_names = Object.keys(items_quantity);
      const items_price = this.items_costs;
      for (let i = 0; i < items_names.length; i++) {
        let item = items_names[i];
        let suma = items_quantity[item] * items_price[item];
        total = total + suma;
      }
      return total.toFixed(2);
    },
    getPrice(item) {
      return this.items_costs[item];
    },
  },
};
</script>

<style>
.cart {
  min-height: 150vh;
  background: rgb(58, 52, 52);
  border: 0px solid;
  color: #c69b7b;
}

.title {
  font-size: 6vh;
  font-weight: bold;
  color: #f7ccac;
  text-decoration: underline;
}

.items {
  margin-top: 15px;
  text-align: start;
  border-left: 1px solid #c69b7b;
  border-top: 1px solid #c69b7b;
  border-bottom: 1px solid #c69b7b;
}

.form-input {
  background: none;
  color: #c69b7b;
  border: 1px solid #c69b7b;
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

.form-submit {
  color: #3a3845;
  border: 0px;
  background: #f7ccac;
  font-size: 3vh;
  margin-top: 3vh;
  border-radius: 2px;
  width: 30vh;
  cursor: pointer;
}
.form-submit:hover {
  color: #9f6233;
  background: rgb(23, 20, 20);
}
.form-submit:focus {
  color: #f7ccac;
  background: rgb(11, 8, 8);
}

.button-add-remove {
  background: none;
  border: 1px solid #f7ccac;
  color: #f7ccac;
  margin-right: 1vh;
  margin-left: 1vh;
  width: 4vh;
}
.button-add-remove:hover {
  color: #9f6233;
}

.bin-button {
  background: none;
  border: 0px;
  color: #f7ccac;
  margin-right: 1vh;
  margin-left: 1vh;
  width: 4vh;
}
.bin-button:hover {
  color: #9f6233;
}

.payment-choice:hover {
  border-bottom: 1px solid #f7ccac;
  color: #f7ccac;
}
</style>