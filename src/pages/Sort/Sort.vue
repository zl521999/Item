<template>
  <div id="sortContainer">
    <div class="sortHeader">
      <div class="sortSearch">
        <span>
          <i class="iconfont icon-sousuo"></i>
          搜索商品，共21814款好物
        </span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

    @import '../../common/stylus/mixins.styl'
    #sortContainer
      bottom-border-1px(#f40)
      width 100%
      height 88px
      background #fff
      position fixed
      z-index 10
      .sortHeader
        height 88px
        margin 0 20px
        position relative
        .sortSearch
          width 690px
          height 56px
          background #EDEDED
          position absolute
          left 0
          bottom 0
          top 0
          right 0
          margin auto
          border-radius 10px
          text-align center
          line-height 56px
          span
            font-size 28px
            color #666
            
          
        
          


  


</style>
