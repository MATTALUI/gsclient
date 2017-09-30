<template>
  <div>
    <Navbar></Navbar>
    <div class = "content">
      <h1>ALL GAMES</h1>
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'home',
  components: {Navbar},
  created () {
    console.log('meow!')
  },
  data () {
    return {
      msg: 'You have done it!'
    }
  }
}
</script>


<style scoped>
.content{
  width: 80%;
  height: 200vh;
  /*background-color: rgb(199,204,215);*/
  background-color: rgb(239,244,255);
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 1), 0 6px 20px 0 rgba(0, 0, 0, 1);
}

</style>
