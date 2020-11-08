const state = ({      //state里面存放的是变量，如果你要注册全局变量，写这里
    articleMenuSource: [],
    articleMenuTag: '1.',
    articleMenu:false
});

const getters = {                //getters相当于是state的计算属性，如果你需要将变量的值进行计算，然后输出，写这里
    articleMenu(state: any) {
        return state.articleMenu
    },
    articleMenuTag(state: any) {
        return state.articleMenuTag
    },
    articleMenuSource(state: any) {
        return state.articleMenuSource
    }
};

const mutations = {       //修改store中的变量的方法，如果你要改变变量的值，就写这里
    SET_articleMenuSource(state:any, value:Array<any>) {
        state.articleMenuSource = value;
    },
    SET_articleMenuTag(state:any, value:string) {
        state.articleMenuTag = value;
    },
    SET_articleMenu(state:any, value:boolean) {
        state.articleMenu = value;
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