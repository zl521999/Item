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
      <button @click="goto('/personal')">登录</button>
    
      <BScroll/>  

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
      <div class="swiper-pagination">
        <span class="swiper-pagination-bullet"></span>
        <span class="swiper-pagination-bullet"></span>
        <span class="swiper-pagination-bullet"></span>
        <span class="swiper-pagination-bullet"></span>
        <span class="swiper-pagination-bullet"></span>
        <span class="swiper-pagination-bullet"></span>
        <span class="swiper-pagination-bullet"></span>
        <span class="swiper-pagination-bullet"></span>
      </div>
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
          <div class="name">新人专享礼包</div>
          <div class="imgWrap">
            <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt />
          </div>
        </div>
        <div class="con-right">
          <div class="cr1">
            <div class="cr1-left">
              <p>福利社</p>
              <span>今日特价</span>
            </div>
            <div class="cr1-right">
              <img
                src="https://yanxuan.nosdn.127.net/d2abd30e0296cdee86f1bdd9242c0937.png?imageView&thumbnail=200x200&quality=75"
                alt
              />
              <div class="disc">
                <p>￥189</p>
                <p>
                  <del>219</del>
                </p>
              </div>
            </div>
          </div>
          <div class="cr2">
            <div class="cr2-left">
              <p>新人拼团</p>
              <span>1元起包邮</span>
            </div>
            <div class="cr2-right">
              <img
                src="https://yanxuan.nosdn.127.net/00382181864967c1125b75bd5289c8d3.png?imageView&thumbnail=200x200&quality=75"
                alt
              />
              <div class="disc">
                <p>￥1</p>
                <p>
                  <del>15</del>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 内容2 -->
    <div class="content2">
      <div class="con-title">
        <div class="con2-list">
          <div class="listShop2">品牌制造商直供</div>
          <div class="listShop3">
            更多
            <i class="iconfont icon-arrow"></i>
          </div>
        </div>
      </div>
      <div class="con-content">
        <li class="listShop4">
          <img
            src="https://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1"
            alt
          />
          <div class="lifont">
            <h4>海外制造商</h4>
            <h5>9.9元起</h5>
          </div>
        </li>
        <li class="listShop4">
          <img
            src="https://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png?imageView&thumbnail=343y260&enlarge=1"
            alt
          />
          <div class="lifont">
            <h4>CK制造商</h4>
            <h5>29.9元起</h5>
          </div>
        </li>
        <li class="listShop4">
          <img
            src="https://yanxuan.nosdn.127.net/66a23d776f41cba70d00803a5231124b.png?imageView&thumbnail=343y260&enlarge=1"
            alt
          />
          <div class="lifont">
            <h4>新秀丽制造商</h4>
            <h5>169元起</h5>
          </div>
        </li>
        <li class="listShop4">
          <img
            src="https://yanxuan.nosdn.127.net/3bf5a8a2f6eef284ecb40806ae9ce043.png?imageView&thumbnail=343y260&enlarge=1"
            alt
          />
          <div class="lifont">
            <h4>Nice West制造商</h4>
            <h5>219元起</h5>
          </div>
        </li>
      </div>
    </div>

    <!-- 内容3 -->
    <div class="content3">
      <div class="con-title3">
        <div class="con3-list">
          <div class="listShop2">类目热销榜</div>
        </div>
      </div>
      <div class="con-content">
        <div class="con-left">
          <div>
            <p>热销榜</p>
            <i class="iconfont icon-jianhao"></i>
          </div>
          <img
            src="https://yanxuan.nosdn.127.net/bb032dd258a8b8c638f0cd8af92202e3.png?imageView&quality=65&thumbnail=200x200"
            alt
          />
        </div>

        <div class="con-right">
          <div>
            <p>好评榜</p>
            <i class="iconfont icon-jianhao"></i>
          </div>
          <img
            src="https://yanxuan.nosdn.127.net/7dd208d4eb386ca3fc0f794963a0d70e.png?imageView&quality=65&thumbnail=200x200"
            alt
          />
        </div>
      </div>

      <div class="conT">
        <li class="listShop4">
          <img
            src="https://yanxuan.nosdn.127.net/768355bca1c186c0c25de88bd1272d8c.png?imageView&quality=65&thumbnail=200x200"
            alt
          />
          <div class="lifont">
            <h4>居家生活榜</h4>
          </div>
        </li>
        <li class="listShop4">
          <img
            src="https://yanxuan.nosdn.127.net/9d581d4ec02cf86ff2a05cf81868f159.png?imageView&quality=65&thumbnail=200x200"
            alt
          />
          <div class="lifont">
            <h4>美食酒水榜</h4>
          </div>
        </li>
        <li class="listShop4">
          <img
            src="https://yanxuan.nosdn.127.net/06388e29fad0b7e8a9d6b1f398e5dcd3.png?imageView&quality=65&thumbnail=200x200"
            alt
          />
          <div class="lifont">
            <h4>服饰鞋包榜</h4>
          </div>
        </li>
        <li class="listShop4">
          <img
            src="https://yanxuan.nosdn.127.net/fddaa18690fa0b53d2d59ab7bd26b8f9.png?imageView&quality=65&thumbnail=200x200"
            alt
          />
          <div class="lifont">
            <h4>个护清洁榜</h4>
          </div>
        </li>
        <li class="listShop4">
          <img
            src="https://yanxuan.nosdn.127.net/271eb0b3d94e80579afdeb614cc240ad.png?imageView&quality=65&thumbnail=200x200"
            alt
          />
          <div class="lifont">
            <h4>运动旅行榜</h4>
          </div>
        </li>
        <li class="listShop4">
          <img
            src="https://yanxuan.nosdn.127.net/79fb28d0a101f704d2fa3665273dbc1a.png?imageView&quality=65&thumbnail=200x200"
            alt
          />
          <div class="lifont">
            <h4>数码家电榜</h4>
          </div>
        </li>
        <li class="listShop4">
          <img
            src="https://yanxuan.nosdn.127.net/f444ac11115a8249a92dc95dccad6e07.png?imageView&quality=65&thumbnail=200x200"
            alt
          />
          <div class="lifont">
            <h4>母婴亲子榜</h4>
          </div>
        </li>
        <li class="listShop4">
          <img
            src="https://yanxuan.nosdn.127.net/630db6838c0cce666f7641469275a0ab.png?imageView&quality=65&thumbnail=200x200"
            alt
          />
          <div class="lifont">
            <h4>全球特色榜</h4>
          </div>
        </li>
      </div>
    </div>

    <!-- 内容4-->
    <div class="content4">
      <div class="con-title4">
        <div class="con4-list">
          <div class="listShop2">人气推荐</div>
          <div class="listShop3">
            更多
            <i class="iconfont icon-arrow"></i>
          </div>
        </div>
      </div>
      <div class="con-content">
        <div class="con4">
          <div class="con4L">
            <img
              src="https://yanxuan.nosdn.127.net/bb032dd258a8b8c638f0cd8af92202e3.png?imageView&quality=65&thumbnail=280x280"
              alt
            />
          </div>
          <div class="con4R">
            <div class="conC">
              <div class="conC1">好货内部价</div>
              <div class="conC2">超冷感吸放湿双面夏凉被 可机洗</div>
              <div class="conC3">冷感+亲肤，享受双面睡感</div>
              <div class="conC4">￥179</div>
            </div>
          </div>
        </div>

        <div class="con4List">
          <div class="con4li">
            <a href="javascript:;" class="con4lia">
              <img src="https://yanxuan.nosdn.127.net/4114839cec128a22b8f60ddafec3f944.png?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="name">
                <span>红豆薏米丸 100克</span>
                <span class="nameprice">￥39</span>
              </div>
              <div class="price">
                加价购
              </div>

              <div class="namelist">
                <li>2</li>
                <li>个</li>
                <li>规</li>
                <li>格</li>
              </div>    


            </a>
          </div>
          <div class="con4li">
            <a href="javascript:;" class="con4lia">
              <img src="https://yanxuan.nosdn.127.net/604941c1a657e49f4114dabb201ab2aa.png?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="name">
                <span>智能降温保冷杯</span>
                <span class="nameprice">￥199</span>
              </div>
              

              <div class="namelist">
                <li>3</li>
                <li>色</li>
                <li>可</li>
                <li>选</li>
              </div>  


            </a>
          </div>
          <div class="con4li lastchild">
            <a href="javascript:;" class="con4lia">
              <img src="https://yanxuan.nosdn.127.net/ecee79b50e2364ec4abbae6c26a983a4.png?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="name">
                <span>追风 男式轻弹慢跑运动鞋</span>
                <span class="nameprice">￥155</span>
              </div>
              <div class="price">
                特价
              </div>

              <div class="namelist">
                <li>3</li>
                <li>色</li>
                <li>可</li>
                <li>选</li>
              </div>    


            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- 首页底部 -->
    <div class="homeFooter">
      <div class="footer-con">
          
          <ul class="footer-t">
            <li><a href="https://m.you.163.com/downloadapp?_stat_from=search_pz_baidu_29&appAwakeUrl=http%3a%2f%2fm.you.163.com">下载App</a></li>
            <li><a href="https://you.163.com/?_m_forcepc_=true&_m_anonid_=7d8869f2-6731-4ee9-960c-c1cd93436113">电脑版</a></li>
          </ul>

          <div class="footer-b">
            <span>网易公司版权所有 © 1997-2019</span>
            <p>食品经营许可证：JY13301080111719</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";

import BScroll from "../../components/BScroll/BScroll"

export default {

  components:{
    BScroll
  },

  methods: {
    goto(path){
      this.$router.push(path)
    }
  },

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
  height 4370px
  background #ededed
  position relative
  .homeHeader
    position fixed
    width 100%
    height 80px
    padding 20px
    display flex
    background #fff
    z-index 20
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
      font-size 28px
  .swiper-container
    width 100%
    height 370px
    position relative
    padding-top 182px
    .swiper-wrapper
      width 100%
      height 370px
      .swiper-slide
        width 100%
        height 370px
        img
          width 100%
          height 100%
    .swiper-pagination
      .swiper-pagination-bullet
        width 50px
        height 5px
        display inline-block
        background #fff
        opacity 0.4
        border-radius 0
        &.swiper-pagination-bullet-active
          opacity 1
          background #fff
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
      flex-grow 2
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
              color #7F7F7F
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
    height 700px
    margin-top 30px
    background #fff
    .con-title
      width 100%
      height 100px
      .con2-list
        width 100%
        height 100px
        .listShop2
          float left
          font-size 36px
          margin 20px
        .listShop3
          float right
          font-size 30px
          margin 20px 15px 0
    .con-content
      width 95%
      height 526px
      margin 20px
      .listShop4
        position relative
        width 345px
        height 260px
        background #eee
        float left
        margin-bottom 6px
        margin-right 6px
        img
          width 345px
          height 260px
        .lifont
          position absolute
          left 0
          top 0
          width 100%
          height 90px
          h4, h5
            line-height 50px
            text-align center
            font-size 32px
            color #333
          h5
            font-size 28px
            color #7f7f7f
  .content3
    width 100%
    height 730px
    margin-top 30px
    background #fff
    .con-title3
      width 100%
      height 100px
      .con3-list
        width 100%
        height 100px
        .listShop2
          float left
          font-size 36px
          margin 20px
    .con-content
      width 95%
      height 200px
      margin 20px
      .con-left
        width 347px
        height 200px
        background #f9f3e4
        float left
        display flex
        justify-content space-around
        align-items center
        font-size 32px
        .iconfont
          color #f40
        img
          width 200px
          height 200px
      .con-right
        float right
        width 347px
        height 200px
        background #EBEFF6
        display flex
        justify-content space-around
        align-items center
        font-size 32px
        .iconfont
          color #f40
        img
          width 200px
          height 200px
    .conT
      width 95%
      height 367px
      margin 20px
      .listShop4
        position relative
        width 170px
        height 180px
        background #eee
        float left
        margin-bottom 6px
        margin-right 5px
        img
          width 120px
          height 120px
          margin 70px 0 0 30px
        .lifont
          position absolute
          left 0
          top 20px
          width 100%
          height 90px
          h4
            line-height 50px
            text-align center
            font-size 28px
            color #333
  .content4
    width 100%
    height 800px
    margin-top 30px
    background #fff
    .con-title4
      width 100%
      height 100px
      .con4-list
        width 100%
        height 100px
        .listShop2
          float left
          font-size 36px
          margin 20px
        .listShop3
          float right
          font-size 30px
          margin 20px 15px 0
    .con-content
      height 526px
      margin 20px
      
      .con4
        width 700px
        height 280px
        
        .con4L
          width 280px
          height 280px
          background #FEF2E3
          float left
          img
            width 280px
            height 280px
        .con4R
          float right
          width 420px
          height 280px
          background #FEF0DF
          .conC
            width 350px
            height 160px
            background #FEF0DF
            margin 60px auto
            .conC1
              width 130px
              background rgba(255, 255, 255, 0.9)
              border 1px solid #B4282D
              color #B4282D
              border-radius 5px
              padding 5px 10px
              text-align center
              margin-bottom 10px
            .conC2
              width 340px
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              font-size 28px
              margin-bottom 8px
            .conC3
              color #7f7f7f
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              margin-bottom 8px
              font-size 26px
            .conC4
              color #b4282d
              font-size 26px

      .con4List
        width 700px
        height 354px
        
        margin-top 20px
        .con4li
          float left
          width 216px
          height 354px
          
          margin-right 24px
          &.lastchild
            margin-right 0px
          .con4lia
            position relative
            width 216px
            height 216px
            display block
            background #F5F5F5
            img
              width 216px
              height 216px
              margin-left 20px
            .name
              width 216px
              height 72px
              margin-top 20px
              span
                font-size 28px
                white-space wrap
                line-height 40px
              .nameprice
                 color #b4282d
            .price
                border 2px solid #b4282d
                width 100px
                height 30px
                border-radius 50px
                line-height 30px
                text-align center
                font-size 24px
                margin-top 10px

 

            .namelist
              position absolute
              border-radius 5px
              border 2px solid #b4a078
              color #b4a078
              top 20px
              left 10px
              width 30px
              height 100px
              padding 10px 5px
              text-align center


  .homeFooter
    width 100%
    height 245px
    background #414141
    position relative
    .footer-con
      position absolute
      left 0
      right 0
      top 0
      bottom 0
      margin auto
      width 650px
      height 200px
      
      .footer-t
        width 100%
        height 62px
        margin-top 20px
        li
          float left
          width 170px
          height 62px
          line-height 62px
          text-align center
          border 2px solid #999
          background #414141
          margin-left 100px
          border-radius 10px
          a
           color #fff
           font-size 24px
      .footer-b
        width 100%
        height 94px
        
        margin-top 30px
        text-align center
        padding-top 10px
        color #999
        span
          font-size 26px
          
        p
          font-size 26px
          margin-top 10px 


        



        
          








           







              




          

        
        
</style>
