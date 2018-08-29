import Vue from 'vue';
import Button from './button';
import Icon from './icon'
import ButtonGroup from './button-group'
Vue.component("g-button",Button);
Vue.component("g-icon",Icon);
Vue.component("g-button-group",ButtonGroup);
new Vue({
    el:"#app",
    data:{
        loading1:false
    }
});

//单元测试
{
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
      propsData:{
          icon:'setting'
      }
    })
    button.$mount('#test');
    let useElement = button.$el.querySelector('use');

}