// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import store from './vuex/store'
import 'mint-ui/lib/style.css'
import "./style/public.scss"

Vue.config.productionTip = false
Vue.use(MintUI)

//全局路由钩子，进入每个组件自动到顶部
router.beforeEach(function (to,from,next) {
  window.scrollTo(0,0);
  next();
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
