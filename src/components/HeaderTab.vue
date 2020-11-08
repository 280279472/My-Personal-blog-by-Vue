<template>
    <div id="header-tab-view">
        <div class="tab" :class="{'selected':$route.meta.flag===tab.to}" :style="{backgroundColor:isOpacity?'transparent':'#fef0f0'}" v-for="(tab, index) in tabs" :key="index" @click="selectTab(tab)">
            <i class="iconfont" :class="tab.icon"></i>
            <span class="name">{{ tab.name }}</span>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue,Component,Prop,Emit} from 'vue-property-decorator'

    @Component({
        name:'HeaderTab',
    })
    export default class HeaderTab extends Vue{
        @Prop(Array) tabs!: Array<any>;
        @Prop(Boolean) isOpacity!: Boolean;

        @Emit('tab-click')
        selectTab(tab:any){
            return tab
        }
    }
</script>

<style lang="stylus" scoped>
    @import "../stylus/color.styl"

    #header-tab-view
        position: relative
        font-size: 14px
        cursor: default
        animation: show .5s
        .tab
            padding: 5px 8px
            display: inline-block
            cursor: pointer
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
            color: $color-main
            transition: all .5s
            border-radius: 5px
            margin-right: 5px
            &:last-child
                margin-right: 0
            &:hover
                color: $color-white
                background-color: $color-main!important
            .iconfont
                font-size: 12px
            .name
                margin-left: 2px


        .selected{
            color: $color-white
            background-color: $color-main!important
        }
    @keyframes show {
        from {
            margin-top: -30px;
            opacity: 0;
        }
        to {
            margin-top: 0;
            opacity: 1;
        }
    }
</style>
