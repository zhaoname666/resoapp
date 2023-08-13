import Vue from 'vue'
import App from './App.vue'
import mixins from "./components/mixin"
Vue.mixin(mixins)
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
