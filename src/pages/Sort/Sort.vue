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

    <div class="sortContent">
      <div class="sortleft">
        <div class="Scroll1">
          <ul class="listWrap">
            <li class="liItem active">推荐专区</li>
            <li class="liItem">夏凉专区</li>
            <li class="liItem">爆品专区</li>
            <li class="liItem">新品专区</li>
            <li class="liItem">居家生活</li>
            <li class="liItem">服饰鞋包</li>
            <li class="liItem">美食酒水</li>
            <li class="liItem">个护清洁</li>
            <li class="liItem">母婴亲子</li>
            <li class="liItem">运动旅行</li>
            <li class="liItem">数码家电</li>
            <li class="liItem">全球特色</li>
          </ul>
        </div>
      </div>

      <div class="sortright">
        <div class="Scroll2">
          <div class="sortList">
            <div class="title">
              <img
                src="https://yanxuan.nosdn.127.net/cb225335d4a438564040f00b448e8db8.png?imageView&thumbnail=0x196"
                alt
              />
            </div>

            <ul class="sortUl">
              <li class="sortItem">
                <img
                  src="https://yanxuan.nosdn.127.net/56486ce98e6ba7ae59a617759e739b09.png?imageView&quality=85&thumbnail=144x144"
                  alt
                />
                <div class="name">员工精选好货</div>
              </li>
              <li class="sortItem">
                <img
                  src="https://yanxuan.nosdn.127.net/9e9d99bd69e60ed0aaa43c880bdf295b.png?imageView&quality=85&thumbnail=144x144"
                  alt
                />
                <div class="name">优选美食每满88-10</div>
              </li>
              <li class="sortItem">
                <img
                  src="https://yanxuan.nosdn.127.net/aa429695072577df7673195b68531a10.png?imageView&quality=85&thumbnail=144x144"
                  alt
                />
                <div class="name">洗护好物两件满折</div>
              </li>
              <li class="sortItem">
                <img
                  src="https://yanxuan.nosdn.127.net/7292234e303c9254c6eaca4429d306ce.png?imageView&quality=85&thumbnail=144x144"
                  alt
                />
                <div class="name">环保厨房好物</div>
              </li>
              <li class="sortItem">
                <img
                  src="https://yanxuan.nosdn.127.net/4428315990361bb823901b3c75e3af3b.png?imageView&quality=85&thumbnail=144x144"
                  alt
                />
                <div class="name">180款爆品新定价</div>
              </li>
              <li class="sortItem">
                <img
                  src="https://yanxuan.nosdn.127.net/c6f0f44900f3d34a22d66d41178d6df9.png?imageView&quality=85&thumbnail=144x144"
                  alt
                />
                <div class="name">职场标配好物</div>
              </li>
              <li class="sortItem">
                <img
                  src="https://yanxuan.nosdn.127.net/d7c6ec42a6a08d2bce1ad2452a89dd4e.png?imageView&quality=85&thumbnail=144x144"
                  alt
                />
                <div class="name">夏季日用换新</div>
              </li>
              <li class="sortItem">
                <img
                  src="https://yanxuan.nosdn.127.net/02e21fa25f873ebd883f490ce7cf5f03.png?imageView&quality=85&thumbnail=144x144"
                  alt
                />
                <div class="name">50元幸福好物</div>
              </li>
              <li class="sortItem">
                <img
                  src="https://yanxuan.nosdn.127.net/60fd8b80c8a057af9255d2c1a31f82ce.png?imageView&quality=85&thumbnail=144x144"
                  alt
                />
                <div class="name">999+好评</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from "better-scroll";
export default {
  mounted() {
    this.navScroll = new BScroll(".Scroll1", {
      scrollY: true,
      click: true
    });

    this.navScroll = new BScroll(".Scroll2", {
      scrollY: true,
      click: true
    });
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
#sortContainer
  bottom-border-1px(#f40)
  width 100%
  height 100%
  background #fff
  position fixed
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
  .sortContent
    width 100%
    height 1044px
    background #fff
    .sortleft
      width 162px
      height 100%
      position relative
      .Scroll1
        width 162px
        height 100%
        position fixed
        left 0
        top 100px
        overflow hidden
        .listWrap
          width 162px
          height 1444px
          line-height 60px
          background #fff
          .liItem
            width 158px
            height 50px
            font-size 30px
            padding-left 20px
            margin-top 50px
            &.active
              border-left 4px solid #ab2b2b
              color #ab2b2b
    .sortright
      width 590px
      height 100%
      position relative
      .Scroll2
        width 590px
        height 100%
        position fixed
        right 0
        top 100px
        overflow hidden
        .sortList
          width 528px
          height 1444px
          margin 0 auto
          .title
            width 528px
            height 192px
            margin-top 20px
            img
              width 528px
              height 192px
        .sortUl
          width 528px
          height 648px
          background #fff
          margin-top 40px
          .sortItem
            float left
            width 144px
            height 216px
            text-align center
            font-size 24px
            padding-left 10px
            margin-right 20px
            img
              width 144px
              height 144px
            .name
              width 144px
              height 72px
</style>
