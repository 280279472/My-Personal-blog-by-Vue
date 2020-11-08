// @ts-ignore
import marked from 'marked'

let renderer = new marked.Renderer();

let index = 0;
renderer.heading = function (text:any, level:number) {
    return `<h${level} class="my-blog-head" id="my-blog-head${index++}">${text}</h${level}>`
};

marked.setOptions({
    gfm: true,
    pedantic: false,
    sanitize: false,
    // @ts-ignore
    tables: true,
    breaks: true,
    smartLists: true,
    smartypants: true
})

export function markdown (str:any) {
    return marked(str, { renderer: renderer })
}
