<template>
    <div id="mood-card">
        <div class="user-box">
            <div class="info-box">
                <img src="../assets/images/avatar.jpg" class="avatar" alt="" />
                <div class="info">
                    <p class="name">{{moodList.username}}</p>
                    <p class="date">{{moodList.date}}</p>
                </div>
            </div>
            <div></div>
        </div>
        <div class="content">{{moodList.content}}</div>
        <el-row :gutter="isPc?10:4">
            <el-col :span="8" ref="col"  v-for="(item,index) in moodList.imageList" :key="index"><img class="img" :preview="moodList.username+moodList.date" v-lazy="item.url" :style="{height:width+'px'}" alt="" /></el-col>
        </el-row>
    </div>
</template>

<script lang="ts">
    import {Vue,Component,Prop} from 'vue-property-decorator'
    import {State} from "vuex-class";

    @Component({
        name:'MoodCard'
    })
    export default class MoodCard extends Vue{
        @Prop(Object) moodList!: Object;

        @State(state=>state.base.isPc) isPc!:boolean;

        width:number=0;

        mounted(){
            if(window.innerWidth>1000){
                this.width=136.66;
            }else if(window.innerWidth<=1000 && window.innerWidth>768){
                this.width=(window.innerWidth-180)/6;
            }else{
                this.width=(window.innerWidth-68)/3;
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "../stylus/color.styl"

    #mood-card{
        width 100%
        position relative
        padding 20px
        margin-bottom 20px
        border-radius 8px
        background-color: $color-white
        box-shadow: 0 1px 4px 0 rgba(0,0,0,0.1)
        @media (max-width 768px){
            padding 10px
            margin-bottom 14px
        }
        .user-box{
            display flex
            align-items center
            justify-content space-between
            .info-box{
                display flex
                align-items center
                .avatar{
                    width 36px
                    height 36px
                    border-radius 18px
                    object-fit cover
                }
                .info{
                    display flex
                    justify-content space-between
                    flex-direction column
                    margin-left 8px
                    .name{
                        font-size 14px
                        margin-bottom 4px
                        color $color-boy
                    }
                    .date{
                        font-size 12px
                        color $color-gary
                    }
                }
            }
        }
        .content{
            color $color-normal
            font-size 14px
            margin-top 8px
            margin-bottom 20px
            @media (max-width 768px){
                margin-bottom 10px
            }
        }
        .img{
            width 100%
            margin-bottom 10px
            object-fit cover
            cursor zoom-in
            @media (max-width 768px){
                margin-bottom 4px
            }
        }
    }
</style>