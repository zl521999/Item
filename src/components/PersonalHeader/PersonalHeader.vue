<template>
  <div class="personalContainer">
    <div class="header">
      <div class="left">
        <i class="iconfont icon-shouye" @click="goto('/home')"></i>
      </div>
      <div class="content">
        <span class="logo">网易严选</span>
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
  methods: {
    goto(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
.personalContainer
  bottom-border-1px(#f40)
  width 100%
  height 88px
  background #fafafa
  position fixed
  z-index 20
  .header
    height 88px
    margin 0 20px
    display flex
    line-height 88px
    position relative
    .left
      width 48px
      height 22px
      .iconfont
        font-size 52px
    .content
      font-size 36px
      padding-left 210px
      padding-right 180px
    .right
      .iconfont
        font-size 52px
      .icon-gouwu1
        padding-left 20px
  
</style>
