<template>
  <div>
  <h2>我是用户界面</h2>
  <p>用户界面嘿嘿嘿</p>
  <h2>{{userid}}</h2>
  <h2>{{this.$route.params.userid}}</h2>
  </div>
</template>

<script>
export default {
  name: 'user',
  computed: {
      userid(){
          return this.$route.params.userid
      }
  },
  created() {
    //通过生命周期来控制title，这里的生命周表示的是当组件被创建时在调用created
    // document.title = '用户'
    console.log('1111')
  },
  destroyed() {
    console.log('222');
  },
}
</script>

<style>

</style>