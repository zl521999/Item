<template>
  <div class="Email">
    <PersonalHeader />

    <div class="loginPhoneContent">
      <div class="logo">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt />
      </div>

      <div class="loginInput">
        <div class="login">
          <div class="number">
            <input type="text" placeholder="邮箱账号" />
          </div>

          <div class="news">
            <input type="text" placeholder="密码" />
          </div>

          <div class="con">
            <span class="conleft">注册账号</span>
            <span class="conright">忘记密码</span>
          </div>

          <div class="btn2">
            <button>登录</button>
          </div>

          <div class="btn3">
            <button @click="toLoginEmail">其他登录方式</button>
          </div>

          
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import PersonalHeader from "../../../components/PersonalHeader/PersonalHeader";
export default {
  components: {
    PersonalHeader
  },

  props:{
    toLoginEmail:Function,
    
  }


};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.Email
  width 100%
  height 600px
  background #fff
  .loginPhoneContent
    width 100%
    height 1200px
    position absolute
    left 0
    top 88px
    .logo
      width 100%
      height 64px
      background #fff
      margin-top 50px
      text-align center
      img
        width 220px
        height 64px
    .loginInput
      width 100%
      height 950px
      background #fff
      margin-top 100px
      position relative
      .login
        width 700px
        height 850px
        background #fff
        position absolute
        left 0
        top 0
        bottom 0
        right 0
        margin auto
        .number
          width 100%
          height 80px
          margin-top 100px
          input
            font-size 30px
            outline-style none
            width 100%
            padding-bottom 20px
            border-bottom 2px solid #666
        .news
          width 100%
          height 80px
          margin-top 50px
          position relative
          input
            font-size 30px
            outline-style none
            width 100%
            padding-bottom 20px
            border-bottom 1px solid #666
          .btn
            position absolute
            top -10px
            right 20px
            background #f4f4f4
            width 180px
            height 60px
            font-size 28px
            border 2px solid #7f7f7f
            border-radius 5px
            color #333
            text-align center
            line-height 60px
        .con
          width 100%
          height 50px
          line-height 50px
          margin-top 20px
          .conleft
            font-size 28px
            color #7f7f7f
          .conright
            float right
            font-size 28px
            color #333
        .btn2
          width 100%
          height 100px
          line-height 100px
          margin-top 30px
          button
            width 100%
            height 100px
            background #b4282d
            color #ffffff
            font-size 30px
            border-radius 10px
        .btn3
          width 100%
          height 100px
          line-height 100px
          margin-top 30px
          button
            width 100%
            height 100px
            background #fff
            color #b4282d
            font-size 30px
            border-radius 10px
        .register
          width 100%
          height 50px
          line-height 50px
          text-align center
          margin-top 30px
          span
            font-size 26px
            .iconfont
              padding-left 5px
              font-size 26px
              color #7f7f7f
</style>
