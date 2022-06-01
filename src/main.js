import Vue from 'vue'
import App from './App.vue'
import {Button,Radio,Container,Aside,Header,Main,Menu,Submenu,MenuItemGroup,MenuItem,Dropdown,DropdownMenu,DropdownItem,
  Row,Card,Col,Table,TableColumn,BreadcrumbItem,Breadcrumb,Tag,Form,FormItem,Input,Select,
  Switch,DatePicker,Option,Dialog,Pagination,MessageBox,Message} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/less/index.less'

import router from '../router'
import store from './store';
import http from 'axios'
import '../api/mock.js'



Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Radio)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)

Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Row)
Vue.use(Card)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(Option)
Vue.use(Dialog)
Vue.use(Pagination)
// Vue.use(MessageBox)


Vue.prototype.$http = http
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message


//导航shouwei
router.beforeEach((to,from,next) => {
  store.commit('getToken')
  const token = store.state.user.token
  if(!token && to.name !== 'login'){
    next({ name:'login'})
  }else if(token && to.name === 'login'){
    next({name:'home'})
  } else{
    next()
  }
})

new Vue({
  store,
  router,
  render: h => h(App),
  created(){
    store.commit('addMenu',router)
  }
}).$mount('#app')
