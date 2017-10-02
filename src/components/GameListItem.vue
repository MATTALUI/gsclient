<template>
  <div class="gameCard" v-bind:class="{odd: (index%2===0)}">
    <div class="coverHolder">
      <img :src="game.cover" />
    </div>
    <div class="gameInfo">
      <router-link :to="link" tag="h2"><a>{{game.title}}</a></router-link>
      <h2>${{game.price.toFixed(2)}}</h2>
      <h2><i v-for="(star,index) in stars" :class="stars[index]" @mouseover="ratePreview(index)" @mouseleave="setStars" @click="rateGame(index)"></i></h2>
    </div>
  </div>
</template>


<script>
export default {
  props: ['game', 'index'],
  methods: {
    setStars: function () {
      if (!this._data.alreadyRated) {
        this._data.stars = []
        let count = this.game.rating
        for (let i = 0; i < 5; i++) {
          if (count > 0) {
            // this._data.stars.push('fa fa-star')
            this._data.stars[i] = 'fa fa-star'
            count--
          } else {
            this._data.stars[i] = 'fa fa-star-o'
            // this._data.stars.push('fa fa-star-o')
          }
        }
      }
    },
    ratePreview: function (index) {
      if (!this._data.alreadyRated) {
        this._data.stars = []
        for (let i = 0; i < 5; i++) {
          if (index > -1) {
            this._data.stars[i] = 'fa fa-star'
            index--
          } else {
            this._data.stars[i] = 'fa fa-star-o'
          }
        }
      }
    },
    rateGame: function (index) {
      let copy = this._data.stars.slice()
      for (let i = 0; i < 5; i++) {
        if (index > -1) {
          copy[i] = 'fa fa-star voted'
          index--
        } else {
          copy[i] = 'fa fa-star-o voted'
        }
      }
      this._data.stars = copy
      this._data.alreadyRated = true
    }
  },
  created () {
    this.setStars()
  },
  data () {
    return {
      stars: [],
      alreadyRated: false,
      link: `games/${this.game._id}`
    }
  }
}
</script>


<style scoped>
  .gameCard{
    display: flex;
  }
  img{
    height: 200px;
    width: 200px;
    margin: 0;
  }
  i{
    color: gold;
  }
  .voted{
    color: blue;
  }
  h2{
    text-align: center;
  }
  .gameInfo{
    width: 100%;
  }
  .odd{
    background-color: rgb(225, 229, 239);
  }

</style>
