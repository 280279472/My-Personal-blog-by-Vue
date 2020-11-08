<template>
    <div class="user-card">
        <div class="user-card-title">关于作者</div>
        <ul class="item-box">
            <li class="item" @click="openUrl('https://github.com/Jack-Star-T')">Github地址</li>
            <li class="item" @click="openUrl('https://juejin.im/user/5d4c28015188253b1e3de80d')">掘金地址</li>
            <li class="item" @click="openUrl('https://www.jianshu.com/u/9985e2c26c3a')">简书地址</li>
        </ul>
    </div>
</template>

<script lang="ts">
    import {Vue,Component} from "vue-property-decorator";

    @Component({
        name:'UserCard',
    })
    export default class UserCard extends Vue{

        openUrl(url:string){
            window.open(url,'_blank');
        }
    }
</script>

<style lang="stylus" scoped>
    @import "../stylus/color.styl"

    .user-card{
        width 240px
        position: fixed;
        top: 120px;
        right: 50%;
        animation: show .8s
        padding-bottom 20px
        transform translate(340px + 50%)
        background-color: $color-white
        border-radius 6px
        .user-card-title{
            height 40px
            line-height 40px
            font-size 14px
            color $color-normal
            border-bottom 1px solid #e4e4e4
            padding-left 20px
            font-weight bold
        }
        .item-box{
            padding-left 30px
            font-size 14px
            color $color-light-gary
            line-height 30px
            .item{
                cursor pointer
                &:hover{
                    color $color-main
                }
            }
        }
    }
</style>