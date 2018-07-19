import Vue from 'vue'
import Router from 'vue-router'
import _ from 'lodash'

Router.prototype.openPage = function (link, query) {
  this.push({
    path: link,
    /*query: _.assignIn({
      time: new Date().getTime()
    }, query || {})*/
  })
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        activeNumber:0,
      },
      component(resolve){
        require(['@/views/home/index.vue'], resolve)
      }
    },
    {
      path: '/classification',
      name: 'classification',
      meta: {
        activeNumber:1
      },
      component(resolve){
        require(['@/views/classification/index.vue'], resolve)
      }
    },
    {
      path: '/shoppingcart',
      name: 'shoppingcart',
      meta: {
        activeNumber:2
      },
      component(resolve){
        require(['@/views/shoppingcart/index.vue'], resolve)
      }
    },
    {
      path: '/mine',
      name: 'mine',
      meta: {
        activeNumber:3
      },
      component(resolve){
        require(['@/views/mine/index.vue'], resolve)
      }
    },
    {
      path: '/search',
      name: 'search',
      meta: {
        activeNumber:4
      },
      component(resolve){
        require(['@/views/search/index.vue'], resolve)
      }
    },
    {
      path: '/detail/:id',
      name: 'detail',
      meta: {
        activeNumber:5
      },
      component(resolve){
        require(['@/views/detail/index.vue'], resolve)
      }
    },
    {
      path: '/pay',
      name: 'pay',
      meta: {
        activeNumber:6
      },
      component(resolve){
        require(['@/views/pay/index.vue'], resolve)
      }
    },
    {
      path: '/error/404',
      name: 'error-404',
      component(resolve){
        require(['@/views/error/404.vue'], resolve)
      }
    },
    {
      path: '/error/110',
      name: 'error-110',
      component(resolve){
        require(['@/views/error/110.vue'], resolve)
      }
    }
  ]
})
