<template>
    <div class="g-button-group">
       <slot></slot>
    </div>
</template>

<script>
    export default {
        mounted(){
            console.log(this.$el.children);
            for(let node of this.$el.children){  //做内部元素验证 避免用户乱搞
                console.log(node)
                if(node.nodeName.toLowerCase() !== 'button'){
                    console.warn(`g-button-group 的子元素应该全是 g-button,但是你写的是${node.nodeName.toLowerCase()}`)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
   .g-button-group{
       display: inline-flex;
       vertical-align: top;
       > .g-button{
           border-radius:0;
           /*&:not(:first-child){*/
               /*border-left:none;*/
           /*}*/
           margin-left: -1px;
           &:first-child{
               border-top-left-radius: var(--border-radius);
               border-bottom-left-radius: var(--border-radius);
           }
           &:last-child{
               border-top-right-radius: var(--border-radius);
               border-bottom-right-radius: var(--border-radius);
           }
           &:hover{  //鼠标再上面的时候出现完整的边框 hover起来了 0变1
               position: relative;
               z-index: 1;
           }
       }
   }
</style>