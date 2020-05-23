import Toast from './toast';

let currentToast 

export default{
    install(Vue,options){
        Vue.prototype.$toast = function(message,toastOptions){
            //如果当前存在一个toast 就关闭
            console.log(currentToast)
            if(currentToast){
                console.log(111)
                currentToast.close()
            }
            currentToast = createToast({Vue,
                message,
                propsData:toastOptions,
            onClose:()=>{
                currentToast = null
            }})
        }
    }
}
























function createToast({Vue,message,propsData,onClose}){
    let Constructor = Vue.extend(Toast);
    let toast = new Constructor({propsData});
    toast.$slots.default = [message];
    toast.$mount();
    toast.$on('close',onclose)
    document.body.appendChild(toast.$el)

    return toast;
}
