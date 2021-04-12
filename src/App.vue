<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#app{
  margin: 0 auto;
  width: 700px;
  #nav{
    margin-bottom: 20px;
    text-align: center;
  }
}
</style>
