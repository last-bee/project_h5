// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
/**
 * 路由配置
 */
import router from './router'
import '@/common/stylus/index.styl'
/**
 * 引入mint-ui组件
 */
import { Button, Cell } from 'mint-ui'
Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
/**
 * 手机端的300ms延迟
 */
import fastclick from 'fastclick'
fastclick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
