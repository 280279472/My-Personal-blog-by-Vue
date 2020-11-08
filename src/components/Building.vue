<template>
    <div class="building">
        <img src="../assets/images/noData.png" class="no-img" alt="">
        <p class="tip">还在建设中... 敬请期待!</p>
    </div>
</template>

<script lang="ts">
    import {Vue,Component,Prop} from 'vue-property-decorator'

    @Component({
        name:'Building'
    })
    export default class Building extends Vue{
        @Prop(Object) article!:any;
    }

</script>

<style lang="stylus" scoped>
    .building{
        position absolute
        left 50%
        top 36%
        transform translate(-50%,-50%)
        display flex
        align-items center
        justify-content flex-start
        flex-direction column
        .no-img{
            width 240px
            height 240px
            object-fit cover
        }
        .tip{
            margin-top 20px
            color $color-light-gary
            font-size 18px
            white-space nowrap
        }
    }
</style>