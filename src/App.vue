<template>
  <div id="app">
    <router-link to="/home" tag="button" replace active-class="">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!-- <router-link :to="/user/+userid">用户</router-link>
    <router-link :to="{path: '/profile',query:{name:'muzi',age:'18',sex:'nan'}}">档案</router-link> -->
    <!-- <button @click="homeclick">首页</button>
    <button @click="aboutclick">关于</button> -->
    <button @click="userclick">用户</button>
    <button @click="profileclick">档案</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userid:'zhangsan'
    }
  },
  methods: {
    homeclick(){
      console.log('111');
      // this.$router.push('/home')
      this.$router.replace('/home')
    },
    aboutclick(){
      console.log('222');
      // this.$router.push('/about')
      this.$router.replace('/about')
    },
    userclick(){
      this.$router.push('/user/'+this.userid)
    },
    profileclick(){
      this.$router.push({
        path: '/profile',
        query: {
          name: 'muzi',
          age: '18',
          sex: 'nan'
        }
      })
    }
  },
}
</script>

<style>

</style>
