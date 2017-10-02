<template>
  <nav>
    <router-link to="/" tag="div">
      <h1>SHOP</h1>
    </router-link>
    <router-link to="/cart" tag="div">
      <h1>CART<span v-if="cart.length > 0">({{count}})</span></h1>
    </router-link>
    <router-link to="/account" tag="div">
      <h1>ACCOUNT</h1>
    </router-link>
  </nav>
</template>

<script>
export default {
  props: ['cart'],
  computed: {
    count: function () {
      let count = this.cart.reduce((a, b) => {
        return a + b.quantity
      }, 0)
      return count
    }
  },
  created: function () {

  }
}
</script>

<style scoped>
div{
  height: 100%;
  text-align: center;
  color: white;
  padding: 0 2%;
}
div:hover{
  background-color: rgb(150,50,50);
}
nav{
  width: 100%;
  height: 100px;
  /*background-color: rgb(239,244,255);*/
  /*background-color: rgb(199,204,215);*/
  background-color: rgb(150, 0, 0);
  /*border-bottom: solid 10px;*/
  position: fixed;
  top: 0;
  display: flex;
}
h1{
  position: relative;
  top:40%;
  margin: 0;
}
</style>
