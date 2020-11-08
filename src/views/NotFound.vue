<template>
    <div class="not-found">
        <img src="../assets/images/noData.png" class="no-img" alt="">
        <p class="tip">页面丢失啦，目前找不到页面 ~</p>
        <p class="back" @click="$router.push('/home')">返回首页</p>
    </div>
</template>

<script lang="ts">
import {Vue,Component} from "vue-property-decorator";

@Component({
    name:'NotFound'
})
export default class NotFound extends Vue{

}
</script>

<style lang="stylus" scoped>
    @import "../stylus/color.styl"

    .not-found{
        position absolute
        left 50%
        top 36%
        transform translate(-50%,-50%)
        display flex
        align-items center
        justify-content flex-start
        flex-direction column
        .no-img{
            width 240px
            height 240px
            object-fit cover
        }
        .tip{
            margin-top 20px
            color $color-light-gary
            font-size 18px
            white-space nowrap
        }
        .back{
            color $color-normal
            margin-top 10px
            cursor pointer
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
            position relative
            &:before{
                content:''
                position absolute
                left 0
                bottom -4px
                width 100%
                height 1px
                background-color $color-black
                visibility: hidden
                transform: scaleX(0)
                transition-duration: .2s
                transition-timing-function: ease
            }
            &:hover::before{
                visibility: visible
                transform: scaleX(1)
                transition-duration: .2s
                transition-timing-function: ease
            }
        }
    }
</style>