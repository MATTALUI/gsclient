<template>
  <div class="content">
    <div class="pictureHolder">
      <a :href="game.cover"><img :src="game.cover"/></a>
    </div>
    <div class="info">
      <h1>{{game.title}}</h1>
      <p>{{game.description}}</p>
      <div id = "controller">
        <div class="inCart" v-if="inCartAlready">
          <h3>You have {{inCartAlready.quantity}} copies already in your cart.</h3>
        </div>
        <h6>ADD TO CART</h6>
        <select>
          <option v-for="platform in game.platforms">{{platform}}</option>
        </select>
        <input type="number" v-model.number="quantity" :value="quantity"/>
        <button @click="addToCart">ADD TO CART</button>
      </div>
    </div>
  </div>
</template>


<script>
  import axios from 'axios'
  export default {
    props: ['cart'],
    created () {
      let gameId = this.$route.params.id
      axios({
        url: `http://localhost:8000/games/${gameId}`,
        method: `GET`,
        headers: {
          Authorization: 'Basic bWF0dGFsdWk6cGFzc3dvcmQ='
        }
      }).then((response) => {
        this.game = response.data[0]
      })
    },
    data () {
      return {
        game: {},
        quantity: 1
      }
    },
    computed: {
      inCartAlready: function () {
        let id = this.$route.params.id
        let inCartAlready = this.cart.find(item => item._id === id)
        return inCartAlready
      }
    },
    methods: {
      addToCart: function () {
        let copy = Object.assign({}, this.game)
        copy.quantity = this.quantity
        this.$emit('addToCart', copy)
        this.$router.push('/')
      }
    }
  }
</script>


<style scoped>
img{
  width: 100%;
  margin-top: 20%;
}
.inCart{
  color: white;
  background-color: red
}
.pictureHolder{
  width: 40%;
}
.info{
  width: 60%;
}
#controller{
  background-color: green;
  width: 95%;
  margin: 0 auto;
  background-color: rgb(205, 209, 219);
}
.content{
  display: flex;
  width: 95%;
}
p,h1,h3,h6{
  text-align: center;
}

</style>
