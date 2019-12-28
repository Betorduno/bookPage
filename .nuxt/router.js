import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3bfbdf38 = () => interopDefault(import('../pages/completed.vue' /* webpackChunkName: "pages/completed" */))
const _6ce754ab = () => interopDefault(import('../pages/download.vue' /* webpackChunkName: "pages/download" */))
const _c776214c = () => interopDefault(import('../pages/pageDownload.vue' /* webpackChunkName: "pages/pageDownload" */))
const _7d20a8bf = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _3bfbdf38,
    name: "completed"
  }, {
    path: "/download",
    component: _6ce754ab,
    name: "download"
  }, {
    path: "/pageDownload",
    component: _c776214c,
    name: "pageDownload"
  }, {
    path: "/",
    component: _7d20a8bf,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
