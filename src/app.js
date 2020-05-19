import Vue from 'vue';
import Button from './button';
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input.vue'
import Row from './row.vue';
import Col from './col.vue'
Vue.component("g-button",Button);
Vue.component("g-icon",Icon);
Vue.component("g-button-group",ButtonGroup);
Vue.component("g-input",Input);
Vue.component("g-row",Row);
Vue.component("g-col",Col);
new Vue({
    el:"#app",
    data:{
        loading1:false,
        message:""
    },
    methods:{
        inputChange(e){
            console.log(e.target.value)
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