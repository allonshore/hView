<template>
    <div class="toast" ref="wraper">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
      <div class="line" ref="line"></div>
      <span v-if="closeButton" @click="onClickClose()">
          {{closeButton.text}}
      </span>
    </div>
</template>
<script>
export default {
    name:"HongboToast",
    props:{
        autoClose:{
            type:Boolean,
            default:true
        },
        autoCloseDelay:{
            type:Number,
            default:10
        },
        closeButton:{
            type:Object,
            default:()=>{
                return{
                 text:'关闭',callback:undefined
           }
          }
        },
        enableHtml:{
            type:Boolean,
            default:false
        }
    },
    mounted(){
        // if(this.autoClose){
        //     setTimeout(()=>{
        //       this.close()
        //     },this.autoCloseDelay * 1000)
        // }
        this.execAutoClose()
        this.updateStyles()
        //使用vue提供 时间差问题
        // this.$nextTick(()=>{
        //     this.$ref.line.style.height = `${this.$ref.wraper.getBoundingClientRect().height}px`
        // })
        // setTimeout(()=>{
        //     this.$ref.line.style.height = this.$ref.wraper.getBoundingClientRect().height
        // },1000)
        //如果眼睛看到不为0 js获取的为0 大部分是异步问题
    },
    methods:{
       updateStyles(){
          this.$nextTick(()=>{
            this.$ref.line.style.height = `${this.$ref.wraper.getBoundingClientRect().height}px`
        })
       },
       execAutoClose(){
          if(this.autoClose){
            setTimeout(()=>{
              this.close()
            },this.autoCloseDelay * 1000)
        }
       },
       close(){
           this.$el.remove(); //把自己元素消除掉
           this.$destroy();//把绑定的事件取消掉
       },
       onClickClose(){
           this.close()  //关闭自己
           if(this.closeButton && typeof this.closeButton.callback ==='function'){
               this.closeButton.callback()//回调
           }
           
       }
    }
}
</script>
<style lang="scss" scoped>
$font-size:14px;
$toast-height:40px;
.toast{
    font-size: $font-size;
    line-height: 1.8;
    min-height:$toast-height;
    // border:1px solid red;
    position: fixed;
    top:0;
    left: 50%;
    transform: translate(-50%);
     display: flex;
     align-items: center;
     background: rgba(0,0,0,0.75);
     color: white;
    //  justify-content: center;
    box-shadow: 0 0 3 0 rgba(0,0,0,0.50);
    padding: 0 16px;
}
.close{
   padding: 16px;
   flex-shrink:0 ;
}
.line{
    height: 100%;
    border-left:1px solid #666;
    margin-left: 16px;
}
</style>