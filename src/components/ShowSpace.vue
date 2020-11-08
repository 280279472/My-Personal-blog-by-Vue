<template>
    <div class="show-space">
        <div class="space-box">
            <div class="show-main-box" v-if="isPc">
                <div class="show-item-box" @click="selectTab(item)" v-for="(item,index) in showList" :key="index">
                    <div class="icon-box"><i class="iconfont" :class="item.icon"></i></div>
                    <div class="item-title">{{item.name}}</div>
                    <div class="division"></div>
                    <div class="item-detail">{{item.contents}}</div>
                </div>
            </div>
            <div style="padding: 80px 10px 0;" v-if="!isPc">
                <div class="mobile-welcome-box">Welcome to My First WebSite.</div>
                <el-row :gutter="10">
                    <el-col :span="12" class="show-mobile-item-box" v-for="(item,index) in showList" :key="index">
                        <div class="border-box" @click="selectTab(item)">
                            <div class="icon-mobile-box"><i class="iconfont" :class="item.icon"></i></div>
                            <div class="item-title">{{item.name}}</div>
                            <div class="item-detail">{{item.contents}}</div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue,Component} from 'vue-property-decorator'
    import {Getter} from "vuex-class";

    @Component({
        name:'ShowSpace'
    })
    export default class ShowSpace extends Vue{
        @Getter('base/isPc') isPc!:boolean;

        showList:Array<any>=[
            {
                name: '技术',
                icon: 'icon-shandian',
                to: 'Power',
                contents:'我的技术更新，技术分享，做个有技术输出的人!'
            },
            {
                name: '随笔',
                icon: 'icon-chuangzuo',
                to: 'Note',
                contents:'最初的规划是写点随笔，后面打算写点生活感悟吧，或者是有趣的人生经历，记录并分享!'
            },
            {
                name: '心情',
                icon: 'icon-aixin',
                to: 'Mood',
                contents:'我的小站朋友圈，目前就分享了下我大学拍摄的夕阳照片，业余拍拍的，金华有时候晚上的夕阳真的还挺好看的，大学四年真的很快!'
            },
            {
                name: '魔法',
                icon: 'icon-faxian',
                to: 'Magic',
                contents:'最近刚构思的新版块，主要是想展示一下纯CSS特效，附带完整说明，和代码，和大家一起分享我的魔法秀时刻!'
            },
        ]

        selectTab (tab:any) {
            if(tab.to==='Magic'){
                this.$store.commit('base/SET_tipShow',true);
            }else{
                this.$router.push({name: tab.to})
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "../stylus/color.styl"

.show-space{
    .space-box{
        min-height 100vh
        width 100%
        background-image url("../assets/images/da05b93d4a7d59ed2c1c201e3fcbce6f7669b9c3.png")
        background-size cover
        background-attachment fixed
        .show-main-box{
            display flex
            align-items center
            justify-content center
            padding-top 25vh
            .show-item-box{
                width 300px
                height 400px
                background-color rgba(0,0,0,0.2)
                margin-right 20px
                border-radius 20px
                backdrop-filter blur(8px)
                cursor pointer
                overflow hidden
                &:last-child{
                    margin-right 0
                }
                &:hover{
                    backdrop-filter blur(0)
                    .icon-box{
                        transform translateY(-250px)
                    }
                    .item-title{
                        transform translateY(-270px)
                    }
                    .division{
                        transform translateY(-270px)
                        background-color rgba(255,255,255,0.8)
                        width 50%
                    }
                    .item-detail{
                        transform translateY(-250px)
                    }
                }
                .icon-box{
                    position relative
                    height 250px
                    width 100%
                    display flex
                    align-items center
                    justify-content center
                    transition .8s
                    .iconfont{
                        font-size 90px
                        color rgba(255,255,255,0.8)
                    }
                    .icon-faxian{
                        font-size 76px
                    }
                }
                .item-title{
                    text-align center
                    color rgba(255,255,255,0.8)
                    width 100%
                    font-size 24px
                    transition all .8s
                    margin-top 50px
                }
                .division{
                    width 60px
                    height 2px
                    background-color rgba(255,255,255,0.2)
                    margin 10px auto
                    transition all .8s
                }
                .item-detail{
                    color #ffffff
                    font-size 14px
                    padding 10px 20px
                    letter-spacing 3px
                    transform translateY(40px)
                    transition all 1s
                }
            }
        }
        .mobile-welcome-box{
            height 60px
            line-height 60px
            background: linear-gradient(90deg, #4FC1E9, #AC92EC, #A0D468, #FFCE54);
            background-size:1400% 300%;
            top:10px;
            left:10px;
            animation:mymove 6s ease infinite;
            color #ffffff
            text-align center
            letter-spacing 2px
            border-radius 8px
            margin-bottom 10px
        }
        .show-mobile-item-box{
            height 240px
            overflow hidden
            margin-bottom 10px
            .border-box{
                height 240px
                overflow hidden
                background-color rgba(255,255,255,0.2)
                backdrop-filter blur(5px)
                border-radius 8px
                .icon-mobile-box{
                    height 60px
                    display flex
                    align-items center
                    justify-content center
                    width 100%
                    .iconfont{
                        font-size 24px
                        color #ffffff
                    }
                    .icon-faxian{
                        font-size 20px
                    }
                }
                .item-title{
                    text-align center
                    width 100%
                    font-size 16px
                    color $color-white
                }
                .item-detail{
                    color $color-white
                    font-size 14px
                    margin-top 20px
                    padding 0 10px
                    letter-spacing 1px
                }
            }
        }
    }
}
    @keyframes mymove{
        0%{
            background-position 0 0
        }
        50%{
            background-position 100% 100%
        }
        100%{
            background-position 0 0
        }
    }
</style>