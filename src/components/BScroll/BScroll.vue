<template>
  <div class="Scroll">
    <ul class="list">
      <li class="liItem active">推荐</li>
      <li class="liItem">居家生活</li>
      <li class="liItem">服饰鞋包</li>
      <li class="liItem">美食酒水</li>
      <li class="liItem">个护清洁</li>
      <li class="liItem">母婴亲子</li>
      <li class="liItem">运动旅行</li>
      <li class="liItem">数码家电</li>
      <li class="liItem">全球特色</li>
    </ul>
    <div class="jiantou">
      <i class="iconfont icon-ai-arrow-down"></i>
    </div>
    
    
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from "better-scroll";
export default {
  mounted() {
    // 横向滑动的ul
    this.navScroll = new BScroll(".Scroll", {
      scrollX: true,
      click: true
    });
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.Scroll
  width 100%
  height 61px
  position fixed
  left 0
  top 120px
  overflow hidden
  background #fff
  .list
    position relative
    width 1700px
    height 60px
    background #fff
    display flex
    line-height 60px
    .liItem
      height 55px
      font-size 28px
      margin-left 30px
      margin-right 20px
      padding 0 10px
      &.active
        border-bottom 5px solid #f40
  .jiantou
    width 110px
    height 60px
    position fixed
    top 120px
    right 0
    background #fff
    line-height 60px
    text-align center
    .iconfont
      font-size 32px
  
    

</style>
