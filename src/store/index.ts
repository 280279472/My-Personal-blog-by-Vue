import Vue from 'vue'
import Vuex from 'vuex'

import article from './modules/article'
import base from './modules/base'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    article,
    base
  }
})
