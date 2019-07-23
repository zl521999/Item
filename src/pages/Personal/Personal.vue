<template>
  <div id="Personal">
    <PersonalHeader />
    
    <div class="person">
      <router-view></router-view>
      <div class="perContent">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt />

        <div class="phone" @click="toPath('/personal/phone')">
          <span>
            <i class="iconfont icon-phone"></i>手机号码登录
          </span>
        </div>

        <div class="email" @click="toPath('/personal/email')">
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

        <div v-if="$route.path==='/personal'" class="loginWrap">
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
  </div>
</template>

<script type="text/ecmascript-6">

import PersonalHeader from "../../components/PersonalHeader/PersonalHeader";

export default {

  components:{
    PersonalHeader
  },
  
    
    methods: {
      toPath (path) {
        this.$router.push(path)
      }
    }

};
</script>

<style lang="stylus" rel="stylesheet/stylus">
#Personal
  width 100%
  height 100%
  position relative
  .person
    width 100%
    height 100%
    .perContent
      width 100%
      padding-top 200px
      img
        width 268px
        height 90px
        display block
        margin 100px auto
      .phone, .email
        width 670px
        height 94px
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
      .phone
        margin 180px auto 30px
      .email
        background #F2F5F4
        color #B4282D
        margin 20px auto 30px
      .btn
        width 670px
        font-size 30px
        margin 0 auto
        text-align center
      .loginWrap
        position absolute
        left 0
        bottom 100px
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
