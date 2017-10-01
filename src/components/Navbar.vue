<template>
  <nav>
    <router-link to="/" tag="div">
      <h1>SHOP</h1>
    </router-link>
    <router-link to="/account" tag="div">
      <h1>ACCOUNT</h1>
    </router-link>
  </nav>
</template>

<script>
</script>

<style scoped>
div{
  height: 100%;
  text-align: center;
  color: white;
  padding: 0 3%;
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
  /*border-bottom: solid white 4px;*/
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
