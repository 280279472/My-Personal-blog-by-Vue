<template>
    <div v-if="$store.state.base.tipShow">
        <div class="common-dialog-box" :style="{width:width}">
            <div class="dialog-box">
                <div class="border-box">
                    <div class="border-top"></div>
                    <div class="border-bottom"></div>
                    <div class="border-left"></div>
                    <div class="border-right"></div>
                </div>
                <div class="dialog-content">
                    <div class="dialog-title">
                        <span>魔法时刻</span>
                        <i @click="closeModal" class="iconfont icon-guanbibeifen"></i>
                    </div>
                    <div class="dialog-section">
                        <div class="choose-box" @click="chooseItem('0')">
                            <div class="choose-title">
                                <div class="choose-circle"></div>
                                <transition name="fade">
                                    <i v-if="isChoose==='0'" class="iconfont icon-duigou"></i>
                                </transition>
                                <span>悬浮专区</span>
                            </div>
                            <div class="choose-detail">这个一般是鼠标hover动画，建议pc端浏览，所有的动画都有专门的思路说明和代码开源。</div>
                        </div>
                        <div class="choose-box" @click="chooseItem('1')">
                            <div class="choose-title">
                                <div class="choose-circle"></div>
                                <transition name="fade">
                                    <i v-if="isChoose==='1'" class="iconfont icon-duigou"></i>
                                </transition>
                                <span>动画专区</span>
                            </div>
                            <div class="choose-detail">这个一般是animation动画，进行查看详情即可看到特效，所有的动画都有专门的思路说明和代码开源。</div>
                        </div>
                    </div>
                    <div class="dialog-button">
                        <button @click="goRouter">扬帆起航</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="mask"></div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator'

    @Component({
        name:'myDialog'
    })
    export default class Dialog extends Vue{
        @Prop(String) width!:String;
        isChoose:String='0';

        chooseItem(value:String){
            this.isChoose=value;
        }
        goRouter(){
            this.closeModal();
            this.$router.push('/magic?type=' + this.isChoose);
        }
        closeModal(){
            this.$store.commit('base/SET_tipShow',false);
        }
    }
</script>

<style lang="stylus" scoped>
@import "../stylus/color.styl"

.common-dialog-box{
    position fixed
    left 50%
    top 20%
    transform translateX(-50%)
    min-height 50px
    z-index 11
    .dialog-box{
        position relative
        width 100%
        height 100%
        --border-color #ffffff
        .border-box{
            overflow hidden
            width 100%
            height 100%
            position absolute
            min-height 50px
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
            padding 8px
            border-radius 8px
            margin-bottom -50px
            .dialog-title{
                font-size 24px
                font-weight bold
                line-height 60px
                padding-bottom 10px
                display flex
                align-items center
                justify-content space-between
                .icon-guanbibeifen{
                    font-size 24px
                    cursor pointer
                    margin-right 16px
                }
                @media (max-width 768px){
                    font-size 16px
                    line-height 50px
                    .icon-guanbibeifen{
                        font-size 20px
                        margin-right 8px
                    }
                }
            }
            .dialog-section{
                background-color #ebedee
                height 1px
                overflow hidden
                border-radius 8px
                transition height .5s
                animation toHeight .5s 1.2s forwards
                display flex
                padding 0 20px
                justify-content space-around
                flex-wrap wrap
                align-items center
                @media (max-width 768px){
                    padding 0 8px
                    animation toSmallHeight .5s 1.2s forwards
                }
                .choose-box{
                    background-color #fff7ed
                    width 45%
                    height 100%
                    border-radius 8px
                    padding 20px
                    cursor pointer
                    @media (max-width 768px){
                        padding 8px
                        width 90%
                        height 120px
                    }
                    .choose-title{
                        font-size 16px
                        color $color-black
                        display flex
                        align-items center
                        justify-content space-between
                        border-bottom 1px solid #E4E7ED
                        padding-bottom 10px
                        position relative
                        .choose-circle{
                            width 18px
                            height 18px
                            border-radius 50%
                            border 2px solid $color-gary
                        }
                        .icon-duigou{
                            position absolute
                            font-size 22px
                            top -3px
                            left -1px
                            &::before{
                                color transparent
                                background linear-gradient($color-main 0 100%) left / 100% 100% no-repeat
                                background-clip text
                                transition all 1s ease-out
                            }
                        }
                    }
                    .choose-detail{
                        font-size 14px
                        color $color-black
                        margin-top 16px
                        @media (max-width 768px){
                            font-size 12px
                        }
                    }
                }
            }
            .dialog-button{
                height 76px
                width 100%
                display flex
                align-content center
                justify-content center
                padding-top 10px
                button{
                    width 120px
                    height 50px
                    display block
                    margin-top 10px
                    color $color-white
                    background-color #4ec0e9
                    border-radius 8px
                    &:first-child{
                        margin-right 20px
                        background-color #ffce52
                    }
                }
            }
        }
    }
}
.mask{
    width 100vw
    height 100vh
    backdrop-filter blur(3px)
    background rgba(0,0,0,0.6)
    position fixed
    left 0
    top 0
    z-index 10
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
    @keyframes toHeight{
        to{
            height 250px
            padding 20px
        }
    }
    @keyframes toSmallHeight{
        to{
            height 280px
            padding 8px
        }
    }
    .fade-enter-active, .fade-leave-active {
        .icon-duigou::bofore{
            background linear-gradient($color-main 0 100%) left / 100% 100% no-repeat
        }
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        .icon-duigou::bofore{
            background linear-gradient($color-main 0 100%) left / 0 100% no-repeat
        }
    }
</style>