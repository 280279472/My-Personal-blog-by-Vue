<template>
    <el-drawer
            title="目录"
            :visible.sync="mobileNav"
            direction="ttb"
            size="100%"
            :before-close="handleClose">
        <ArticleMenu style="margin-left: 30px;" :menu="articleMenu" :start="0" />
        <i class="iconfont icon-GitHub" @click="openUrl('https://github.com/Jack-Star-T/Vue3.0-typescript')"></i>
        <div class="triangle"></div>
    </el-drawer>
</template>

<script lang="ts">
    import {Vue,Component} from "vue-property-decorator";
    import {Getter, Mutation} from "vuex-class";
    import ArticleMenu from "@/components/ArticleMenu.vue";

    @Component({
        name:'MobileNav',
        components:{ArticleMenu}
    })
    export default class MobileNav extends Vue{

        @Getter('base/mobileNav') mobileNav!:boolean;
        @Getter('article/articleMenu') articleMenu!:any;
        @Mutation('base/SET_mobileNav') SET_mobileNav:any;

        handleClose(){
            this.SET_mobileNav(false);
        }
        openUrl(url:string){
            window.open(url,'_blank');
        }
    }
</script>

<style lang="stylus" scoped>
    @import "../stylus/color.styl"

    >>>.el-drawer__open .el-drawer.ttb{
        background-color $color-background
        position relative
    }
    >>>.el-drawer__header>:first-child{
        color $color-normal
        font-weight bold
        font-size 16px
    }
    .icon-GitHub{
        position absolute
        right 18px
        bottom 18px
        color $color-white
        font-size 28px
        z-index 10
    }
    .triangle {
        width: 0;
        height: 0;
        border-width: 50px;
        border-style: solid;
        border-color: transparent $color-main $color-main transparent;
        position absolute
        right 0
        bottom 0
    }
</style>