import Home from "../pages/Home/Home.vue"
import Personal from "../pages/Personal/Personal.vue"
import Picture from "../pages/Picture/Picture.vue"
import Shop from "../pages/Shop/Shop.vue"
import Sort from "../pages/Sort/Sort.vue"

import Phone from "../pages/Personal/PersonalLogin/phoneLogin.vue"
import Email from "../pages/Personal/PersonalLogin/emailLogin.vue"


export default [
  {
    path:"/home",
    component:Home
  },
  {
    path:"/personal",
    component:Personal,
    children:[
      {
        path: '/personal/phone',
        component: Phone,
      },
      {
        path: '/personal/email',
        component: Email,
      },
    ]
  },
  {
    path:"/picture",
    component:Picture
  },
  {
    path:"/shop",
    component:Shop
  },
  {
    path:"/sort",
    component:Sort
  },
  {
    path:"/",
    redirect: "/home"
  },

]
