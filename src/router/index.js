import Vue from 'vue'
import Router from 'vue-router'
/**
 * 路由懒加载
 * 按照路由的按需加载js
 * 减少主页面的大小提高性能
 */
const Car = () =>  import('components/car/car')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:Car
    },
    {
      path:'/car',
      component:Car
    }
  ]
})
