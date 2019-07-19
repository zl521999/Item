<template>
  <div id="homeContainer">
    <!-- 首页头部 -->
    <section class="homeHeader">
      <img
        src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png"
        alt
      />
      <span class="icon">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <input type="text" placeholder="搜索商品~~~~~~款好物" />
      <button>登录</button>
    </section>

    <!-- 首页轮播 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/2f9c81a130447f34424a16a40d66cbba.jpg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/7c1ce80acc7625c23246cc99e9cd8f4a.png?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/5a8fdfaa42b384309a0e7425305fabed.jpg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/542cc7564cffd33478c689c2380a9f91.jpg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/5d8d67832db5757f2941c3cfe0ffd558.jpg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/8d2af3ab55bf51d5ac03e5d9c6fa1fc4.jpg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/387774a110c810fde93e77b331c968c8.jpg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/e1838f8442e7bfef014070ff902a698f.jpg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>

    <!-- 首页列表1 -->
    <div class="wangyi">
      <ul class="list-content">
        <li class="list-con">
          <i class="iconfont icon-airudiantubiaohuizhi-zhuanqu_yiwutong"></i>
          <span></span> 网易自营品牌
        </li>
        <li class="list-con">
          <i class="iconfont icon-anquan"></i>
          <span>30天无忧退货</span>
        </li>
        <li class="list-con">
          <i class="iconfont icon-jiaoyi"></i>
          <span>48小时快速退款</span>
        </li>
      </ul>
    </div>

    <!-- 首页列表2 -->
    <ul class="listShop">
      <li class="listShopItem">
        <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt />
        <span>新品首发</span>
      </li>
      <li class="listShopItem">
        <img src="https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt />
        <span>居家生活</span>
      </li>
      <li class="listShopItem">
        <img src="https://yanxuan.nosdn.127.net/2415a74cea7d3f080c2dcaa791884572.png" alt />
        <span>服饰鞋包</span>
      </li>
      <li class="listShopItem">
        <img src="https://yanxuan.nosdn.127.net/d916591adea776351e084016335e5820.png" alt />
        <span>美食酒水</span>
      </li>
      <li class="listShopItem">
        <img src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png" alt />
        <span>个护清洁</span>
      </li>
      <li class="listShopItem">
        <img src="https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png" alt />
        <span>母婴亲子</span>
      </li>
      <li class="listShopItem">
        <img src="https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png" alt />
        <span>运动旅行</span>
      </li>
      <li class="listShopItem">
        <img src="https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png" alt />
        <span>数码家电</span>
      </li>
      <li class="listShopItem">
        <img src="https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png" alt />
        <span>全球特色</span>
      </li>
      <li class="listShopItem">
        <img src="https://yanxuan.nosdn.127.net/3954c3cbeb4359dd7007be7a076e0dda.gif" alt />
        <span>超级会员</span>
      </li>
    </ul>

    <!-- 内容1 -->
    <div class="content1">
      <div class="content-title">
        <span class="txt">
          <i class="iconfont icon-jianhao"></i>
          新人专享礼
          <i class="iconfont icon-jianhao"></i>
        </span>
         
      </div>
      <div class="content-con">
        <div class="con-left">
          <div class="name">
            新人专享礼包
          </div>
          <div class="imgWrap">
            <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
          </div>
        </div>
        <div class="con-right">
          <div class="cr1">
            <div class="cr1-left">
              <p>福利社</p>
              <span>今日特价</span>
            </div>
            <div class="cr1-right">
              <img src="https://yanxuan.nosdn.127.net/d2abd30e0296cdee86f1bdd9242c0937.png?imageView&thumbnail=200x200&quality=75" alt="">
              <div class="disc">
                <p>￥189</p>
                <p><del>219</del></p>
              </div>
           </div>
          </div>
          <div class="cr2">
            <div class="cr2-left">
               <p>新人拼团</p>
               <span>1元起包邮</span>
            </div>
            <div class="cr2-right">
              <img src="https://yanxuan.nosdn.127.net/00382181864967c1125b75bd5289c8d3.png?imageView&thumbnail=200x200&quality=75" alt="">
              <div class="disc">
                <p>￥1</p>
                <p><del>15</del></p>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 内容2 -->
    <div class="content2">

    </div>




  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";

export default {
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      //direction: 'vertical', // 垂直切换选项
      loop: true, // 循环模式选项
      autoplay: {
        delay: 1000 //1秒切换一次
      },

      //用户操作后, autoplay会默认停止, 这个是取消禁止autoplay
      autoplayDisableOnInteraction: false,
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
#homeContainer
  width 100%
  height 9999px
  background #ededed
  .homeHeader
    position relative
    width 100%
    padding 20px
    display flex
    background #fff
    img
      width 140px
      height 40px
      padding-right 10px
      padding-top 10px
    .icon
      width 10px
      height 10px
      position absolute
      left 230px
      top 30px
    input
      width 460px
      height 56px
      text-align center
      background-color #ededed
      line-height 56px
      border-radius 10px
      font-size 24px
      padding-left 10px
    button
      border 1px solid #ff4400
      background-color #fff
      width 80px
      height 50px
      margin-left 10px
      margin-top 5px
  .swiper-container
    width 100%
    height 370px
    position relative
    .swiper-wrapper
      width 100%
      height 370px
      .swiper-slide
        width 100%
        height 370px
        img
          width 100%
          height 100%
  .wangyi
    bottom-border-1px(#ededed)
    width 100%
    height 100px
    .list-content
      width 100%
      height 100px
      line-height 100px
      background #fff
      .list-con
        float left
        margin-left 40px
        font-size 24px
        .iconfont
          color #f40
        img
          width 32px
          height 32px
  .listShop
    width 100%
    height 400px
    background #fff
    .listShopItem
      width 110px
      height 156px
      float left
      margin 18px
      text-align center
      img
        width 110px
        height 110px
        padding-bottom 20px
      span
        font-size 26px
        color #333
  .content1
    width 100%
    height 600px
    margin-top 30px
    background #fff
    .content-title
      width 100%
      height 100px
      
      text-align center
      line-height 90px
      font-size 36px
    .content-con
      width 100%
      height 600px
      .con-left
        width 45%
        height 450px
        background #f9e9cf
        float left
        margin-left 20px
        .name
          font-size 36px
          padding 40px 0 0 30px
        .imgWrap
          margin 70px 50px
          img
            width 258px
            height 257px
      .con-right
        width 47%
        height 450px
        margin-left 50%
        margin-right 20px
        .cr1
          width 100%
          height 49%
          
          .cr1-left
            width 50%
            height 100%
            background #FBE2D3
            float left
            p
              font-size 36px
              padding 20px 0 20px 20px
            span
              color #7F7F7F;
              font-size 28px
              margin-left 20px
          .cr1-right
            width 50%
            height 100%
            background #FBE2D3
            margin-left 50%
            position relative
            img
              width 200px
              height 200px
            .disc
              width 80px
              height 80px
              background orange
              opacity 0.9
              border-radius 50%
              position absolute
              top 20px
              right 20px
              text-align center
              color #fff
              p
                padding-top 10px
        .cr2
          width 100%
          height 49%
          
          margin-top 10px
          .cr2-left
            width 50%
            height 100%
            background #ffecc2
            float left
            p
              font-size 36px
              padding 20px 0 20px 20px
            span
              color #eee
              font-size 28px
              margin-left 20px
              background #cbb693
              padding 5px 10px
              border-radius 10px
          .cr2-right
            width 50%
            height 100%
            background #ffecc2
            margin-left 50%
            position relative
            img
              width 200px
              height 200px
            .disc
              width 80px
              height 80px
              background orange
              opacity 0.9
              border-radius 50%
              position absolute
              top 20px
              right 20px
              text-align center
              color #fff
              p
                padding-top 10px
  .content2
    width 100%
    height 600px
    margin-top 30px
    background red


      
     


     
     
    
      
       
        
          
          
</style>
