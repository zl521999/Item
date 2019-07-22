<template>
  <div class="pictureContainer">
    <div class="header">
      <div class="left">
        <i class="iconfont icon-shouye" @click="goto('/home')"></i>
      </div>
      <div class="content">
        <span class="find">发现</span>
        <span class="choce">甄选家</span>
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
.pictureContainer
  bottom-border-1px(#f40)
  width 100%
  height 100px
  background #fafafa
  position fixed
  z-index 20
  margin-top -20px
  padding-top 20px
  .header
    height 100px
    margin 0 20px
    display flex
    line-height 100px
    .left
      width 48px
      height 100px
      .iconfont
        font-size 52px
    .content
      font-size 36px
      padding-right 0px
      padding-left 200px
      .find
        color #b4282d
        font-size 38px
        font-weight bold
      .choce
        font-size 28px
        color #999
        padding-left 30px
    .right
      padding-left 130px
      .iconfont
        font-size 52px
      .icon-gouwu1
        padding-left 20px
  .Scroll
    width 100%
    height 61px
    overflow hidden
    background #fafafa
    position fixed
    .list
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
