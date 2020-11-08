<template>
  <div id="about">
    <div class="about-warp">
      <div class="about-title">关于我</div>
      <div class="about-introduce">欢迎拜访我的博客空间 ~</div>
      <MarkdownPreview :contents="contents"></MarkdownPreview>
    </div>
  </div>
</template>

<script lang="ts">
  import {Vue,Component} from 'vue-property-decorator'
  import MarkdownPreview from "@/components/MarkdownPreview.vue";

  @Component({
    name:'Power',
    components:{MarkdownPreview}
  })
  export default class About extends Vue{
    contents:any='<h2 class="my-blog-head" id="my-blog-head56">关于我</h2><h3 class="my-blog-head" id="my-blog-head57">技术栈</h3><ul>\n' +
            '<li><h4 class="my-blog-head" id="my-blog-head58">vue/nuxt</h4></li>\n' +
            '<li><h4 class="my-blog-head" id="my-blog-head59">html/css</h4></li>\n' +
            '<li><h4 class="my-blog-head" id="my-blog-head60">javascript/es6</h4></li>\n' +
            '<li><h4 class="my-blog-head" id="my-blog-head61">echarts</h4></li>\n' +
            '<li><h4 class="my-blog-head" id="my-blog-head62">typescript（了解，最近一直在学）</h4></li>\n' +
            '</ul>\n' +
            '<h3 class="my-blog-head" id="my-blog-head63">兴趣爱好</h3><ul>\n' +
            '<li><h4 class="my-blog-head" id="my-blog-head64">了解新技术</h4></li>\n' +
            '<li><h4 class="my-blog-head" id="my-blog-head65">写博客，做技术分享</h4></li>\n' +
            '<li><h4 class="my-blog-head" id="my-blog-head66">打网球</h4></li>\n' +
            '<li><h4 class="my-blog-head" id="my-blog-head67">听歌，唱歌</h4></li>\n' +
            '<li><h4 class="my-blog-head" id="my-blog-head68">玩游戏，看动漫</h4></li>\n' +
            '</ul>\n' +
            '<h3 class="my-blog-head" id="my-blog-head69">联系方式</h3><ul>\n' +
            '<li><h4 class="my-blog-head" id="my-blog-head70">Github：<a href="https://github.com/Jack-Star-T">https://github.com/Jack-Star-T</a></h4></li>\n' +
            '<li><h4 class="my-blog-head" id="my-blog-head71">掘金地址：<a href="https://juejin.im/user/5d4c28015188253b1e3de80d">https://juejin.im/user/5d4c28015188253b1e3de80d</a></h4></li>\n' +
            '<li><h4 class="my-blog-head" id="my-blog-head72">简书地址：<a href="https://www.jianshu.com/u/9985e2c26c3a">https://www.jianshu.com/u/9985e2c26c3a</a></h4></li>\n' +
            '</ul>\n' +
            '<h2 class="my-blog-head" id="my-blog-head73">关于博客</h2><blockquote>\n' +
            '<h5 class="my-blog-head" id="my-blog-head74">这个博客是由最新的Vue-cli4.1.2 + typescript写的，这个博客网站主要参考了<a href="http://codebear.cn/home">codebear</a>的个人博客，另外加上了我自己的想法，主要是技术分享，发一些自己想发的动态，记录生活。</h5></blockquote>\n' +
            '<h3 class="my-blog-head" id="my-blog-head75">开发时间</h3><ul>\n' +
            '<li><h4 class="my-blog-head" id="my-blog-head76">从2020年的2月开始开发</h4></li>\n' +
            '<li><h4 class="my-blog-head" id="my-blog-head77">后面还会陆续更新维护，以及发布新的功能</h4></li>\n' +
            '</ul>\n' +
            '<h3 class="my-blog-head" id="my-blog-head78">后续计划上线的功能模块</h3><ul>\n' +
            '<li><h4 class="my-blog-head" id="my-blog-head79">开放登录/注册功能，社区化</h4></li>\n' +
            '<li><h4 class="my-blog-head" id="my-blog-head80">开放文章浏览量，点赞功能</h4></li>\n' +
            '<li><h4 class="my-blog-head" id="my-blog-head81">开放用户关注，个人主页</h4></li>\n' +
            '<li><h4 class="my-blog-head" id="my-blog-head82">开放用户个人相册功能，可以上传删除照片</h4></li>\n' +
            '<li><h4 class="my-blog-head" id="my-blog-head83">开放消息中心，传递互动消息</h4></li>\n' +
            '</ul>';
  }
</script>


<style lang="stylus"  scoped>
  @import "../stylus/color.styl"

  #about{
    width 100%
    padding: 30px 20px
    .about-warp{
      width 100%
      max-width 960px
      margin 0 auto
      padding 30px
      position: relative
      animation: show .8s
      background-color: $color-white
      box-shadow: 0 0 5px 0 rgba(38, 42, 48, .1)
      @media (max-width: 768px){
        padding 30px 15px
      }
      .about-title{
        text-align center
        font-size: 26px
        padding-top 10px
        font-weight bold
        color $color-title
        @media (max-width 768px){
          font-size: 22px
          font-weight bold
        }
      }
      .about-introduce{
        text-align center
        font-size: 16px
        padding-top 10px
        font-weight bold
        color $color-normal
        @media (max-width 768px){
          font-size: 14px
          font-weight bold
        }
      }
    }
  }


  @keyframes show {
    from {
      margin-top: -10px;
    opacity: 0;
    }
    to {
      margin-top: 0;
      opacity: 1;
    }
  }
</style>