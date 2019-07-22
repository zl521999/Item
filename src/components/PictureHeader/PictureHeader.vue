<template>
  <div id="personalContainer">
    <div class="header">
      <div class="left">
        <i class="iconfont icon-shouye" @click="goto('/home')"></i>
      </div>
      <div class="content">
        <span class="find">发现</span>
        <span class="choce">甄选家</span>
      </div>
      <div class="right">
        <span>
          <i class="iconfont icon-sousuo" @click="goto('/sort')"></i>
        </span>
        <span>
          <i class="iconfont icon-gouwu1" @click="goto('/shop')"></i>
        </span>
      </div>
    </div>

    
  </div>
</template>

<script type="text/ecmascript-6">


export default {
  
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'
#personalContainer
  bottom-border-1px(#f40)
  width 100%
  height 100px
  background #fafafa
  position fixed
  z-index 30
  .header
    height 100px
    margin 0 20px
    display flex
    line-height 100px
    position relative
    .left
      width 48px
      height 22px
      .iconfont
        font-size 52px
    .content
      font-size 36px
      padding-right 0px
      .find
        color #b4282d
        font-size 38px
        font-weight bold
      .choce
        font-size 28px
        color #999
        padding-left 30px
    .right
      padding-left 130px
      .iconfont
        font-size 52px
      .icon-gouwu1
        padding-left 20px
  
</style>
