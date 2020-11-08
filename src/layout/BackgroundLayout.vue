<template>
    <div>
        <div class="background">
            <Header :is-opacity="isOpacity" />
            <router-view />
        </div>
        <ShowSpace />
    </div>
</template>

<script lang="ts">
    import {Vue,Component} from 'vue-property-decorator'
    import Header from "@/components/Header.vue";
    import {Getter} from "vuex-class";
    import {ScreenInterface} from "@/interface";
    import ShowSpace from '@/components/ShowSpace.vue'


    @Component({
        name:'BackgroundLayout',
        components:{Header,ShowSpace}
    })
    export default class BackgroundLayout extends Vue{
        @Getter('base/isPc') isPc!:boolean;
        @Getter('base/screen') screen!:ScreenInterface;

        isOpacity:Boolean=true;
        mounted(){
            window.addEventListener('scroll', this.getIsOpacity);
        }
        destroy(){
            window.removeEventListener('scroll', this.getIsOpacity,false);
        }
        getIsOpacity(){
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop >= this.screen.height-60) {
                this.isOpacity = false
            } else {
                this.isOpacity = true
            }
        }
    }
</script>

<style lang="stylus" scoped>
.background
    width 100%
    background url("../assets/images/bg.jpg")
    background-size cover
    background-position center
    display flex
    height 100vh
</style>