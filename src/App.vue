<template>
  <div id="app">
    <Navbar :cart="cart"></Navbar>
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
    }
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
.content{
  width: 80%;
  min-height: 80vh;
  background-color: rgb(239,244,255);
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 1), 0 6px 20px 0 rgba(0, 0, 0, 1);
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
