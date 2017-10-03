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
        <table>
          <tr>
            <td>SYSTEM</td>
            <td>PRICE</td>
            <td>QUANTITY</td>
            <td>TOTAL</td>
          </tr>
          <tr>
            <td>
              <select v-model="system">
                <option v-for="platform in game.platforms">{{platform}}</option>
              </select>
            </td>
            <td>
              {{this.game.price}}
            </td>
            <td>
              <input type="number" v-model.number="quantity" :value="quantity"/>
            </td>
            <td>
              {{(this.quantity*this.game.price).toFixed(2)}}
            </td>
          </tr>
        </table>
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
        this.system = response.data[0].platforms[0]
      })
    },
    data () {
      return {
        game: {},
        quantity: 1,
        system: ''
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
        let cartObject = {}
        cartObject._id = this.game._id
        cartObject.title = this.game.title
        cartObject.price = this.game.price
        cartObject.quantity = this.quantity
        this.$emit('addToCart', cartObject)
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
table{
  /*background-color: pink;*/
  margin: 0 auto;
}
td{
  margin: 0 100px;
}
/*table > * {
  margin: 0 20px;
}*/
/*input,select{
  margin-left: 30px;
}*/
button{
  position: relative;
  left: 70%;
}
td{
  border-spacing: 100px;
}

</style>
