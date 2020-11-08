<template>
    <div id="power-star">
        <div class="power-star-main">
            <div class="power-star-warp" :style="{maxWidth:screen.width>1024?'760px':'1024px'}" >
                <div class="power-star-title">{{article.title}}</div>
                <div class="power-star-info"><i class="iconfont icon-rili"></i>发表于{{article.date}}</div>
                <MarkdownPreview :contents="article.contents"></MarkdownPreview>
            </div>
            <UserCard v-if="screen.width>1024" />
            <RightNav v-if="screen.width>1024" />
        </div>
        <MobileNav />
        <div class="bottom-menu" @click="openMenu" v-if="screen.width<1026 && !mobileNav">
            <div class="iconfont icon-daohang"></div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue,Component} from "vue-property-decorator";
    import MarkdownPreview from '@/components/MarkdownPreview.vue';
    import RightNav from "@/components/RightNav.vue";
    import {Getter, Mutation} from "vuex-class";
    import {ScreenInterface} from "@/interface";
    import UserCard from "@/components/UserCard.vue";
    import MobileNav from "@/components/MobileNav.vue";

    @Component({
        components:{MarkdownPreview,RightNav,UserCard,MobileNav}
    })
    export default class PowerStar extends Vue{
        article:any={};
        @Getter('base/screen') screen!:ScreenInterface;
        @Getter('base/mobileNav') mobileNav!:boolean;
        @Mutation('base/SET_mobileNav') setMobileNav!:any;
        dataList:Array<any>=[
            {
                id:'49ba59abbe56e057',
                article:{
                    title:'Vue-cli4.1.2项目打包性能优化实践',
                    date:'2020年2月23日',
                    contents:'<blockquote>\n' +
                        '<h4 class="my-blog-head" id="my-blog-head24">记录了自己的博客在<code>禁用缓存</code>的情况下，从八九秒加载时间到最终<code>985ms</code>的优化实践，开启缓存的情况下能达到<code>138ms</code>的访问速度</h4></blockquote>\n' +
                        '<h4 class="my-blog-head" id="my-blog-head25">本人的个人博客采用的是<code>Vue-cli4.1.2 + typescript</code>构建的，项目目录结构如下</h4><pre><code class="language-html">├─ src    //主文件\n' +
                        '│  ├─ api    //接口文件夹\n' +
                        '|  |  |- config.js    //后端接口地址的配置,将测试、开发、生产环境分开\n' +
                        '|  |  └─ user.js      //接口文件，配置了token请求头，具体接口根据需求修改\n' +
                        '│  ├─ assets   //资源文件   \n' +
                        '│  ├─ components   //公用组件\n' +
                        '│  ├─ directive   //vue自定义指令\n' +
                        '|  ├─ filters      //存放过滤器文件，自带了手机号加密，手机号格式化，时间日期处理\n' +
                        '|  ├─ interceptors    //存放axios拦截器配置，写入了接口调用的loading加载以及http状态码报错拦截\n' +
                        '|  ├─ interceptors    //放置公用的接口，对数据进行类型限制\n' +
                        '|  ├─ layout      //布局文件，通过子路由渲染方式实现，具体HTML布局根据需求修改  \n' +
                        '|  ├─ mixins      //混入文件，配置了一个平滑滚动的方法\n' +
                        '|  ├─ plugins     //外部插件文件夹，配置了按需引入的element-ui\n' +
                        '|  ├─ reg    //存放正则以及校验的文件夹\n' +
                        '|  |  |- reg.ts      //存放正则表达式，自带了传真，邮箱，qq，手机号，银行卡号，固定电话，密码强度校验正则\n' +
                        '|  |  └─ validator.ts      //存放element-ui自定义校验，自带了传真，邮箱，qq，手机号，银行卡号，固定电话，密码强度自定义校验\n' +
                        '|  ├─ router      //路由文件\n' +
                        '|  ├─ store       //vuex全局变量文件\n' +
                        '|  |  |- index.ts      //store主文件\n' +
                        '|  |  └─ module     //store模块文件夹\n' +
                        '|  |  |  └─ user.ts      //存放user相关的全局变量\n' +
                        '|  ├─ stylus   //css预处理器文件夹\n' +
                        '|  |  |- reset.styl      //样式初始化文件,自带了非标准盒子，a标签清除下划线，清除内外边距，禁止图片拖拽等效果\n' +
                        '|  |  └─ color.styl     //颜色变量文件\n' +
                        '|  ├─ utils   //公用方法文件夹\n' +
                        '|  |  |- area.ts      //存放省市区三级地区的数据\n' +
                        '|  |  |- array.ts      //存放数组相关的公用方法，自带了两个元素交换位置，元素前进后退一格，元素置顶或末尾，去重，删除指定元素操作\n' +
                        '|  |  └─ object.ts    //存放对象相关的公用方法，自带了对象清空所有值的方法\n' +
                        '|  ├─ views   //页面文件夹\n' +
                        '|  ├─ main.ts   //主配置文件\n' +
                        '|  ├─ babel.config.js   //babel配置文件，写入了element-ui按需加载的配置\n' +
                        '|  ├─ package.json   //npm的包管理文件\n' +
                        '|  ├─ tsconfig.json   //ts配置文件\n' +
                        '|  ├─ vue.config.js   //vue配置文件</code></pre>\n' +
                        '<h2 class="my-blog-head" id="my-blog-head26">关闭productionSourceMap</h2><h5 class="my-blog-head" id="my-blog-head27">首先，由于最新版的脚手架不自带配置文件了，先在根目录新建vue.config.js文件，关闭<code>productionSourceMap</code>，在<code>vue.config.js</code>中写入如下内容</h5><pre><code class="language-javascript">module.exports = {\n' +
                        '    productionSourceMap: false\n' +
                        '}</code></pre>\n' +
                        '<h2 class="my-blog-head" id="my-blog-head28">开启Gzip压缩</h2><h4 class="my-blog-head" id="my-blog-head29">安装插件<code>compression-webpack-plugin</code>，打开代码压缩，<code>npm install --save-dev compression-webpack-plugin</code>，现在的<code>vue.config.js</code>代码如下，但是，需要注意的是，服务器上nginx也必须开启gzip才能生效</h4><pre><code class="language-javascript">// 是否为生产环境\n' +
                        'const isProduction = process.env.NODE_ENV !== &#39;development&#39;;\n' +
                        '\n' +
                        '// gzip压缩\n' +
                        'const CompressionWebpackPlugin = require(&#39;compression-webpack-plugin&#39;)\n' +
                        '\n' +
                        'module.exports = {\n' +
                        '    productionSourceMap: false,\n' +
                        '    configureWebpack: config =&gt; {\n' +
                        '        // 生产环境相关配置\n' +
                        '        if (isProduction) {\n' +
                        '            //gzip压缩\n' +
                        '            const productionGzipExtensions = [&#39;html&#39;, &#39;js&#39;, &#39;css&#39;]\n' +
                        '            config.plugins.push(\n' +
                        '                new CompressionWebpackPlugin({\n' +
                        '                    filename: &#39;[path].gz[query]&#39;,\n' +
                        '                    algorithm: &#39;gzip&#39;,\n' +
                        '                    test: new RegExp(\n' +
                        '                        &#39;\\\\.(&#39; + productionGzipExtensions.join(&#39;|&#39;) + &#39;)$&#39;\n' +
                        '                    ),\n' +
                        '                    threshold: 10240, // 只有大小大于该值的资源会被处理 10240\n' +
                        '                    minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理\n' +
                        '                    deleteOriginalAssets: false // 删除原文件\n' +
                        '                })\n' +
                        '            )\n' +
                        '        }\n' +
                        '    }\n' +
                        '}</code></pre>\n' +
                        '<h4 class="my-blog-head" id="my-blog-head30">打开<code>nginx</code>文件夹下的<code>nginx.conf</code>文件，在<code>http</code>模块中写入以下内容</h4><pre><code class="language-javascript">    # 开启gzip\n' +
                        '    gzip on;\n' +
                        '\n' +
                        '    # 启用gzip压缩的最小文件，小于设置值的文件将不会压缩\n' +
                        '    gzip_min_length 1k;\n' +
                        '\n' +
                        '    # gzip 压缩级别，1-9，数字越大压缩的越好，也越占用CPU时间，后面会有详细说明\n' +
                        '    gzip_comp_level 2;\n' +
                        '\n' +
                        '    # 进行压缩的文件类型。javascript有多种形式，后面的图片压缩不需要的可以自行删除\n' +
                        '    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;\n' +
                        '\n' +
                        '    # 是否在http header中添加Vary: Accept-Encoding，建议开启\n' +
                        '    gzip_vary on;\n' +
                        '\n' +
                        '    # 设置压缩所需要的缓冲区大小     \n' +
                        '    gzip_buffers 4 16k;</code></pre>\n' +
                        '<h4 class="my-blog-head" id="my-blog-head31">然后输入命令<code>nginx -s reload</code>重启nginx服务</h4><h4 class="my-blog-head" id="my-blog-head32">如果后端nginx开启了gzip，可以从<code>network</code>中的<code>Content-Encoding</code>中看到<code>gzip</code></h4><p><img src="../assets/images/15263556-ffeec990cc0e2f85.png" alt="image.png"></p>\n' +
                        '<h2 class="my-blog-head" id="my-blog-head33">开启CDN加速(建议选配，CDN虽然速度快，但没有本地打包稳定)</h2><h4 class="my-blog-head" id="my-blog-head34">将使用的插件使用cdn链接，并且配置<code>webpack</code>将使用<code>CDN</code>的插件不进行打包，别忘记还要再<code>index.html</code>中引入<code>js</code>以及<code>css</code></h4><pre><code class="language-javascript">// 是否为生产环境\n' +
                        'const isProduction = process.env.NODE_ENV !== &#39;development&#39;;\n' +
                        '\n' +
                        '// 本地环境是否需要使用cdn\n' +
                        'const devNeedCdn = false\n' +
                        '\n' +
                        '// cdn链接\n' +
                        'const cdn = {\n' +
                        '    // cdn：模块名称和模块作用域命名（对应window里面挂载的变量名称）\n' +
                        '    externals: {\n' +
                        '        vue: &#39;Vue&#39;,\n' +
                        '        vuex: &#39;Vuex&#39;,\n' +
                        '        &#39;vue-router&#39;: &#39;VueRouter&#39;,\n' +
                        '        &#39;marked&#39;: &#39;marked&#39;,\n' +
                        '        &#39;highlight.js&#39;: &#39;hljs&#39;,\n' +
                        '        &#39;nprogress&#39;: &#39;NProgress&#39;\n' +
                        '    },\n' +
                        '    // cdn的css链接\n' +
                        '    css: [\n' +
                        '        &#39;https://cdn.bootcss.com/nprogress/0.2.0/nprogress.min.css&#39;\n' +
                        '    ],\n' +
                        '    // cdn的js链接\n' +
                        '    js: [\n' +
                        '        &#39;https://cdn.bootcss.com/vue/2.6.10/vue.min.js&#39;,\n' +
                        '        &#39;https://cdn.bootcss.com/vuex/3.1.2/vuex.min.js&#39;,\n' +
                        '        &#39;https://cdn.bootcss.com/vue-router/3.1.3/vue-router.min.js&#39;,\n' +
                        '        &#39;https://cdn.bootcss.com/marked/0.8.0/marked.min.js&#39;,\n' +
                        '        &#39;https://cdn.bootcss.com/highlight.js/9.18.1/highlight.min.js&#39;,\n' +
                        '        &#39;https://cdn.bootcss.com/nprogress/0.2.0/nprogress.min.js&#39;\n' +
                        '    ]\n' +
                        '}\n' +
                        '\n' +
                        'module.exports = {\n' +
                        '    chainWebpack: config =&gt; {\n' +
                        '        // ============注入cdn start============\n' +
                        '        config.plugin(&#39;html&#39;).tap(args =&gt; {\n' +
                        '            // 生产环境或本地需要cdn时，才注入cdn\n' +
                        '            if (isProduction || devNeedCdn) args[0].cdn = cdn\n' +
                        '            return args\n' +
                        '        })\n' +
                        '        // ============注入cdn start============\n' +
                        '    },\n' +
                        '    configureWebpack: config =&gt; {\n' +
                        '        // 用cdn方式引入，则构建时要忽略相关资源\n' +
                        '        if (isProduction || devNeedCdn) config.externals = cdn.externals\n' +
                        '    }\n' +
                        '}</code></pre>\n' +
                        '<h4 class="my-blog-head" id="my-blog-head35">接下来，在<code>index.html</code>中引入使用了<code>CDN</code>的链接</h4><pre><code class="language-html">&lt;!DOCTYPE html&gt;\n' +
                        '&lt;html lang=&quot;en&quot; style=&quot;width: 100%;height: 100%;&quot;&gt;\n' +
                        '  &lt;head&gt;\n' +
                        '    &lt;meta charset=&quot;utf-8&quot;&gt;\n' +
                        '    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;\n' +
                        '    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width,initial-scale=1.0&quot;&gt;\n' +
                        '    &lt;link rel=&quot;icon&quot; href=&quot;&lt;%= BASE_URL %&gt;favicon.ico&quot;&gt;\n' +
                        '\n' +
                        '    &lt;!-- 使用CDN的CSS文件 --&gt;\n' +
                        '    &lt;% for (var i in htmlWebpackPlugin.options.cdn &amp;&amp;\n' +
                        '    htmlWebpackPlugin.options.cdn.css) { %&gt;\n' +
                        '    &lt;link\n' +
                        '            href=&quot;&lt;%= htmlWebpackPlugin.options.cdn.css[i] %&gt;&quot;\n' +
                        '            rel=&quot;stylesheet&quot;\n' +
                        '    /&gt;\n' +
                        '    &lt;% } %&gt;\n' +
                        '    &lt;!-- 使用CDN的CSS文件 --&gt;\n' +
                        '\n' +
                        '    &lt;title&gt;CoolDream&lt;/title&gt;\n' +
                        '  &lt;/head&gt;\n' +
                        '  &lt;body style=&quot;width: 100%;height: 100%;&quot;&gt;\n' +
                        '    &lt;noscript&gt;\n' +
                        '      &lt;strong&gt;We&#39;re sorry but blog doesn&#39;t work properly without JavaScript enabled. Please enable it to continue.&lt;/strong&gt;\n' +
                        '    &lt;/noscript&gt;\n' +
                        '    &lt;div id=&quot;app&quot;&gt;&lt;/div&gt;\n' +
                        '    &lt;!-- built files will be auto injected --&gt;\n' +
                        '\n' +
                        '    &lt;!-- 使用CDN的JS文件 --&gt;\n' +
                        '    &lt;% for (var i in htmlWebpackPlugin.options.cdn &amp;&amp;\n' +
                        '    htmlWebpackPlugin.options.cdn.js) { %&gt;\n' +
                        '    &lt;script src=&quot;&lt;%= htmlWebpackPlugin.options.cdn.js[i] %&gt;&quot;&gt;&lt;/script&gt;\n' +
                        '    &lt;% } %&gt;\n' +
                        '    &lt;!-- 使用CDN的JS文件 --&gt;\n' +
                        '\n' +
                        '  &lt;/body&gt;\n' +
                        '&lt;/html&gt;</code></pre>\n' +
                        '<h4 class="my-blog-head" id="my-blog-head36">打包后抛到服务器上，打开开发者工具的network，如果看到<code>http</code>请求<code>cdn</code>，那么就代表配置成功了，如图所示</h4><p><img src="../assets/images/15263556-b8bc9ac693518ca6.png" alt="image.png"></p>\n' +
                        '<h2 class="my-blog-head" id="my-blog-head37">代码压缩</h2><h4 class="my-blog-head" id="my-blog-head38">先安装插件<code>npm i -D uglifyjs-webpack-plugin</code></h4><h4 class="my-blog-head" id="my-blog-head39">然后在最上方引入依赖</h4><pre><code class="language-javascript">// 代码压缩\n' +
                        'const UglifyJsPlugin = require(&#39;uglifyjs-webpack-plugin&#39;)</code></pre>\n' +
                        '<h4 class="my-blog-head" id="my-blog-head40">在<code>configureWebpack</code>模块中引入代码压缩</h4><pre><code class="language-javascript">// 代码压缩\n' +
                        'config.plugins.push(\n' +
                        '    new UglifyJsPlugin({\n' +
                        '        uglifyOptions: {\n' +
                        '            //生产环境自动删除console\n' +
                        '            compress: {\n' +
                        '                drop_debugger: true,\n' +
                        '                drop_console: true,\n' +
                        '                pure_funcs: [&#39;console.log&#39;]\n' +
                        '            }\n' +
                        '        },\n' +
                        '        sourceMap: false,\n' +
                        '        parallel: true\n' +
                        '    })\n' +
                        ')</code></pre>\n' +
                        '<h2 class="my-blog-head" id="my-blog-head41">公共代码抽离，写在<code>configureWebpack</code>模块中</h2><pre><code class="language-javascript">// 公共代码抽离\n' +
                        'config.optimization = {\n' +
                        '    splitChunks: {\n' +
                        '        cacheGroups: {\n' +
                        '            vendor: {\n' +
                        '                chunks: &#39;all&#39;,\n' +
                        '                test: /node_modules/,\n' +
                        '                name: &#39;vendor&#39;,\n' +
                        '                minChunks: 1,\n' +
                        '                maxInitialRequests: 5,\n' +
                        '                minSize: 0,\n' +
                        '                priority: 100\n' +
                        '            },\n' +
                        '            common: {\n' +
                        '                chunks: &#39;all&#39;,\n' +
                        '                test: /[\\\\/]src[\\\\/]js[\\\\/]/,\n' +
                        '                name: &#39;common&#39;,\n' +
                        '                minChunks: 2,\n' +
                        '                maxInitialRequests: 5,\n' +
                        '                minSize: 0,\n' +
                        '                priority: 60\n' +
                        '            },\n' +
                        '            styles: {\n' +
                        '                name: &#39;styles&#39;,\n' +
                        '                test: /\\.(sa|sc|c)ss$/,\n' +
                        '                chunks: &#39;all&#39;,\n' +
                        '                enforce: true\n' +
                        '            },\n' +
                        '            runtimeChunk: {\n' +
                        '                name: &#39;manifest&#39;\n' +
                        '            }\n' +
                        '        }\n' +
                        '    }\n' +
                        '}</code></pre>\n' +
                        '<h2 class="my-blog-head" id="my-blog-head42">图片压缩</h2><h3 class="my-blog-head" id="my-blog-head43">使用图片压缩插件</h3><h5 class="my-blog-head" id="my-blog-head44">先安装插件<code>npm install image-webpack-loader --save-dev</code></h5><h5 class="my-blog-head" id="my-blog-head45">在<code>chainWebpack</code>中新增以下代码</h5><pre><code class="language-javascript">// ============压缩图片 start============\n' +
                        'config.module\n' +
                        '    .rule(&#39;images&#39;)\n' +
                        '    .use(&#39;image-webpack-loader&#39;)\n' +
                        '    .loader(&#39;image-webpack-loader&#39;)\n' +
                        '    .options({ bypassOnDebug: true })\n' +
                        '    .end()\n' +
                        '// ============压缩图片 end============</code></pre>\n' +
                        '<h5 class="my-blog-head" id="my-blog-head46">所以最终的配置如下</h5><pre><code class="language-javascript">// 是否为生产环境\n' +
                        'const isProduction = process.env.NODE_ENV !== &#39;development&#39;;\n' +
                        '\n' +
                        '// 代码压缩\n' +
                        'const UglifyJsPlugin = require(&#39;uglifyjs-webpack-plugin&#39;)\n' +
                        '\n' +
                        '// gzip压缩\n' +
                        'const CompressionWebpackPlugin = require(&#39;compression-webpack-plugin&#39;)\n' +
                        '\n' +
                        '// 本地环境是否需要使用cdn\n' +
                        'const devNeedCdn = false\n' +
                        '\n' +
                        '// cdn链接\n' +
                        'const cdn = {\n' +
                        '    // cdn：模块名称和模块作用域命名（对应window里面挂载的变量名称）\n' +
                        '    externals: {\n' +
                        '        vue: &#39;Vue&#39;,\n' +
                        '        vuex: &#39;Vuex&#39;,\n' +
                        '        &#39;vue-router&#39;: &#39;VueRouter&#39;,\n' +
                        '        &#39;marked&#39;: &#39;marked&#39;,\n' +
                        '        &#39;highlight.js&#39;: &#39;hljs&#39;,\n' +
                        '        &#39;nprogress&#39;: &#39;NProgress&#39;\n' +
                        '    },\n' +
                        '    // cdn的css链接\n' +
                        '    css: [\n' +
                        '        &#39;https://cdn.bootcss.com/nprogress/0.2.0/nprogress.min.css&#39;\n' +
                        '    ],\n' +
                        '    // cdn的js链接\n' +
                        '    js: [\n' +
                        '        &#39;https://cdn.bootcss.com/vue/2.6.10/vue.min.js&#39;,\n' +
                        '        &#39;https://cdn.bootcss.com/vuex/3.1.2/vuex.min.js&#39;,\n' +
                        '        &#39;https://cdn.bootcss.com/vue-router/3.1.3/vue-router.min.js&#39;,\n' +
                        '        &#39;https://cdn.bootcss.com/marked/0.8.0/marked.min.js&#39;,\n' +
                        '        &#39;https://cdn.bootcss.com/highlight.js/9.18.1/highlight.min.js&#39;,\n' +
                        '        &#39;https://cdn.bootcss.com/nprogress/0.2.0/nprogress.min.js&#39;\n' +
                        '    ]\n' +
                        '}\n' +
                        '\n' +
                        'module.exports = {\n' +
                        '    productionSourceMap: false,\n' +
                        '    chainWebpack: config =&gt; {\n' +
                        '        // ============注入cdn start============\n' +
                        '        config.plugin(&#39;html&#39;).tap(args =&gt; {\n' +
                        '            // 生产环境或本地需要cdn时，才注入cdn\n' +
                        '            if (isProduction || devNeedCdn) args[0].cdn = cdn\n' +
                        '            return args\n' +
                        '        })\n' +
                        '        // ============注入cdn start============\n' +
                        '\n' +
                        '        // ============压缩图片 start============\n' +
                        '        config.module\n' +
                        '            .rule(&#39;images&#39;)\n' +
                        '            .use(&#39;image-webpack-loader&#39;)\n' +
                        '            .loader(&#39;image-webpack-loader&#39;)\n' +
                        '            .options({ bypassOnDebug: true })\n' +
                        '            .end()\n' +
                        '        // ============压缩图片 end============\n' +
                        '    },\n' +
                        '    configureWebpack: config =&gt; {\n' +
                        '        // 用cdn方式引入，则构建时要忽略相关资源\n' +
                        '        if (isProduction || devNeedCdn) config.externals = cdn.externals\n' +
                        '\n' +
                        '        // 生产环境相关配置\n' +
                        '        if (isProduction) {\n' +
                        '            //gzip压缩\n' +
                        '            const productionGzipExtensions = [&#39;html&#39;, &#39;js&#39;, &#39;css&#39;]\n' +
                        '            config.plugins.push(\n' +
                        '                new CompressionWebpackPlugin({\n' +
                        '                    filename: &#39;[path].gz[query]&#39;,\n' +
                        '                    algorithm: &#39;gzip&#39;,\n' +
                        '                    test: new RegExp(\n' +
                        '                        &#39;\\\\.(&#39; + productionGzipExtensions.join(&#39;|&#39;) + &#39;)$&#39;\n' +
                        '                    ),\n' +
                        '                    threshold: 10240, // 只有大小大于该值的资源会被处理 10240\n' +
                        '                    minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理\n' +
                        '                    deleteOriginalAssets: false // 删除原文件\n' +
                        '                })\n' +
                        '            )\n' +
                        '\n' +
                        '            // 代码压缩\n' +
                        '            config.plugins.push(\n' +
                        '                new UglifyJsPlugin({\n' +
                        '                    uglifyOptions: {\n' +
                        '                        //生产环境自动删除console\n' +
                        '                        compress: {\n' +
                        '                            drop_debugger: true,\n' +
                        '                            drop_console: true,\n' +
                        '                            pure_funcs: [&#39;console.log&#39;]\n' +
                        '                        }\n' +
                        '                    },\n' +
                        '                    sourceMap: false,\n' +
                        '                    parallel: true\n' +
                        '                })\n' +
                        '            )\n' +
                        '        }\n' +
                        '\n' +
                        '        // 公共代码抽离\n' +
                        '        config.optimization = {\n' +
                        '            splitChunks: {\n' +
                        '                cacheGroups: {\n' +
                        '                    vendor: {\n' +
                        '                        chunks: &#39;all&#39;,\n' +
                        '                        test: /node_modules/,\n' +
                        '                        name: &#39;vendor&#39;,\n' +
                        '                        minChunks: 1,\n' +
                        '                        maxInitialRequests: 5,\n' +
                        '                        minSize: 0,\n' +
                        '                        priority: 100\n' +
                        '                    },\n' +
                        '                    common: {\n' +
                        '                        chunks: &#39;all&#39;,\n' +
                        '                        test: /[\\\\/]src[\\\\/]js[\\\\/]/,\n' +
                        '                        name: &#39;common&#39;,\n' +
                        '                        minChunks: 2,\n' +
                        '                        maxInitialRequests: 5,\n' +
                        '                        minSize: 0,\n' +
                        '                        priority: 60\n' +
                        '                    },\n' +
                        '                    styles: {\n' +
                        '                        name: &#39;styles&#39;,\n' +
                        '                        test: /\\.(sa|sc|c)ss$/,\n' +
                        '                        chunks: &#39;all&#39;,\n' +
                        '                        enforce: true\n' +
                        '                    },\n' +
                        '                    runtimeChunk: {\n' +
                        '                        name: &#39;manifest&#39;\n' +
                        '                    }\n' +
                        '                }\n' +
                        '            }\n' +
                        '        }\n' +
                        '    }\n' +
                        '}</code></pre>\n' +
                        '<h3 class="my-blog-head" id="my-blog-head47">将静态资源存储在云端，个人用的七牛云,对象存储用于存储文件，使用<code>cdn</code>加速让存储的静态资源访问速度更快。<code>(推荐，速度能快挺多)</code></h3><h5 class="my-blog-head" id="my-blog-head48">我个人申请了七牛云，实名认证就有10G空间可用，每个月有10G的免费流量，不过不绑定域名的话只有30天体验机会，我是绑定了我的域名进行DNS解析中转，具体的操作可以参考这一篇博客，<a href="https://www.cnblogs.com/mazhichu/p/12206785.html">https://www.cnblogs.com/mazhichu/p/12206785.html</a></h5><h2 class="my-blog-head" id="my-blog-head49"><code>nginx</code>配置缓存</h2><h4 class="my-blog-head" id="my-blog-head50">在nginx.conf的http模块中写入一下内容,（虽然这点有点偏离前端打包主题了，但是对于自己独立开发个人博客网站的前端来说还是非常有用的！）</h4><pre><code class="language-javascript">     # 设置缓存路径并且使用一块最大100M的共享内存，用于硬盘上的文件索引，包括文件名和请求次数，每个文件在1天内若不活跃（无请求）则从硬盘上淘汰，硬盘缓存最大10G，满了则根据LRU算法自动清除缓存。\n' +
                        '    proxy_cache_path /var/cache/nginx/cache levels=1:2 keys_zone=imgcache:100m inactive=1d max_size=10g;</code></pre>\n' +
                        '<h4 class="my-blog-head" id="my-blog-head51">然后在nginx.conf的serve模块中写入一下内容，保存配置，<code>nginx -s reload</code>重启服务即可看到效果</h4><pre><code class="language-javascript">location ~* ^.+\\.(css|js|ico|gif|jpg|jpeg|png)$ {\n' +
                        ' log_not_found off;\n' +
                        ' # 关闭日志\n' +
                        ' access_log off;\n' +
                        ' # 缓存时间7天\n' +
                        ' expires 7d;\n' +
                        ' # 源服务器\n' +
                        ' proxy_pass http://localhost:8888;\n' +
                        ' # 指定上面设置的缓存区域\n' +
                        ' proxy_cache imgcache;\n' +
                        ' # 缓存过期管理\n' +
                        ' proxy_cache_valid 200 302 1d;\n' +
                        ' proxy_cache_valid 404 10m;\n' +
                        ' proxy_cache_valid any 1h;\n' +
                        ' proxy_cache_use_stale error timeout invalid_header updating http_500 http_502 http_503 http_504;\n' +
                        ' }</code></pre>\n' +
                        '<h4 class="my-blog-head" id="my-blog-head52">本文主要参考于<a href="https://www.jianshu.com/p/476387c7fea3">https://www.jianshu.com/p/476387c7fea3</a></h4>'
                }
            }
        ];

        openMenu(){
            this.setMobileNav(true);
        }

        mounted(){
            if(this.dataList.findIndex(x=>x.id===this.$route.query.id)===-1){
                this.$router.push('/notFound');
            }else{
                this.article=this.dataList[this.dataList.findIndex(x=>x.id===this.$route.query.id)].article;
            }
        }

    }
</script>

<style lang="stylus" scoped>
    @import "../stylus/color.styl"

    #power-star{
        width 100%
        padding: 30px 10px
        .power-star-main{
            max-width 1024px
            margin 0 auto
            .power-star-warp{
                width 100%
                padding 30px
                position: relative
                animation: show .8s
                background-color: $color-white
                box-shadow: 0 0 5px 0 rgba(38, 42, 48, .1)
                @media (max-width: 768px){
                    padding 30px 15px
                }
                .power-star-title{
                    text-align center
                    font-size: 26px
                    padding-top 10px
                    font-weight bold
                    color $color-title
                    @media (max-width 768px){
                        font-size: 22px
                        font-weight bold
                    }
                }
                .power-star-info{
                    text-align center
                    font-size: 14px
                    padding-top 10px
                    color $color-light-gary
                    padding-bottom 30px
                    @media (max-width 768px){
                        font-size: 12px
                        padding-bottom 20px
                    }
                    .icon-rili{
                        margin-right 6px
                        font-size 12px
                        @media (max-width 768px){
                            font-size: 10px
                        }
                    }
                }
            }
        }
        .bottom-menu{
            position: fixed
            width: 24px
            border-radius 4px
            height: 24px
            background-color: $color-main
            right: 10px
            bottom: 50px
            padding: 5px
            z-index: 1050
            cursor: pointer
            display flex
            align-items center
            justify-content center
            color $color-white
            .iconfont{
                font-size 14px
            }
        }
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