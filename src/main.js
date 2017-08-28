// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMaterial from 'vue-material'
import App from './App'

Vue.config.productionTip = false

Vue.use(VueMaterial)

if (!AudioContext) {
  console.error('This browser is not support HTML5 Audio API.')
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
