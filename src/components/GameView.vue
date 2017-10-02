<template>
  <div>
    <div class="content">
      <!-- to hold the image -->
      <div class="pictureHolder">
        <a :href="game.cover"><img :src="game.cover"/></a>
      </div>
      <!-- to hold info and cart controller -->
      <div class="info">
        <h1>{{game.title}}</h1>
        <p>{{game.description}}</p>
        <div id = "controller">

          <ul>
            <li v-for="platform in game.platforms">{{platform}}</li>
          </ul>
          <button @click="addToCart">ADD TO CART</button>
        </div>
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
    methods: {
      addToCart: function () {
        let copy = Object.assign({}, this.game)
        copy.quantity = this.quantity
        this.$emit('addToCart', copy)
      }
    }
  }
</script>


<style scoped>
img{
  width: 100%;
  margin-top: 20%;
}
.pictureHolder{
  width: 40%;
  /*background-color: pink;*/
}
.info{
  /*background-color: blue;*/
  width: 60%;
}
#controller{
  background-color: green;
  width: 95%;
  margin: 0 auto;
}
.content{
  display: flex;
  width: 95%;
  /*min-height: 80vh;
  background-color: rgb(239,244,255);
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 1), 0 6px 20px 0 rgba(0, 0, 0, 1);*/
}
p,h1{
  text-align: center;
}

</style>
