import { createWebHistory, createRouter } from 'vue-router'
// import HelloWorld from '../components/HelloWorld.vue'
import ContainerMain from '../components/ContainerMain.vue'
import ReactionTime from '../components/ReactionTime.vue'
import Login from '../components/Login.vue'
import Registration from '../components/Registration.vue'
import Home from '../components/Home.vue'

const routes = [
  { 
    path: '/', 
    component: ContainerMain,
    // beforeEnter: requireAuth
    children: [
      {
        name: 'Home',
        path: '/',
        component: Home
      },
      {
        name: 'ReactionTime',
        path: '/reaction-time',
        component: ReactionTime
      }
    ]
  },
  { 
    name: 'Login',
    path: '/login', 
    component: Login,
  },
  { 
    name: 'Register',
    path: '/register', 
    component: Registration,
  },
  // { 
  //   path: '/reactiontimetest', 
  //   component: ContainerMain,
    
  //   // beforeEnter: requireAuth
  // },
  // { 
  //   path: '*', 
  //   component: NotFound 
  // }
]
// export default router
export const router = createRouter({
  history: createWebHistory(),
  routes,
})