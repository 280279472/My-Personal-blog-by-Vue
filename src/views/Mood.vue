<template>
    <div id="mood-masonry">
        <waterfall :col='col' class="masonry" :width="itemWidth" :gutterWidth="gutterWidth"  :data="data"  @loadmore="loadmore"  @scroll="scroll"  >
            <template>
                <MoodCard v-for="(item,index) in data" :key="index" :mood-list="item" />
            </template>
        </waterfall>
    </div>
</template>

<script lang="ts">
    import {Vue,Component} from "vue-property-decorator";
    import MoodCard from "@/components/MoodCard.vue";

    @Component({
        name:'Mood',
        components:{MoodCard}
    })
    export default class Mood extends Vue{
        // moodTimer:any=null;
        col:number=2;
        itemWidth:number=460;
        gutterWidth:number=20;
        data:Array<any> = [];
        list:Array<any> = [
            {
                username:'凉梦',
                date:'2018-6-25 19:24',
                content:'学校天台的飞云之下',
                imageList:[
                    {
                        url:require('../assets/images/6.jpg')
                    },
                    {
                        url:require('../assets/images/7.jpg')
                    },
                    {
                        url:require('../assets/images/8.jpg')
                    },
                    {
                        url:require('../assets/images/9.jpg')
                    },
                    {
                        url:require('../assets/images/10.jpg')
                    },
                    {
                        url:require('../assets/images/11.jpg')
                    },
                    {
                        url:require('../assets/images/12.jpg')
                    },
                    {
                        url:require('../assets/images/13.jpg')
                    },
                    {
                        url:require('../assets/images/14.jpg')
                    }
                ]
            },
            {
                username:'凉梦',
                date:'2018-1-14 17:20',
                content:'最美不过夕阳红与层峦叠嶂',
                imageList:[
                    {
                        url:require('../assets/images/1.jpg')
                    },
                    {
                        url:require('../assets/images/2.jpg')
                    },
                    {
                        url:require('../assets/images/3.jpg')
                    },
                    {
                        url:require('../assets/images/4.jpg')
                    },
                    {
                        url:require('../assets/images/5.jpg')
                    }
                ]
            },
        ];

        mounted(){
            this.data=this.list;
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
            if(screenWith>1000){
                this.itemWidth=500-30;
                this.gutterWidth=20;
                this.col=2;
            }else if(screenWith>768){
                this.itemWidth=screenWith/2-30;
                this.gutterWidth=20;
                this.col=2;
            }else{
                this.itemWidth=screenWith-40;
                this.gutterWidth=0;
                this.col=1;
            }
        }
        loadmore(){

        }
        scroll(){

        }
    }
</script>

<style lang="stylus" scoped>
    #mood-masonry{
        margin 0 auto
        width 100%
        max-width 1000px
        .masonry{
            padding 0 20px
        }
    }
</style>