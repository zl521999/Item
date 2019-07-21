<template>
  <div id="personalContainer">
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

    <div class="perContent">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt />

      <div class="phone">
        <span>
          <i class="iconfont icon-phone"></i>手机号码登录
        </span>
      </div>

      <div class="email">
        <span>
          <i class="iconfont icon-youxiang"></i>邮箱账号登录
        </span>
      </div>

      <div class="btn">
        <span>
          手机快速注册
          <i class="iconfont icon-arrow"></i>
        </span>
      </div>

      <div class="loginWrap">
        <div class="loginItem">
          <span>
            <i class="iconfont icon-weixin"></i>微信
          </span>
        </div>

        <div class="loginItem">
          <span>
            <i class="iconfont icon-qq"></i>QQ
          </span>
        </div>

        <div class="loginItem">
          <span>
            <i class="iconfont icon-weibo"></i>微博
          </span>
        </div>
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

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'
#personalContainer
  bottom-border-1px(#f40)
  width 100%
  height 88px
  background #fafafa
  position fixed
  z-index 40
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
  .perContent
    position relative
    img
      width 268px
      height 90px
      display block
      margin 180px auto
    .phone, .email
      width 670px
      height 94px
      margin 0 auto 30px
      background #B4282D
      color #fff
      text-align center
      line-height 94px
      font-size 32px
      border 2px solid #B4282D
      border-radius 10px
      .iconfont
        font-size 40px
        padding-right 15px
    .email
      background #F2F5F4
      color #B4282D
    .btn
      width 670px
      font-size 30px
      margin 0 auto
      text-align center
    .loginWrap
      position absolute
      left 0
      top 870px
      text-align center
      width 100%
      height 100px
      line-height 100px
      .loginItem
        width 180px
        height 40px
        border-right 2px solid #979797
        display inline-block
        text-align center
        padding-right 20px
        line-height 30px
        font-size 32px
        color #7f7f7f
        &:last-child
          border-right none
        .iconfont
          padding-right 10px
</style>
