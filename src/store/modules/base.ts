import {ScreenInterface} from "@/interface";

const state = ({      //state里面存放的是变量，如果你要注册全局变量，写这里
    blogName:'CoolDream',
    author:'凉梦',
    screen:{
        width:0,
        height:0
    },
    isPc:true,
    mobileNav:false,
    tipShow:false
});

const getters = {
    screen (state:any) {
        return state.screen
    },
    isPc (state:any) {
        return state.isPc
    },
    mobileNav (state:any) {
        return state.mobileNav
    },
};




const mutations = {       //修改store中的变量的方法，如果你要改变变量的值，就写这里
    SET_screen(state:any, value:ScreenInterface) {
        state.screen = value;
    },
    SET_isPc(state:any, value:boolean) {
        state.isPc = value;
    },
    SET_mobileNav(state:any, value:boolean) {
        state.mobileNav = value;
    },
    SET_tipShow(state:any, value:boolean) {
        state.tipShow = value;
    },
};

/*const actions = {            //actions提交的是mutations，相当于就是改变变量的方法的重写，但是，actions是可以进行异步操作的，即相当于promise中的then和catch

  async setIsPc({state, commit}, val) {

    commit('SET_isPc', val);

  }

};*/

export default {
    namespaced:true,            //命名空间
    state,            //这里你用到了哪几个属性就写哪几个，不需要的可以注释掉
    getters,
    // actions,
    mutations

};