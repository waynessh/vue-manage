import Vue from "vue";
import VueRouter from "vue-router";

// import Home from '../src/views/home/'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Main',
    component:()=>import('../src/views/Main.vue'),
    children:[
  //     {
  //       path:'/home',
  //       name:'home',
  //       component:() =>import('../src/views/home')
  //     },
      {
        path:'/user',
        name:'user',
        component:() =>import('../src/views/user')
      },
  //     {
  //       path:'/mall',
  //       name:'mall',
  //       component:() =>import('../src/views/mall')
  //     },{
  //       path:'/page1',
  //       name:'page1',
  //       component:() =>import('../src/views/other/pageOne')
  //     },
  //     {
  //       path:'/page2',
  //       name:'page2',
  //       component:() =>import('../src/views/other/pageTwo')
  //     }
    ]
  },
  {
    path:'/login',
    name:'login',
    component:() =>import ('../src/views/Login/login.vue')
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})


// vue.use(Router)
// const router = new Router({
//   routes
// })

const VueRouterPush = VueRouter.prototype.push
VueRouter. prototype.push = function push (to) {
return VueRouterPush.call(this, to).catch(err => err)
}

export default router