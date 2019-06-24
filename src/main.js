import Vue from 'vue'
import App from './App.vue'
import {Button} from 'mint-ui'
import 'mint-ui/lib/style.css'

import { Card, Icon } from 'iview';
Vue.component('Icon', Icon);
Vue.component('Card', Card);
Vue.component('MintButton', Button);


// Vue.use(MintUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
