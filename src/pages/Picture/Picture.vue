<template>
  <div id="picture">
    <PictureHeader />

    <div class="Scroll">
      <ul class="list">
        <li class="liItem active">推荐</li>
        <li class="liItem">好货内部价</li>
        <li class="liItem">回购榜</li>
        <li class="liItem">晒单</li>
        <li class="liItem">开发者日记</li>
        <li class="liItem">达人</li>
        <li class="liItem">HOME</li>
      </ul>
    </div>

    <div class="picList1">
      <a href="javascript:;" class="aItem">
        <div class="pictitle">
          <span class="picimg">
            <img src="https://yanxuan.nosdn.127.net/a714aeeb574585d3e23d35f1ee2db8b8.png?imageView&quality=65&thumbnail=56y56" alt="">
          </span>
          <span>选妹</span>
        </div>

        <div class="contitle">
           夏凉用品购置指南，凉席、空调被、凉感四件套每满100立减20
        </div>

        <div class="picimg2">
          <img src="https://yanxuan.nosdn.127.net/ae09169ca36f7adc57458c5a371ab6df.jpg?imageView&quality=65&thumbnail=690y376" alt="">
        </div>

        <div class="piclook">
          <i class="iconfont icon-yanjing"></i>
          <span>7219人看过</span>
        </div>


      </a>
    </div>

    <div class="picList2">

      <a href="javascript:;" class="aItem2">
        
        <div class="picLeft">
          <div class="pictitle2">
            <span class="picimg2">
              <img src="https://yanxuan.nosdn.127.net/1ecf5d57d84b7ae03905404131dc2c10.jpg?imageView&quality=65&thumbnail=56y56" alt="">
            </span>
            <span>网易文漫：小蕙</span>
          </div>


          <div class="contitle2">
            大牌最爱的玻尿酸原液，1瓶等于20片面膜
          </div>

          <div class="desc">
            赋活原液系列限时7.1折
          </div>

          <div class="piclook2">
            <i class="iconfont icon-yanjing"></i>
            <span>1814人看过</span>
          </div>
          

        </div>


        <div class="picRight">
          <img src="https://yanxuan.nosdn.127.net/119ea021198fbc19e7d0cb76c718e324.jpg?imageView&quality=65&thumbnail=272y272" alt="">
        </div>



      </a>

    </div>




  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from "better-scroll";

import PictureHeader from "../../components/PictureHeader/PictureHeader";

export default {
  components: {
    PictureHeader
  },

  methods: {
    goto(path) {
      this.$router.push(path);
    }
  },

  mounted() {
    // 横向滑动的ul
    this.navScroll = new BScroll(".Scroll", {
      scrollX: true,
      click: true
      //bounce: false
    });
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
#picture
  width 100%
  height 1470px
  background #eee
  .picList1
    width 100%
    height 720px
    background #fff
    margin-top 20px
    position relative
    .aItem
      width 700px
      height 650px   
      display block
      position absolute
      left 0
      bottom 0
      right 0
      top 0
      margin auto
      .pictitle
        width 100%
        height 80px
        margin-bottom 30px
        line-height 80px
        .picimg
          display inline-block
          width 70px
          height 70px
          margin-right 30px
          img
            width 70px
            height 70px
            border-radius 50px
            overflow hidden
            border 2px solid #d9d9d9
        span
          vertical-align middle
          font-size 30px
          color #333

      .contitle
        width 100%
        height 90px
        font-size 32px
        color #333
        line-height 45px
      .picimg2
        width 100%
        height 188px
        margin-top 30px
        img
          width 100%
          height 376px
      .piclook
        width 100%
        height 32px
        margin-top 220px
        color #999
        font-size 28px
        line-height 32px
        .iconfont
          font-size 32px

  .picList2
    width 100%
    height 420px
    background #fff
    margin-top 20px
    position relative
    .aItem2
      width 700px
      height 320px
      display block
      position absolute
      left 0
      bottom 0
      right 0
      top 0
      margin auto
      
      .picLeft
        width 400px
        height 320px
        background #fff
        float left
        .pictitle2
          width 100%
          height 80px
          margin-bottom 30px
          line-height 80px
          .picimg2
            display inline-block
            width 70px
            height 70px
            margin-right 30px
            img
              width 70px
              height 70px
              border-radius 50px
              overflow hidden
              border 2px solid #d9d9d9
          span
            vertical-align middle
            font-size 30px
            color #333

        .contitle2
          width 100%
          height 90px
          font-size 32px
          color #333
          line-height 45px

        .desc
          width 100%
          white-space nowrap
          overflow hidden
          text-overflow: ellipsis;
          font-size: 28px;
          line-height 60px
          color: #7f7f7f;
        .piclook2
          width 100%
          height 32px
          margin-top 20px
          color #999
          font-size 28px
          line-height 32px
          .iconfont
            font-size 32px
          
        

      .picRight
        float right 
        width 272px
        height 320px
        
        img
          width 272px
          height 320px

        







        

      

        





          
    


</style>
