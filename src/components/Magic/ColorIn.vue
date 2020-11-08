<template>
    <div class="example-color-in-box">
        <i class="iconfont icon-faxian"></i>
    </div>
</template>

<script>
    export default {
        name: "ColorIn"
    }
</script>

<style lang="stylus" scoped>
    @import "../../stylus/color.styl"

.example-color-in-box{
    width 100%
    height 100%
    display flex
    align-items center
    justify-content center
    &:hover{
        .icon-faxian::before{
            background linear-gradient($color-main 0 100%) bottom / 100% 100% no-repeat
            background-clip text
        }
    }
    .icon-faxian{
        font-size 80px
        &::before{
            -webkit-text-stroke 1px $color-main
            background linear-gradient($color-main 0 100%) bottom / 100% 0 no-repeat
            color transparent
            background-clip text
            transition all 1s ease-out
        }
    }
}
</style>