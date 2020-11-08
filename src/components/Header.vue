<template>
    <div id="m-header" :style="{backgroundColor:isOpacity?'transparent':'#fef0f0'}">
        <div class="header-wrap" :style="{height: isPc ? '90px' : '60px'}">
            <div class="logo-box">
                <img src="../assets/images/logo.png" class="logo-img" @click="toHomeFromLogo" alt="" />
                <div class="header-logo" @click="toHomeFromLogo"
                     :style="{
                    'justify-content': isPc ? 'space-between' : 'center',
                    'padding': isPc ? '25px 10px' : '0px 6px'
                }">
                    <p class="line" v-if="isPc"></p>
                    <p class="blog-name">{{blogName}}</p>
                    <p class="line" v-if="isPc"></p>
                </div>
            </div>
            <HeaderTab :is-opacity="isOpacity" v-if="isPc" :tabs="tabs" @tab-click="selectTab" />
            <div class="toggle" :style="{backgroundColor:isOpacity?'transparent':'#fef0f0'}" v-if="!isPc" @click="toggle">
                <span
                    class="toggle-line"
                    v-for="(line, index) in toggleLineData"
                    :key="index"
                    :style="{
                    width: line.width,
                    top: line.top,
                    transform: line.transform,
                    opacity: line.opacity,
                    transition: 'all .3s'
                  }">
                </span>
            </div>
        </div>
        <el-collapse-transition>
            <div class="mobile-tab-wrap" v-show="!isPc&&showMobileTabs">
                <div class="tab" v-for="(tab, index) in tabs" :key="index" @click="selectTab(tab)">
                    <i class="iconfont" :class="tab.icon"></i>
                    <span>{{ tab.name }}</span>
                </div>
            </div>
        </el-collapse-transition>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator'
    import HeaderTab from '@/components/HeaderTab.vue'
    import {State,Getter} from "vuex-class";

    @Component({
        components:{HeaderTab}
    })
    export default class Header extends Vue{
        @Prop(Boolean) isOpacity!: Boolean;

        @State(state=>state.base.blogName) blogName!:string;
        @Getter('base/isPc') isPc!:boolean;

        tabs: Array<any> = [
            {
                name: '首页',
                icon: 'icon-shouye',
                to: 'Home'
            },
            {
                name: '技术',
                icon: 'icon-shandian',
                to: 'Power'
            },
            {
                name: '随笔',
                icon: 'icon-chuangzuo',
                to: 'Note'
            },
            {
                name: '心情',
                icon: 'icon-aixin',
                to: 'Mood'
            },
            {
                name: '魔法',
                icon: 'icon-faxian',
                to: 'Magic'
            },
            {
                name: '关于',
                icon: 'icon-tanhao',
                to: 'About'
            },
        ];
        lineStyle: any = {
            normalLineData: [
                {
                    width: '100%',
                    top: '0px',
                    transform: 'rotateZ(0deg)',
                    opacity: '1'
                },
                {
                    width: '100%',
                    top: '0px',
                    transform: 'rotateZ(0deg)',
                    opacity: '1'
                },
                {
                    width: '100%',
                    top: '0px',
                    transform: 'rotateZ(0deg)',
                    opacity: '1'
                }
            ],
            closeLineData: [
                {
                    width: '100%',
                    top: '6px',
                    transform: 'rotateZ(-45deg)',
                    opacity: '1'
                },
                {
                    width: '100%',
                    top: '0px',
                    transform: 'rotateZ(0deg)',
                    opacity: '0'
                },
                {
                    width: '100%',
                    top: '-6px',
                    transform: 'rotateZ(45deg)',
                    opacity: '1'
                }
            ]
        };
        toggleLineData : Array<any> = [];
        showMobileTabs: boolean = false;

        mounted() {
            this.toggleLineData = this.lineStyle.normalLineData
        }

        toHomeFromLogo () {
            window.location.href = `${window.location.origin}`
        }
        toggle () {
            this.showMobileTabs = !this.showMobileTabs;
            this.toggleLineData = this.showMobileTabs ? this.lineStyle.closeLineData : this.lineStyle.normalLineData;
        }
        selectTab (tab:any) {
            this.toggle();
            this.$router.push({name: tab.to})
        }
    }
</script>

<style lang="stylus" scoped>
    @import "../stylus/color.styl"

    #m-header
        position: fixed
        left 0
        top 0
        width: 100%
        z-index 10
        transition all .8s
        .header-wrap
            position: relative
            max-width: 1000px
            padding: 0 10px
            margin: 0 auto
            height: 90px
            display: flex
            flex-direction: row
            justify-content: space-between
            align-items: center
            transition: height .3s
            .logo-box
                display flex
                align-items center
                height 90px
                cursor pointer
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
                .logo-img
                    width 40px
                    height 40px
                    position relative
                    animation: logo-img .5s
                .header-logo
                    height: 100%
                    display: flex
                    flex-direction: column
                    align-items: center
                    justify-content: space-between
                    color: $color-main
                    font-size: 20px
                    font-weight: bold
                    padding: 25px 0
                &:hover
                    .line
                        width: 0
                .line
                    width: 80px
                    height: 2px
                    background-color: $color-main
                    animation: logo-line .8s
                    transition: width .3s
                .blog-name
                    animation: logo-name .8s
            .toggle
                width: 24px
                height: 24px
                padding: 5px
                cursor: pointer
                line-height: 0
                .toggle-line
                    position: relative
                    display: inline-block
                    vertical-align: top
                    width: 100%
                    height: 2px
                    margin-top: 4px
                    background-color: $color-main
                    &:first-child
                        margin-top: 0
        .mobile-tab-wrap
            width: 100%
            transition: all .3s
            // overflow: hidden
            border-top: 1px solid #eeeeee
            .tab
                position: relative
                width: 100%
                padding: 8px 15px
                font-size: 12px
                line-height: 1
                color $color-main
                .iconfont
                    font-size: 12px
                    margin-right: 5px

    @keyframes logo-name {
        from {
            margin-left: -60px;
            opacity: 0
        }
        to {
            margin-left: 0;
            opacity: 1
        }
    }
    @keyframes logo-img {
        from {
                margin-left: -60px;
                opacity: 0
        }
        to {
            margin-left: 0;
            opacity: 1
        }
    }
    @keyframes logo-line {
        from {
            width: 0;
        }
        to {
            width: 80px;
        }
    }
</style>
