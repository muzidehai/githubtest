<template>
  <div @click="shit++">
    {{fuck}}
  </div>
</template>
<script>
export default {
  data () {
    return {
      shit: 0,
      fuck: 1
    }
  },
  updated(){
    console.log("我什么时候执行？");
  }

}
</script>