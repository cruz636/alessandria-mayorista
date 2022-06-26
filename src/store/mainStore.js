import { defineStore } from "pinia";
import { useLocalStorage } from '@vueuse/core'

export const useMainStore = defineStore("main", {
    state: () => {
        return {
            user_id: useLocalStorage('user_id', ''),
            access: useLocalStorage('access', ''),
            refresh: useLocalStorage('refresh', ''),
            cart_id: useLocalStorage('cart_id', ''),
            cart_items: useLocalStorage('cart_items', {}),
            is_logged: useLocalStorage('is_logged', false)
        }
    },
    actions: {
        logged(value) {
            this.is_logged = value;
        },
        set_id(id) {
            this.user_id = id;
        },
        set_access(access) {
            this.access = access;
        },
        set_refresh(refresh) {
            this.refresh = refresh;
        },
        add_to_cart(item, quantity) {

            if (Object.keys(this.cart_items).includes(item)) {
                let value = this.cart_items[item];
                this.cart_items[item] = value + quantity;
            } else {
                this.cart_items[item] = quantity;
            }

            localStorage.setItem('cart_items', JSON.stringify(this.cart_items))
            return this.cart_items;
        },
        set_start_from_local_storage() {
            this.user_id = localStorage.getItem('user_id')
            this.access = localStorage.getItem('access')
            this.refresh = localStorage.getItem('refresh')
            this.cart_id = localStorage.getItem('cart_id')
            this.cart_items = JSON.parse(localStorage.getItem('cart_items'))

        },
        removeCartItem(item) {
            this.cart_items.remove(item);
            localStorage.setItem('cart_items', JSON.stringify(this.cart_items))
        },
        get_active_items() {
            return this.cart_items
        },
        get_items_names() {
            return Object.keys(this.cart_items)
        },
        set_cart_id(id) {
            this.cart_id = id;
        },

    }

})