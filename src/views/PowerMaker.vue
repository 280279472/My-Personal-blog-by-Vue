<template>
    <div class="power-maker">
        <button class="save-button" @click="getParams">保存</button>
        <mavon-editor class="editor"
                      v-model="article.content"
                      ref=md
                      @imgAdd="$imgAdd"
                      :boxShadow="false"
                      defaultOpen="edit"
                      :toolbars="{
          bold: true, // 粗体
          italic: true, // 斜体
          header: true, // 标题
          underline: true, // 下划线
          strikethrough: true, // 中划线
          mark: true, // 标记
          superscript: true, // 上角标
          subscript: true, // 下角标
          quote: true, // 引用
          ol: true, // 有序列表
          ul: true, // 无序列表
          link: true, // 链接
          imagelink: true, // 图片链接
          code: true, // code
          table: true, // 表格
          fullscreen: false, // 全屏编辑
          readmodel: true, // 沉浸式阅读
          htmlcode: false, // 展示html源码
          help: true, // 帮助
          undo: true, // 上一步
          redo: true, // 下一步
          trash: true, // 清空
          save: false, // 保存（触发events中的save事件）
          navigation: false, // 导航目录
          alignleft: false, // 左对齐
          aligncenter: false, // 居中
          alignright: false, // 右对齐
          subfield: true, // 单双栏模式
          preview: true, // 预览
        }"/>
    </div>
</template>

<script lang="ts">
    import {Vue,Component} from "vue-property-decorator";
    import {markdown} from "@/utils/markdown";

    @Component({
        name:'power-maker',
    })
    export default class PowerMaker extends Vue{
        article:any = {
            id:0,
            content: '',
            title: '',
            cover: '',
            subMessage: '',
            isEncrypt: '0'
        };

        $imgAdd(pos:any, $file:any) {
            //上传文件
        }

        //整合提交数据
        getParams() {
            let html = markdown(this.article.content);
/*            let params = {
                title: this.article.title,
                cover: this.article.cover,
                subMessage: this.article.subMessage,
                content: this.article.content,
                htmlContent: html
            };
            if (this.article.id) {
                params.id = this.article.id
            }
            return params*/
        }
    }
</script>

<style lang="stylus" src="../stylus/markdown.styl" scoped></style>

<style lang="stylus" scoped>
    @import "../stylus/color.styl"

    .power-maker{
        max-width 1000px
        margin 0 auto
        text-align right
        .save-button{
            width 100px
            height 40px
            line-height 40px
            background-color $color-main
            color $color-white
            font-size 16px
            font-weight bold
            border-radius 6px
            letter-spacing 6px
            margin-bottom 10px
        }
    }
</style>