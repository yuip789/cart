import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        cart: JSON.parse(localStorage.getItem('cart')) || []
    },
    mutations: {
        addCart(state, item) {
            // let currentSelect = this.goods[index];
            let cartExistGood = state.cart.find(
                v => v.name == item.name
            );
            if (!cartExistGood) {
                state.cart.push({ ...item, count: 1 });
            } else {
                cartExistGood.count += 1;
            }
        },
        addcount(state, i) {
            state.cart[i].count +=1;
        },
        reducecount(state, i){
            if (state.cart[i].count > 1) {
                state.cart[i].count -=1;
            }
        },
        clearcart(state) {
            state.cart = [];
        }
    },
    getters: {
        cartTotal: state => {
            let sum = 0;
            state.cart.forEach(item => {
                sum += item.count;
            })
            return sum;
        }
    }
})

store.subscribe((mutations, state) => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
})
export default store