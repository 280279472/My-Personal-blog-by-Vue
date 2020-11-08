<template>
    <div class="main">
        <div :style="{minHeight:isPc?screen.height-60+'px':screen.height-40+'px'}">
            <Header :is-opacity="false" />
            <router-view :style="{paddingTop:isPc?'120px':'90px'}" />
        </div>
    </div>
</template>

<script lang="ts">
import {Vue,Component} from 'vue-property-decorator'
import Header from "@/components/Header.vue";
import {Getter} from "vuex-class";
import {ScreenInterface} from "@/interface";

@Component({
    name:'MainLayout',
    components:{Header}
})
export default class MainLayout extends Vue{
    @Getter('base/isPc') isPc!:boolean;
    @Getter('base/screen') screen!:ScreenInterface;
}
</script>

<style lang="stylus" scoped>
    @import "../stylus/color.styl"

    .main
        width 100%
        background-color $color-background
</style>
