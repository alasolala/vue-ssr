<template>
  <div class="movie-list">
    <div v-for="(item, index) in list" class="movie">
      <img class="cover" :src="item.cover">
      <p>
        <span class="title">{{item.title}}</span>
        <span class="rate">{{item.rate}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieList',
  asyncData ({ store }) {
    return store.dispatch('getTopList')
  },
  computed: {
    list () {
      return this.$store.state.topList
    }
  },
  created () {
    if(!this.$store.state.topList){
      this.$store.dispatch('getTopList')
    }
  }
}
</script>
<style scoped lang="less">
.movie-list{
  width: 700px;
  .movie{
    height: 240px;
    width: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    float: left;
    font-size: 12px;
    margin-right: 15px;
    .cover{
      width: 120px;
      height: 180px;
    }
    .title{
      color: #37a;
    }
    .rate{
      color: #e09015;
    }
  }
}
</style>
