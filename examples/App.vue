<template>
  <div id="app">
    <img src="./assets/logo.png" alt="logo" class="logo">
    <p class="name">AEditor</p>
    <AEditor />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.logo{
  margin-top: 30px;
  width: 60px;
}
.name{
  font-size: 50px;
  margin: 10px 0 30px 0;
}
</style>
