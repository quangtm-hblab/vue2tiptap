import Vue from 'vue'
import CommentWorkspace from './CommentWorkspace.vue'
import store from './store/index'
import './assets/css/tw-output.css'
Vue.config.productionTip = false
new Vue({
  store,
  render: h => h(CommentWorkspace),
}).$mount('#app')
