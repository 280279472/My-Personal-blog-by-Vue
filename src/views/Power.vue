<template>
    <div class="power">
        <ArticleCard v-for="(item,index) in article" :key="index" :article="item" />
    </div>
</template>

<script lang="ts">
    import {Vue,Component} from 'vue-property-decorator'
    import ArticleCard from "@/components/ArticleCard.vue";

    @Component({
        name:'Power',
        components:{ArticleCard},
    })
    export default class Power extends Vue{
        article:Array<any>=[
            {
                title:'Vue-cli4.1.2项目打包性能优化实践',
                date:'2019年2月23日',
                url:'49ba59abbe56e057'
            }
        ]
    }
</script>

<style lang="stylus" scoped>
.power{
    width 100%
    height 100%
    display flex
    align-items center
    flex-direction column
    padding 90px 20px 30px 20px
}
</style>