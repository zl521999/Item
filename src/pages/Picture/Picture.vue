<template>
  <div id="pic">
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
.Scroll
  width 100%
  height 61px
  position fixed
  left 0
  top 100px
  overflow hidden
  background #fafafa
  .list
    position relative
    width 1200px
    height 60px
    background #fafafa
    display flex
    line-height 60px
    .liItem
      height 55px
      font-size 28px
      margin-left 30px
      margin-right 20px
      padding 0 10px
      color #7f7f7f
      &.active
        border-bottom 5px solid #f40
</style>
