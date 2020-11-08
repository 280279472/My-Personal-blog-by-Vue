<template>
    <ul class="article-menu">
        <li v-for="item in menu" :key="item.tag">
            <span @click="toMenu(item)" :title="item.title" :style="{width:screen.width>1024?'200px':screen.width-90+'px'}" :class="{'active': is(item) || isParent(item)}">{{item.tag}}{{ item.title }}</span>
            <article-menu :menu="item.children"  v-show="isParent(item)" />
            <!-- <article-menu :menu="item.children" /> -->
        </li>
    </ul>
</template>

<script lang="ts">
    import {Component,Prop} from 'vue-property-decorator'
    import {Getter, Mutation} from 'vuex-class'
    import scroll from "@/mixins/scroll";
    import {ScreenInterface} from "@/interface";


    @Component({
        name:'ArticleMenu',
    })
    export default class ArticleMenu extends scroll{

        @Prop() menu!:any;

        @Getter('article/articleMenuTag') articleMenuTag!:any;
        @Getter('base/screen') screen!:ScreenInterface;
        @Mutation('base/SET_mobileNav') SET_mobileNav:any;

        toMenu(item:any) {
            let id:any=document.getElementById(item.id);
            let top = id.getBoundingClientRect().top;
            top += document.body.scrollTop || document.documentElement.scrollTop;
            if(screen.width>1024){
                this.scrollToTarget(top-100);
            }else{
                this.SET_mobileNav(false);
                this.scrollToTarget(top-70);
            }
        }
        is (item:any) {
            return item.tag === this.articleMenuTag;
        }
        isParent (item:any) {
            return this.articleMenuTag.indexOf(item.tag) === 0
        }
    }
</script>

<style lang="stylus" scoped>
    @import "../stylus/color.styl"

.article-menu{
    width: 100%
    line-height: 2
    font-weight: bold
    font-size: 14px
    color: #999
    > li{
        margin-left: 10px
        > span{
            display block
            overflow: hidden;
            white-space nowrap
            text-overflow ellipsis
            cursor: pointer
            transition: all .3s
            &.active{
                color $color-main
            }
            &:hover{
                color $color-main
            }
        }
    }
}
</style>