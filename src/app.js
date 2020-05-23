import Vue from 'vue';
import Button from './button';
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input.vue'
import Row from './row.vue';
import Col from './col.vue'
import Layout from './layout.vue'
import Header from './header.vue'
import Sider from './sider.vue'
import Content from './content.vue'
import Footer from './footer.vue'
import plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from  './tabs-body'
import TabsItem from './tabs-item'
import TabsPana from './tabs-pane'
import tabs from "./tabs";

Vue.component("g-button",Button);
Vue.component("g-icon",Icon);
Vue.component("g-button-group",ButtonGroup);
Vue.component("g-input",Input);
Vue.component("g-row",Row);
Vue.component("g-col",Col);

Vue.component("g-layout",Layout);
Vue.component("g-header",Header);
Vue.component("g-sider",Sider);
Vue.component("g-content",Content);
Vue.component("g-footer",Footer);

Vue.component("g-tabs",tabs);
Vue.component("g-tabs-head",TabsHead);
Vue.component("g-tabs-body",TabsBody);
Vue.component("g-tabs-item",TabsItem);
Vue.component("g-tabs-pana",TabsPana);


Vue.use(plugin)
new Vue({
    el:"#app",
    data:{
        loading1:false,
        message:""
    },
    methods:{
        toastMessage(){
           this.$toast("<p>sss</p><strong>34532543</strong>",{
              enableHtml:false,
              position:'middle'
           })
        }
    }
});

//单元测试
// {
//     const Constructor = Vue.extend(Button);
//     const button = new Constructor({
//       propsData:{
//           icon:'setting'
//       }
//     })
//     button.$mount('#test');
//     let useElement = button.$el.querySelector('use');

// }