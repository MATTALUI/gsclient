<template>
  <div>
    <div class="content">
      <h1>{{game.title}}</h1>
      <p>{{game.description}}</p>
      <ul>
        <li v-for="platform in game.platforms">{{platform}}</li>
      </ul>
      <button @click="addToCart">ADD TO CART</button>
    </div>
  </div>
</template>


<script>
  import axios from 'axios'
  export default {
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
        game: {}
      }
    },
    methods: {
      addToCart: function () {
        this.$emit('addToCart', [this._data.game])
      }
    }
  }
</script>


<style scoped>
/*.content{
  width: 80%;
  min-height: 80vh;
  background-color: rgb(239,244,255);
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 1), 0 6px 20px 0 rgba(0, 0, 0, 1);
}*/
</style>
