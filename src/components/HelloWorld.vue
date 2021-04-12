<template>
  <div class="hello">
    <h1 @click="say">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    say(){
      console.log('aaa')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello{
  color: red;
  display: flex;
}
</style>
