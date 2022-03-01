import Vue from 'vue'
import ADD from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false
document.title = "李菲专属点饭"
new Vue({
  render: h => h(ADD),
}).$mount('#app')
