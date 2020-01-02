import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _36b373d2 = () => interopDefault(import('../pages/completed.vue' /* webpackChunkName: "pages/completed" */))
const _74fdc4d1 = () => interopDefault(import('../pages/download.vue' /* webpackChunkName: "pages/download" */))
const _7c82cb4e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/completed",
    component: _36b373d2,
    name: "completed"
  }, {
    path: "/download",
    component: _74fdc4d1,
    name: "download"
  }, {
    path: "/",
    component: _7c82cb4e,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
