<template>
    <div id="md-preview">
        <link href="https://cdn.bootcss.com/github-markdown-css/4.0.0/github-markdown.min.css" rel="stylesheet">
        <section id="markdown-preview-body" class="preview markdown-body" v-html="contents" v-highlight></section>
    </div>
</template>

<script lang="ts">
    import {Vue,Component,Prop,Watch} from 'vue-property-decorator'
    import {Getter, Mutation} from "vuex-class";
    import {ScreenInterface} from "@/interface";

    @Component({
        name:'MarkdownPreview'
    })
    export default class MarkdownPreview extends Vue{
        @Prop(String) contents!:String;

        @Mutation('article/SET_articleMenu') setArticleMenu:any;
        @Mutation('article/SET_articleMenuTag') setArticleMenuTag:any;
        @Mutation('article/SET_articleMenuSource') setArticleMenuSource:any;
        @Getter('base/screen') screen!:ScreenInterface;

        //watch监听
        @Watch('contents', {immediate: true, deep: true})
        onChangeValue(newVal:string,oldVal:string){
            this.setArticleMenu(false);
            setTimeout(this.init, 1000);
        }

        //初始化
        init() {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            this.getMenu();
            this.getImg();
        }

        mounted() {
            setTimeout(this.init, 1000);
        }
        beforeDestroy() {
            this.setArticleMenuTag('1.');
            this.setArticleMenuSource([]);
            this.setArticleMenu(false);
        }

        getMenu() {
            let a:any=document.getElementById('markdown-preview-body');
            let headNodes:any = a.getElementsByClassName('my-blog-head');
            let headList:Array<any> = [];
            Array.prototype.forEach.call(headNodes, item => {
                headList.push({
                    id: item.id,
                    index: parseInt(item.tagName.replace('H', '')),
                    title: item.innerText
                })
            });
            let tree:any = this.getTree(headList, 0);
            if (tree.length === 0) {
                tree = false
            }
            let source = JSON.parse(JSON.stringify(headList));
            source.forEach((item:any) => {
                item.children = []
            });
            this.setArticleMenuTag('1.');
            this.setArticleMenuSource(source);
            this.setArticleMenu(tree);
        }

        //添加图片查看器
        getImg() {
            let bodyDom:any = document.getElementById('markdown-preview-body');
            let imgDomList:any = bodyDom.getElementsByTagName('img');
            Array.from(imgDomList,(x:any)=>x.setAttribute('preview','1'));
        }

        //遍历
        getTree(data:any, tag:any) {
            let tree:Array<any> = [];
            let index:number = 0;
            data.forEach((item:any) => {
                item.children = [];
                let len = tree.length;
                if (len === 0) {
                    item.tag = tag + (++index) + '.';
                    tree.push(item) // 第一个元素，直接放进tree
                } else {
                    let last = tree[len - 1];
                    if (item.index <= last.index) { // 如果index比tree最后一个的index小或等于，说明是同级存进去
                        item.tag = tag + (++index) + '.';
                        tree.push(item)
                    } else {
                        last.children.push(item) // 否则存进最后一个元素的children
                    }
                }
            });
            // 因为上面一层循环，只能处理两层，所以需要遍历孩子节点，出现index不一样的说明不是同级，需要对孩子节点再递归调用生成
            tree.forEach(item => {
                let children = item.children;
                let ids:Array<any> = [];
                index = 0;
                // 判断是否存在index不一样的
                children.forEach((child:any) => {
                    child.tag = item.tag + (++index) + '.';
                    if (ids.indexOf(child.index) === -1) {
                        ids.push(child.index)
                    }
                });
                if (ids.length > 1) {
                    // ids的元素大于1说明存在，需要再递归孩子节点
                    item.children = this.getTree(children, item.tag)
                }
            });
            return tree
        }
    }


</script>

<style lang="stylus" src="../stylus/markdown.styl">

</style>

<style lang="stylus" scoped>

    #md-preview{
        position: relative
        width: 100%
        margin-top: 10px
        animation show .8s ease
    }

    @keyframes show {
        from {
            margin-top: -10px;
            opacity: 0;
        }
        to {
            margin-top: 0;
            opacity: 1;
        }
    }
</style>
