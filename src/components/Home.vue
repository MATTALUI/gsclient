<template>
  <div>
    <div class = "content">
      <GameListItem v-for="(game, index) in searchList" :key="index" :game="game" :index="index"></GameListitem>
    </div>
  </div>
</template>


<script>
import GameListItem from '@/components/GameListItem.vue'
import axios from 'axios'

export default {
  name: 'home',
  components: {GameListItem},
  created () {
    axios({
      url: 'http://localhost:8000/games',
      method: 'GET',
      headers: {
        Authorization: 'Basic bWF0dGFsdWk6cGFzc3dvcmQ='
      }
    })
      .then((response) => {
        this.games = response.data
      })
  },
  data () {
    return {
      msg: 'You have done it!',
      games: [],
      search: ''
    }
  },
  computed: {
    searchList: function () {
      return (this._data.games.filter((game) => {
        return (game.title.toLowerCase().indexOf(this._data.search.toLowerCase()) > -1)
      }))
    }
  }
}
</script>


<style scoped>
</style>
