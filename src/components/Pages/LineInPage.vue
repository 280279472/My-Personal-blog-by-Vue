<template>
    <div class="line-in-page-box" :style="{minHeight:isPc?'calc(100vh - 60px)':'calc(100vh - 40px)'}">
        <ShowMagic>
            <template #magic>
                <LineIn style="height: 60vh;" />
            </template>
        </ShowMagic>
    </div>
</template>

<script lang="ts">
    import {Vue,Component} from 'vue-property-decorator'
    import ShowMagic from "@/components/ShowMagic.vue";
    import LineIn from "@/components/Magic/LineIn.vue";
    import {Getter} from "vuex-class";

    @Component({
        name: "LineInPage",
        components:{ShowMagic,LineIn}
    })
    export default class LineInPage extends Vue{
        @Getter('base/isPc') isPc!:boolean;

    }
</script>

<style lang="stylus" scoped>
.line-in-page-box{
    width 100%
    background-color #000000
}
</style>