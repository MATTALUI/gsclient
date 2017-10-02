import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import GameView from '@/components/GameView.vue'
import Cart from '@/components/Cart.vue'
import FourOhFour from '@/components/FourOhFour.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/games/:id',
      name: 'Game',
      component: GameView
    }, {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }, {
      path: '*',
      name: 'FourOhFour',
      component: FourOhFour
    }
  ]
})
