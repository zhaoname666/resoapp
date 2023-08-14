import Vue from 'vue'
import App from './App.vue'
import mixins from "./components/mixin"
import 'animate.css';
Vue.directive('draggable', {
  bind(el) {
    let startX = 0
    let startY = 0

    el.addEventListener('mousedown', startDrag)

    function startDrag(event) {
      startX = event.clientX
      startY = event.clientY

      document.addEventListener('mousemove', drag)
      document.addEventListener('mouseup', stopDrag)
    }

    function drag(event) {
      const deltaX = event.clientX - startX
      const deltaY = event.clientY - startY

      el.style.transform = `translate(${deltaX}px, ${deltaY}px)`
    }

    function stopDrag() {
      document.removeEventListener('mousemove', drag)
      document.removeEventListener('mouseup', stopDrag)
    }
  },
  update(el) {
    el.style.transform = ''
  }
}),

  Vue.mixin(mixins)
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
