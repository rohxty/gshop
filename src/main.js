import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { Button, Toast,MessageBox } from 'mint-ui'
import 'mint-ui/lib/style.css'//加载
import './mock/mockServer' //加载mockServer即可
Vue.component(Button.name, Button)
Vue.component(Toast.name,Toast)
Vue.component(MessageBox.name,MessageBox)
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
