<template>
  <div id="shopContainer">
    <div class="Header">
      <div class="shopHeader">
        <div class="headerLeft">购物车</div>

        <div class="headerRight">领券</div>
      </div>
    </div>

    <div class="shopContent1">
      <div class="content">
        <li class="con-item">
          <i class="iconfont icon-yuancircle46"></i>
          <span>30天无忧退货</span>
        </li>
         <li class="con-item">
          <i class="iconfont icon-yuancircle46"></i>
          <span>48小时快速退款</span>
        </li>
         <li class="con-item">
          <i class="iconfont icon-yuancircle46"></i>
          <span>满88元包邮</span>
        </li>
      </div>
    </div>

    <div class="shopContent2">
      
        <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt="">
      

      <div class="txt">
        <div class="txt-top">
          去添加点什么吧
        </div>

        <div class="txt-login"  @click="goto('/personal')">
          登录
        </div>


      </div>




    </div>





  </div>
</template>

<script type="text/ecmascript-6">
export default {

  methods: {

    goto(path){
      this.$router.push(path)
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#shopContainer
  width 100%
  height 100%
  .Header
    width 100%
    height 88px
    background #fff
    .shopHeader
      height 88px
      margin 0 20px
      display flex
      justify-content space-between
      align-items center
      .headerLeft
        font-size 36px
        color #333
      .headerRight
        font-size 30px
        color #B4282D
        padding-right 30px
  

  .shopContent1
    width 100%
    background #f4f4f4
    .content
      height 70px
      background #f4f4f4
      margin 0 20px 0
      .con-item
        float left 
        line-height 70px
        font-size 24px
        color #666
        margin-right 90px
        &:last-child
          margin-right 0
        .iconfont
          font-size 18px
  .shopContent2
    width 100%
    height 300px
    
    position absolute
    top 50%
    margin-top -150px
    img
      width 248px
      height 248px
      display block
      margin 0 auto
    .txt
      width 100%
      height 170px
      
      text-align center
      font-size 28px
      color #999
    .txt-login
      width 500px
      height 92px
      margin 40px auto
      background #b4282d
      font-size 36px
      line-height 92px
      color #fff





        





</style>
