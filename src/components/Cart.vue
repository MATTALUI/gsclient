<template>
  <div class="content">
    <h1 v-if="cart.length === 0">There are no items in your cart! :(</h1>
    <ul>
      <li v-for="game in cart">{{game.title}}</li>
    </ul>
  </div>
</template>


<script>
export default {
  props: ['cart'],
  created () {
    console.log(this._props.cart)
  },
  data () {
    return {
    }
  }
}
</script>


<style>
</style>
