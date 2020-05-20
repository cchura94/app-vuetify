import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Publicacion from '../views/Publicacion.vue'
import Contacto from '../views/Contacto.vue'
import Login from '../views/Login.vue'
import Admin from '../views/admin/Admin.vue'
import Establecimiento from '../views/admin/Establecimiento'
import Servicio from '../views/admin/Servicio'
import ServiciosEstablecimiento from '../components/admin/establecimiento/ServiciosEstablecimiento'
import ServicioEstablecimiento from '../components/admin/servicio/ServicioEstablecimiento'

function guardAdmin(to, from, next){
  try {
      const authUser = JSON.parse(atob(localStorage.getItem("authUser")))
      console.log(authUser)
      if(authUser && authUser.access_token){
        next() //Tiene Accesso
        console.log("Tiene Accesso")
      }else{
        next({name: 'Login'})
      }

  } catch (error) {
    localStorage.clear();
    next({name: 'Login'})
  }
}


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/publicacion',
    name: 'Publicacion',
    component: Publicacion,
    //beforeEnter: guardAdmin
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: { requiresAuth: true },
    beforeEnter: guardAdmin,
    children: [
      {
        path: 'establecimientos',
        name: 'Establecimiento',
        component: Establecimiento,
        meta: { requiresAuth: true },
        beforeEnter: guardAdmin,
        children: [
          {
            path: ':id/servicios',
            component: ServiciosEstablecimiento,
            meta: { requiresAuth: true },
            beforeEnter: guardAdmin,
          }
        ]
      },
      {
        path: 'servicios',
        name: 'Servicio',
        component: Servicio,
        meta: { requiresAuth: true },
        beforeEnter: guardAdmin,
        children: [
          {
            path: ':id',
            name: 'ServicioEstablecimientos',
            component: ServicioEstablecimiento,
            meta: { requiresAuth: true },
            beforeEnter: guardAdmin,
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to);
  if(to.meta.requiresAuth){
    
    try {
        const authUser = JSON.parse(atob(localStorage.getItem("authUser")))
        console.log(authUser)
        if(authUser && authUser.access_token){
          next() //Tiene Accesso
          console.log("Tiene Accesso")
        }else{
          next({name: 'Login'})
        }

    } catch (error) {
      localStorage.clear();
      next({name: 'Login'})
    }
    //next({name: 'Login'})
  }
  next();
});

export default router
