<template>
<div class="line-in-box">
    <div class="dialog-box">
        <div class="border-box">
            <div class="border-top"></div>
            <div class="border-bottom"></div>
            <div class="border-left"></div>
            <div class="border-right"></div>
        </div>
        <div class="dialog-content">

        </div>
    </div>
</div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator'

    @Component({
        name:'lineIn'
    })
    export default class Dialog extends Vue{

    }
</script>

<style lang="stylus" scoped>
.line-in-box{
    width 100%
    height 100%
    display flex
    align-items center
    justify-content center
    .dialog-box{
        position relative
        width 50%
        height 50%
        --border-color #ffffff
        .border-box{
            overflow hidden
            width 100%
            height 100%
            position relative
            .border-top{
                width 100%
                height 2px
                background-color var(--border-color)
                position absolute
                left 0
                top 0
                transform translateX(-100%)
                animation border-top-move 0.8s cubic-bezier(0.645, 0.045, 0.355, 1) forwards
            }
            .border-bottom{
                width 100%
                height 2px
                background-color var(--border-color)
                position absolute
                right 0
                bottom 0
                transform translateX(100%)
                animation border-bottom-move 0.8s cubic-bezier(0.645, 0.045, 0.355, 1) forwards
            }
            .border-left{
                width 2px
                height 100%
                background-color var(--border-color)
                position absolute
                left 0
                top 0
                transform translateY(-100%)
                animation border-left-move 0.8s cubic-bezier(0.645, 0.045, 0.355, 1) forwards
            }
            .border-right{
                width 2px
                height 100%
                background-color var(--border-color)
                position absolute
                right 0
                bottom 0
                transform translateY(100%)
                animation border-right-move 0.8s cubic-bezier(0.645, 0.045, 0.355, 1) forwards
            }
        }
        .dialog-content{
            width 100%
            height 100%
            background-color #ffffff
            transform scale(0.6)
            opacity 0
            animation content-show .8s  .8s forwards
            position absolute
            left 0
            top 0
        }
    }
}
@keyframes border-top-move{
    50%{
        transform translateX(0)
    }
    100%{
        transform translateX(100%)
    }
}
@keyframes border-bottom-move{
    50%{
        transform translateX(0)
    }
    100%{
        transform translateX(-100%)
    }
}
@keyframes border-left-move{
    50%{
        transform translateY(0)
    }
    100%{
        transform translateY(100%)
    }
}
@keyframes border-right-move{
    50%{
        transform translateY(0)
    }
    100%{
        transform translateY(-100%)
    }
}
@keyframes content-show{
    50%{
        opacity 1
        transform scale(1.05)
    }
    100%{
        opacity 1
        transform scale(1)
    }
}
</style>