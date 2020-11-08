<template>
  <div class="home">
    <div class="content">
      <div class="flag">技术<span class="describe">，是对热爱的执著</span></div>
      <div class="flag">随笔<span class="describe">，是对点滴的记录</span></div>
      <div class="flag" :style="{marginBottom:isPc?'100px':'60px'}">心情<span class="describe">，是对生活的标记</span></div>
      <button class="go" @click="$router.push('/power')">立即探索<i class="iconfont icon-you"></i></button>
    </div>
    <div class="bottom-scroll-box">
      <i @click="goBottom" class="iconfont icon-xiangxiazhankai"></i>
      <div @click="goBottom" class="arrow-bottom-span">向下滑动查看更多</div>
    </div>
    <MyDialog :width="isPc?'700px':'80vw'" />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import {Vue,Component} from 'vue-property-decorator'
import {Getter, State} from "vuex-class";
import {ScreenInterface} from "@/interface";
import scroll from "@/mixins/scroll";
import MyDialog from "@/components/MyDialog.vue";


@Component({
  name:'Home',    //组件名称
  components:{MyDialog}
})
export default class Home extends scroll{
  @State(state=>state.base.isPc) isPc!:boolean;
  @Getter('base/screen') screen!:ScreenInterface;

  tipShow:Boolean=false;

  goBottom(){
    this.scrollToTarget(screen.height);
  }
}
</script>

<style lang="stylus" scoped>
  @import "../stylus/color.styl"
  .home{
    width 100%
    height 100%
    position relative
  }
  .content
      position absolute
      top 55%
      left 50%
      transform translate(-50%,-50%)
      text-align center
      .flag{
          color #ffffff
          font-size 18px
          margin-bottom 8px
          @media (max-width 768px){
            font-size 16px
            margin-bottom 6px
          }
          .describe{
              font-size 16px
              @media (max-width 768px){
                font-size 14px
              }
          }
      }
      .go
          background-color transparent
          color $color-main
          border 1px solid $color-main
          border-radius 4px
          padding 15px 20px
          font-size 20px
          animation showButton .7s
          position relative
          overflow hidden
          @media (max-width 768px){
            padding 10px 14px
            font-size 16px
          }
          &:hover::after
              transition: transform 0.5s ease-in-out;
              transform: translate3d(670%, 0, 0) rotate(35deg);
          &:after
              content: "";
              z-index: -1;
              position: absolute;
              background-color white;
              opacity 0.3
              /* 核心代码：位置一步步调整 */
              top: -50%;
              left: 0;
              bottom: -50%;
              width: 1.25em;
              transform: translate3d(-200%, 0, 0) rotate(35deg);
      .icon-you
          margin-left 8px
          @media (max-width 768px){
            margin-left 4px
          }


  .bottom-scroll-box{
    font-size 36px
    color #5d5d5d
    display block
    position absolute
    bottom 10vh
    left 50%
    transform translateX(-50%)
    text-align center
    .icon-xiangxiazhankai{
      font-size 36px
      color #5d5d5d
      display block
      cursor pointer
      @media (max-width 768px){
        margin-top 20px
        font-size 26px
      }
    }
    .arrow-bottom-span{
      color #5d5d5d
      text-align center
      letter-spacing 2px
      font-size 16px
      margin-top 6px
      cursor pointer
      @media (max-width 768px){
        font-size 12px
        margin-top 4px
      }
    }
  }
    @keyframes showButton{
        from{
            transform scale(0)
            opacity 0
        }
        to{
            transform scale(1)
            opacity 1
        }
    }
  @keyframes jelly {
      0%,
      100% {
        transform: scale(1, 1);
      }

      33% {
        transform: scale(0.9, 1.1);
      }

      66% {
        transform: scale(1.1, 0.9);
      }
  }
</style>