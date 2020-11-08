import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueRouter);

NProgress.inc(0.2);
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false });

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '*',
    redirect: '/notFound'
  },
  {
    path: '/AppLayout',
    name: 'AppLayout',
    component: () => import(/* webpackChunkName: "MainLayout" */ '../layout/AppLayout.vue'),
    meta: {
      title: 'App布局',
      keepAlive: true,
    },
    children: [
      {
        path: '/MainLayout',
        name: 'MainLayout',
        component: () => import(/* webpackChunkName: "MainLayout" */ '../layout/MainLayout.vue'),
        meta: {
          title:'主布局',
          keepAlive: true,
        },
        children:[
          {
            path: '/about',
            name: 'About',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
            meta:{
              title:'关于',
              keepAlive:false,
              flag:'About'
            }
          },
          {
            path: '/power',
            name: 'Power',
            component: () => import(/* webpackChunkName: "power" */ '../views/Power.vue'),
            meta:{
              title:'技术',
              keepAlive:false,
              flag:'Power'
            }
          },
          {
            path: '/notFound',
            name: 'NotFound',
            component: () => import(/* webpackChunkName: "notFound" */ '../views/NotFound.vue'),
            meta:{
              title:'NotFound',
              keepAlive:false,
              flag:'Logo'
            }
          },
          {
            path: '/mood',
            name: 'Mood',
            component: () => import(/* webpackChunkName: "mood" */ '../views/Mood.vue'),
            meta:{
              title:'心情',
              keepAlive:false,
              flag:'Mood'
            }
          },
          {
            path: '/note',
            name: 'Note',
            component: () => import(/* webpackChunkName: "note" */ '../views/Note.vue'),
            meta:{
              title:'随笔',
              keepAlive:false,
              flag:'Note'
            }
          },
          {
            path: '/powerStar',
            name: 'PowerStar',
            component: () => import(/* webpackChunkName: "power" */ '../views/PowerStar.vue'),
            meta:{
              title:'技术博客详情',
              keepAlive:false,
              flag:'Power'
            }
          },
          {
            path: '/powerMaker',
            name: 'PowerMaker',
            component: () => import(/* webpackChunkName: "write" */ '../views/PowerMaker.vue'),
            meta:{
              title:'技术博客编辑',
              keepAlive:false,
              flag:'Power'
            }
          },
          {
            path: '/Magic',
            name: 'Magic',
            component: () => import(/* webpackChunkName: "magic" */ '../views/Magic.vue'),
            meta:{
              title:'魔法秀',
              keepAlive:false,
              flag:'Magic'
            }
          },
          {
            path: '/LineIn',
            name: 'LineIn',
            component: () => import(/* webpackChunkName: "magicDetail" */ '../components/Pages/LineInPage.vue'),
            meta:{
              title:'魔法秀',
              keepAlive:false,
              flag:'Magic'
            }
          },
        ]
      },
      {
        path: '/BackgroundLayout',
        name: 'BackgroundLayout',
        component: () => import(/* webpackChunkName: "home" */ '../layout/BackgroundLayout.vue'),
        meta: {
          title:'透明背景布局',
          keepAlive: true,
        },
        children:[
          {
            path: '/home',
            name: 'Home',
            component: Home,
            meta:{
              title:'首页',
              keepAlive:true,
              flag:'Home'
            }
          },
        ]
      },
    ]
  },
];

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {       //每次页面返回顶部
    if (savedPosition) {
      return savedPosition;
    } else {
      return {x: 0, y: 0};
    }
  },
});


router.beforeEach((to,from,next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router

