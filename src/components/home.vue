<template>
  <div>
  <h2>我是首页</h2>
  <p>首页哈哈哈</p>
  <router-link to="/home/news" tag='button'>新闻</router-link>
  <router-link to="/home/messaeg" tag='button'>数据</router-link>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style>

</style>