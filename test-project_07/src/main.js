import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HelloWorld from "./components/HelloWorld";
import Home from "./components/Home"
import VueResource from "vue-resource"


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

// import Users from './components/Users'


//全局注册组件
// Vue.component("users",Users)

//配置路由
const router = new VueRouter({
  routes:[
    {path:"/",component:Home},
    {path:"/helloword",component:HelloWorld},
  ],
  mode:"history"
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

//el:'#app'
//components:{ App }

//index.html -> main.js ->App.vue
