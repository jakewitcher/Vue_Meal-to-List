import Vue from 'vue'
import App from './App.vue'
import Header from './components/shared/Header.vue'
import Meals from './components/meals/Meals.vue'

export const itemBus = new Vue({
});

export const mealBus = new Vue({
});

Vue.component('app-header', Header);
Vue.component('app-meals', Meals);

new Vue({
  el: '#app',
  render: h => h(App)
})
