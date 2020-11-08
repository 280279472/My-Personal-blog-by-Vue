<template>
    <div class="magic-box">
        <div class="ChooseBox">
            <div class="choose-item" @click="chooseIndex('0')"><span :class="{'selected':nowIndex==='0'}">悬浮专区</span></div>
            <div class="choose-item" @click="chooseIndex('1')"><span :class="{'selected':nowIndex==='1'}">动画专区</span></div>
        </div>
        <div class="overflow-box">
            <div class="transform-box" :style="`--selected-index:${nowIndex}`">
                <waterfall :col='col' class="masonry" :width="itemWidth" :data="data" :gutterWidth="gutterWidth">
                    <template>
                        <div class="magic-card" @click="chooseGo(item.url)" v-for="(item,index) in HoverComponentList" :key="`hover${index}`">
                            <div class="magic-content"><component :is="item.name"></component></div>
                            <div class="magic-detail">
                                <div class="magic-title">{{item.title}}</div>
                                <div v-for="(item2,index2) in item.point" :key="`animateTwo${index2}`">
                                    <i class="iconfont icon-biaoqian"></i>
                                    <span class="magic-point">{{item2}}</span>
                                </div>
                                <div class="magic-time">创作日期： {{item.date}}</div>
                            </div>
                        </div>
                    </template>
                </waterfall>
                <waterfall :col='col' class="masonry" :width="itemWidth" :data="data" :gutterWidth="gutterWidth">
                    <template>
                        <div class="magic-card" @click="chooseGO(item.url)" v-for="(item,index) in AnimateComponentList" :key="`animate${index}`">
                            <div class="magic-content"><component :is="item.name"></component></div>
                            <div class="magic-detail">
                                <div class="magic-title">{{item.title}}</div>
                                <div v-for="(item2,index2) in item.point" :key="`animateTwo${index2}`">
                                    <i class="iconfont icon-biaoqian"></i>
                                    <span class="magic-point">{{item2}}</span>
                                </div>
                                <div class="magic-time">创作日期： {{item.date}}</div>
                            </div>
                        </div>
                    </template>
                </waterfall>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue,Component} from "vue-property-decorator";
    import ColorIn from '@/components/Magic/ColorIn.vue'
    import LineIn from "@/components/Magic/LineIn.vue";

    @Component({
        name:'Magic',
    components:{
        ColorIn,
        LineIn
    }
    })
    export default class Magic extends Vue{
        HoverComponentList:Array<any>=[
            {
                name:'ColorIn',
                title:'悬浮颜色填充',
                point:['background-clip:text'],
                date:'2020-6-25',
                url:''
            }
        ];
        AnimateComponentList:Array<any>=[
            {
                name:'LineIn',
                title:'轮廓显示特效',
                point:['overflow:hidden','translate'],
                date:'2020-6-27',
                url:'/LineIn'
            }
        ];
        col:number=2;
        itemWidth:number=300;
        gutterWidth:number=20;
        data:Array<any>=[];
        nowIndex:String='0';     //0为悬浮，1为动画

        created(){
            if(this.$route.query.type){
                this.nowIndex=this.$route.query.type.toString();
            }
        }

        mounted(){
            this.updateList();
            window.addEventListener('resize', this.updateList);
        }
        destroy(){
            window.removeEventListener('resize', this.updateList,false);
        }

        /*        //节流
                throttle() {
                    let vm = this;
                    if (this.moodTimer) {
                        clearInterval(this.moodTimer);
                        vm.moodTimer = setTimeout(() => {
                            vm.updateList();
                        }, 300);
                    } else {
                        vm.moodTimer = setTimeout(() => {
                            vm.updateList();
                        }, 300);
                    }
                }*/
        updateList(){
            let screenWith=window.innerWidth;
            if(screenWith>=1200){
                this.itemWidth=300-25;
                this.gutterWidth=20;
                this.col=4;
            }else if(screenWith>768){
                this.itemWidth=screenWith/4-25;
                this.gutterWidth=20;
                this.col=4;
            }else{
                this.itemWidth=screenWith/2-15;
                this.gutterWidth=10;
                this.col=2;
            }
        }

        //选择栏选择
        chooseIndex(index:String){
            this.nowIndex=index;
        }

        //查看详情
        chooseGO(url:any){
            if(url){
                this.$router.push(url);
            }else{
                this.$message.error('目前还未完成，敬请期待!');
            }
        }
    }
</script>

<style lang="stylus" scoped>
.magic-box{
    min-height calc(100vh - 60px)
    margin 0 auto
    max-width 1200px
    .ChooseBox{
        height 60px
        background linear-gradient(45deg,#8EC5FC,#E0C3FC)
        margin 0 20px 20px
        border-radius 8px
        overflow hidden
        display flex
        justify-content space-between
        align-items center
        padding 0 8px
        @media (max-width 768px){
            margin 0 10px 10px
        }
        .choose-item{
            text-align center
            font-size 20px
            cursor pointer
            width 50%
            color #ffffff
            span{
                transition all .3s
            }
        }
        .selected{
            padding-bottom 4px
            border-bottom 3px solid #ffffff
        }
    }
    .overflow-box{
        overflow hidden
        width 100%
        min-height 100%
        .transform-box{
            display flex
            flex-wrap nowrap
            --translate-width calc(var(--selected-index) * 100% * -1)
            transform translateX(var(--translate-width))
            transition all .3s
            .masonry{
                min-width 100%
                padding 0 20px
                @media (max-width 768px){
                    padding 0 10px
                }
                .magic-card{
                    width 100%
                    margin-bottom 20px
                    position relative
                    border-radius 8px
                    box-shadow 1px 1px 10px rgba(0,0,0,0.1)
                    cursor pointer
                    @media (max-width 768px){
                        margin-bottom 10px
                    }
                    .magic-content{
                        width 100%
                        height 200px
                        background: linear-gradient(0deg,#D9AFD9 0%,#97D9E1 100%);
                        border-top-left-radius 8px
                        border-top-right-radius 8px
                    }
                    .magic-detail{
                        background-color #ffffff
                        border-bottom-left-radius 8px
                        border-bottom-right-radius 8px
                        width 100%
                        padding 10px
                        .magic-title{
                            font-size 16px
                            color $color-normal
                            width 100%
                            line-height 30px
                            text-overflow: -o-ellipsis-lastline;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                        }
                        .icon-biaoqian{
                            font-size 12px
                            margin-right 4px
                        }
                        .magic-point{
                            font-size 12px
                            color $color-gary
                        }
                        .magic-time{
                            color #C0C4CC
                            font-size 12px
                            margin-top 12px
                            text-align right
                        }
                    }
                }
            }
        }
    }
}
</style>