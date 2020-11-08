<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script lang="ts">
  import {Vue,Component} from 'vue-property-decorator'
  import {Mutation} from "vuex-class";
  import {Getter} from "vuex-class";
  import {ScreenInterface} from "@/interface";

  @Component({
    name:'app',
  })
  export default class App extends Vue{
    @Getter('base/screen') screen!:ScreenInterface;
    @Getter('base/isPc') isPc!:boolean;

    mounted(){
      this.updateScreen();
      window.addEventListener('resize', this.updateScreen);
    }
    destroy(){
      window.removeEventListener('resize', this.updateScreen,false);
    }


    @Mutation('base/SET_screen') setScreen:any;
    @Mutation('base/SET_isPc') setIsPc:any;

    //更新是否pc，以及屏幕大小的全局变量
    updateScreen () {
      this.setScreen({
        width:window.innerWidth,
        height:window.innerHeight,
      });
      if (window.innerWidth <= 768) {
        this.setIsPc(false);
      }else{
        this.setIsPc(true);
      }
    }
/*    //防抖性能优化
    throttle(){
      if(this.appTimer){
        clearInterval(this.appTimer);
        let vm=this;
        vm.appTimer=setTimeout(()=>{
          vm.updateScreen();
        },50);
      }else{
        let vm=this;
        vm.appTimer=setTimeout(()=>{
          vm.updateScreen();
        },50)
      }
    }*/
  }



</script>

<style lang="stylus">
  @import 'stylus/reset.styl'
  @import "stylus/color.styl"

  #app {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width 100%
    min-height 100%
  }
  #nprogress .bar {
    background:$color-main !important; //自定义颜色
  }

  >>>.__view .__rail-is-vertical{
    z-index 20!important
  }
</style>
