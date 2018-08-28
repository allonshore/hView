<template>
    <div class="g-button-group">
       <slot></slot>
    </div>
</template>

<script>
    export default {
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