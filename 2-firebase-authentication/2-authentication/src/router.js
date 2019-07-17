import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    },
    {
      path: '/create_account',
      name: 'createaccount',
      component: () => import(/* webpackChunkName: "login" */ './views/CreateAccount.vue')
    },
    {
      path: '/feed',
      name: 'feed',
      component: () => import(/* webpackChunkName: "login" */ './views/Feed.vue')
    },
    // {
    //   path: '/post/novo',
    //   name: 'new-post',
    //   // route level code-splitting
    //   // this generates a separate chunk (login.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "new-post" */ './views/NewPost.vue')
    // },
    {
      path: '/post/:id',
      name: 'post',
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "post" */ './views/Post.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('login')
  else next()
})

export default router
