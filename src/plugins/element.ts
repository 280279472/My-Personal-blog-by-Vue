import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
// @ts-ignore
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
import {
    Message,
    Row,
    Col,
    Drawer
} from 'element-ui'


Vue.use(Row);
Vue.use(Col);
Vue.use(Drawer);
Vue.component(CollapseTransition.name, CollapseTransition);


Vue.prototype.$message = Message;
