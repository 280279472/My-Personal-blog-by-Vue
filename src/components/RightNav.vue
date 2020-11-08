<template>
    <div class="animated bounceInDown right-nav" v-if="articleMenu">
        <div class="nav-title">
            <span>目录</span>
            <i @click="openUrl('https://github.com/Jack-Star-T/Vue3.0-typescript')" class="iconfont icon-GitHub"></i>
        </div>
        <div class="padding-box">
            <ArticleMenu :menu="articleMenu" :start="0" />
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue,Component} from 'vue-property-decorator'
    import ArticleMenu from "@/components/ArticleMenu.vue";
    import {Getter} from "vuex-class";

    @Component({
        name:'RightNav',
        components:{ArticleMenu}
    })
    export default class RightNav extends Vue{

        @Getter('article/articleMenu') articleMenu!:any;

        openUrl(url:string){
            window.open(url,'_blank');
        }
    }
</script>

<style lang="stylus" scoped>
    @import "../stylus/color.styl"

    .right-nav{
        width 240px
        position: fixed;
        top: 290px;
        right: 50%;
        animation: show .8s
        padding-bottom 20px
        transform translate(340px + 50%)
        background-color: $color-white
        border-radius 6px
        .nav-title{
            height 40px
            line-height 40px
            font-size 14px
            color $color-normal
            border-bottom 1px solid #e4e4e4
            padding-left 20px
            font-weight bold
            display flex
            align-items center
            justify-content space-between
            .icon-GitHub{
                padding-right 20px
                color $color-main
                font-size 16px
                cursor pointer
            }
        }
        .padding-box{
            padding 10px 10px 0 20px
        }
    }

    @keyframes show {
        from {
            margin-top: -30px;
            opacity: 0;
        }
        to {
            margin-top: 0;
            opacity: 1;
        }
    }
</style>