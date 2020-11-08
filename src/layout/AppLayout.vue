<template>
    <div class="app-layout-box">
        <router-view />
        <Footer></Footer>
        <transition name="slide-fade">
            <div class="to-top" @click="scrollToTarget(0)" v-show="showScrollToTop">
            <span
                    class="to-top-line"
                    v-for="(line, index) in lineData"
                    :key="index"
                    :style="{
                height: line.height,
                left: line.left,
                transform: line.transform
              }">
            </span>
            </div>
        </transition>
    </div>
</template>

<script lang="ts">
    import {Vue,Component} from "vue-property-decorator";
    import Footer from "@/components/Footer.vue";
    import scroll from "@/mixins/scroll";
    import {Getter, Mutation} from "vuex-class";

    @Component({
        name:'AppLayout',
        components:{Footer}
    })
    export default class AppLayout extends scroll{
        @Getter('article/articleMenu') articleMenu!:any;
        @Getter('article/articleMenuSource') articleMenuSource!:any;
        @Mutation('article/SET_articleMenuTag') setArticleMenuTag:any;

        showScrollToTop:boolean=false;
        lineData:Array<any> = [
            {
                height: '50%',
                left: '3px',
                transform: 'rotateZ(45deg)'
            },
            {
                height: '100%',
                top: '0px',
                transform: 'rotateZ(0deg)'
            },
            {
                height: '50%',
                left: '-3px',
                transform: 'rotateZ(-45deg)'
            }
        ];

        mounted(){
            window.addEventListener('scroll', this.scrollListener);
        }
        destroy(){
            window.removeEventListener('scroll', this.scrollListener,false);
        }

        //滚动监听
        scrollListener () {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop >= 60) {
                this.showScrollToTop = true
            } else {
                this.showScrollToTop = false
            }
            if (this.articleMenu) {
                for (let i = 0, len = this.articleMenuSource.length; i < len; ++i) {
                    let item:any = this.articleMenuSource[i];
                    let id:any = document.getElementById(item.id);
                    let top:number = id.getBoundingClientRect().top;
                    top += document.body.scrollTop || document.documentElement.scrollTop;
                    if (scrollTop <= top + 20) {
                        this.setArticleMenuTag(item.tag);
                        break
                    }
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
.app-layout-box{
    width 100%
    min-height 100%
    .to-top{
        position: fixed
        width: 24px
        height: 24px
        background-color: $color-main
        right: 10px
        bottom: 15px
        padding: 5px
        z-index: 1050
        cursor: pointer
        line-height: 0
        border-radius 4px
        display: flex
        flex-direction: row
        align-items: flex-start
        .to-top-line{
            position: relative
            width: 2px
            height: 100%
            margin-left: 4px
            background-color: $color-white
            &:first-child{
                margin-left 0
            }
        }
    }
}
.slide-fade-enter-active
    transition: all .3s ease
.slide-fade-leave-active
    transition: all .3s ease
.slide-fade-enter
.slide-fade-leave-to
    transform: translateY(20px)
    opacity: 0
</style>