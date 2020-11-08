<template>
    <div class="show-magic-box">
        <slot style="min-height: 100vh;" name="magic"></slot>
        <div class="reason-box">{{thinking}}</div>
        <div class="division"></div>
        <div class="code-box">
            <div class="html-box">
                <div v-highlight v-html="htmlContents"></div>
            </div>
            <div class="css-box">
                <div v-highlight v-html="cssContents"></div>
            </div>
            <div class="js-box"></div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator'

    @Component({
        name: "ShowMagic",
    })
    export default class showMagic extends Vue{
        @Prop(Object) magic!:any;
        @Prop(String) thinking!:String;
        @Prop(String) htmlContents!:String;
        @Prop(String) cssContents!:String;
    }
</script>

<style lang="stylus" scoped>
.show-magic-box{
    width 100%
    height 100%
    .reason-box{
        width 800px
        background-color #ffffff
        margin 0 auto
        border-radius 8px
        padding 20px
        @media (max-width 768px){
            width 100%
            padding 10px
        }
    }
    .division{
        background-color #333642
        width 100%
        height 20px
    }
    .code-box{
        display flex
        background-color #F2F6FC
        height 100%
        @media (max-width 768px){
            flex-direction column
        }
        .html-box,.css-box,.js-box{
            width calc(100vw / 3)
            height 400px
            overflow scroll
        }
        .division-vertical{
            background-color #E4E7ED
            width 16px
            height 400px
            @media (max-width 768px){
                display none
            }
        }
    }
}
>>>code{
    background-color #F2F6FC
}
</style>