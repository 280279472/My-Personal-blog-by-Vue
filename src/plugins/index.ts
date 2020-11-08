import Vue from 'vue'
import mavonEditor from 'mavon-editor'   //markdown编辑器
// @ts-ignore
import waterfall from 'vue-waterfall2'    //瀑布流布局
// @ts-ignore
import preview from 'vue-photo-preview'   //图片预览
import VueLazyload from 'vue-lazyload'   //图片懒加载

import 'mavon-editor/dist/css/index.css'
import 'vue-photo-preview/dist/skin.css'

Vue.use(mavonEditor);
Vue.use(waterfall);
Vue.use(preview);
// or with options
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: 'dist/error.png',
    loading: 'dist/loading.gif',
    attempt: 1
})