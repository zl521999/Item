import Vue from "vue"

import VueRouter from "vue-router"

import routes from "./routes.js"

Vue.use(VueRouter)

export default new VueRouter({

  mode:"history",//没有#

  //配置对象
  routes


})
