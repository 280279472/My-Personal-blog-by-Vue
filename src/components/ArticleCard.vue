<template>
    <div class="article-card">
        <div class="img-box">
            <img src="../assets/images/article.jpg" class="img" alt="" />
            <div class="title-box"><span class="title" @click="$router.push('/powerStar?id=' + article.url)">{{article.title}}</span></div>
            <div class="info"><i class="iconfont icon-rili"></i>发表于{{article.date}}</div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue,Component,Prop} from 'vue-property-decorator'

    @Component({
        name:'ArticleCard'
    })
    export default class ArticleCard extends Vue{
        @Prop(Object) article!:Object;
    }

</script>

<style lang="stylus" scoped>
    @import "../stylus/color.styl"

    .article-card{
        width 100%
        max-width 960px
        box-shadow: 0 0 5px 0 rgba(38, 42, 48, .1)
        margin-bottom 20px
        padding: 20px
        background-color $color-white
        @media (max-width: 768px){
            padding: 10px
            line-height: 1.2
            animation: show .8s
            position relative
        }
        .img-box{
            overflow hidden
            max-width 920px
            width 100%
            position relative
            &:hover{
                .img{
                    transform scale(1.2)
                    transition all .5s
                }
            }
            .img{
                width 100%
                height 100%
                object-fit cover
                transform scale(1)
                transition all .5s
                &:hover{
                    transform scale(1.2)
                    transition all .5s
                }
            }
            .title-box{
                position absolute
                font-size 24px
                color $color-white
                font-weight: bold
                display: flex
                align-items: center
                justify-content: center
                left 50%
                top 50%
                cursor pointer
                transform translate(-50%,-50%)
                @media (max-width: 768px){
                    font-size: 18px
                }
                .title{
                    position relative
                    white-space nowrap
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
                    &:after{
                        content: ""
                        position: absolute
                        bottom: -3px
                        left: 0
                        width: 100%
                        height: 2px
                        background-color: $color-white
                        visibility: hidden
                        transform: scaleX(0)
                        transition-duration: .2s
                        transition-timing-function: ease
                    }
                    &:hover::after{
                        visibility: visible
                        transform: scaleX(1)
                        transition-duration: .2s
                        transition-timing-function: ease
                    }
                }
            }
            .info{
                position absolute
                left 50%
                transform translateX(-50%)
                top 70%
                font-size 16px
                color $color-white
                margin 20px 0
                text-align center
                white-space nowrap
                @media (max-width 768px){
                    font-size 14px
                }
                .icon-rili{
                    margin-right 6px
                    font-size 14px
                    @media (max-width 768px){
                        font-size: 12px
                    }
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
