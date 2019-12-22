import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2cf755f6 = () => interopDefault(import('../pages/completed.vue' /* webpackChunkName: "pages/completed" */))
const _4b630e2d = () => interopDefault(import('../pages/download.vue' /* webpackChunkName: "pages/download" */))
const _8d1da306 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _2cf755f6,
    name: "completed"
  }, {
    path: "/download",
    component: _4b630e2d,
    name: "download"
  }, {
    path: "/",
    component: _8d1da306,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
