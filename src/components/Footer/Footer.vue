<template>
   <footer class="footer_guide border-1px">
    <span class="guide_item" :class="{on: $route.path==='/home'}" @click="goTo('/home')"><!-- 什么时候用对象语法: 类名确定, 但不确定有没有 -->
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </span>
    <span class="guide_item" :class="{on: $route.path==='/sort'}" @click="goTo('/sort')">
      <span class="item_icon">
        <i class="iconfont icon-chuangtougui"></i>
      </span>
      <span>分类</span>
    </span>
    <span class="guide_item" :class="{on: $route.path==='/picture'}" @click="goTo('/picture')">
      <span class="item_icon">
        <i class="iconfont icon-tupian"></i>
      </span>
      <span>识物</span>
    </span>
    <span class="guide_item" :class="{on: $route.path==='/shop'}" @click="goTo('/shop')">
      <span class="item_icon">
        <i class="iconfont icon-gouwu1"></i>
      </span>
      <span>购物</span>
    </span>

    <span class="guide_item" :class="{on: $route.path==='/personal'}" @click="goTo('/personal')">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>个人</span>
    </span>
  </footer>

</template>

<script type="text/ecmascript-6">
   export default {

    name:"Footer",
    methods: {
      goTo(path){
        //编程式路由导航
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import "../../common/stylus/mixins.styl"
    .footer_guide  //footer
      top-border-1px(#f40)
      position fixed
      z-index 100
      left 0
      right 0
      bottom 0
      background-color #fff
      width 100%
      height 100px
      display flex
      .guide_item
        display flex
        flex 1
        text-align center
        flex-direction column
        align-items center
        margin 10px
        color #02a774
        &.on
          color #f40
        span
          font-size 24px
          margin-top 4px
          margin-bottom 4px
          .iconfont
            font-size 44px
            

</style>

