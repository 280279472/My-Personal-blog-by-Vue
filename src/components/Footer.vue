<template>
    <div class="footer">
        本站由 @凉梦 创建 - © 2020. <a href="http://www.beian.miit.gov.cn" class="href" target="_blank">浙ICP备20004265号</a>
    </div>
</template>

<script lang="ts">
    import {Vue} from 'vue-property-decorator'

    export default class Footer extends Vue{

    }
</script>

<style lang="stylus" scoped>
    @import "../stylus/color.styl"

    .footer{
        background-color $color-black
        height 60px
        line-height 60px
        color $color-white
        font-size 14px
        text-align center
        .href{
            color $color-white
            &:visited{
                color $color-white
            }
        }
        @media (max-width 768px){
            height 40px
            font-size 12px
            line-height 40px
        }
    }
</style>