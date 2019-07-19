import Vue from "vue"

import App from "./App.vue"

import router from "./router"

import 'lib-flexible'

new Vue({
  el:"#app",
  render:h=>h(App),

  router,//配置路由器

})
