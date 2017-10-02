<template>
  <div id="app">
    <Navbar :cart="cart" @beforeunload="alerter"></Navbar>
    <router-view @addToCart="addToCart" :cart = "cart"></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'app',
  components: {Navbar},
  methods: {
    addToCart: function (items) {
      items.forEach((item) => {
        this._data.cart.push(item)
      })
    },
    alerter: () => {
      alert('no!')
    }
  },
  beforeMount: function () {
    // console.log(this.alerter())
    window.beforeunload = this.alerter
  },
  data () {
    return {
      cart: []
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;
  color: rgb(0,0,0);
  margin: 0 auto;
  background-color: rgb(239,244,255);
  width: 80%;*/

}
/*#app>h1{
  margin-top: 0;
}*/
body{
  margin: 0;
}
html{
  background-color: rgb(86, 1, 1);
}
</style>
