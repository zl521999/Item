<template>
  <div id="app">
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script type="text/ecmascript-6">

  import Footer from "./components/Footer/Footer"

  export default {

    components:{
      Footer
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #app
    background #eee
    width 100%
    height 100%

</style>
