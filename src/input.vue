<template>
     <div class="wrapper" :class="{'error':error}">
         <input :value="value" :disabled="disabled" :readonly="readonly"  type="text"
          @change="$emit('change',$event.target.value)" 
          @input="$emit('input',$event.target.value)"/>
         <template v-if="error">
           <icon name="setting" class="icon-error"></icon>
           <span>{{error}}</span>
         </template>
         
     </div>
</template>
<script>
import Icon from './icon'
export default {
    components:{Icon},
   name:'hongboInput',
   props:{
       value:{
           type:String
       },
       disabled:{
           type:Boolean,
           default:false
       },
       readonly:{
           type:Boolean,
           default:false
       },
       error:{
           type:String
       }
   }
}
</script>
<style lang="scss" scope>
$height:32px;
$border-color:#999;
$border-color-hover:#666;
$font-size:12px;
$box-shadow-color:rgba(0,0,0,0.5);
$red:#F14530;
.wrapper{
    font-size: $font-size;
    display: inline-flex;
    align-items: center;
    > :not(:last-child){
        margin-right: 0.5em;
      
    }
    > input{
       height: 32px;
       border: 1px solid $border-color;
       border-radius: 4px;
       padding: 0 8px;
       &:hover{
           border-color:$border-color-hover;
       }
       &:focus{
           box-shadow: inset 0 1px 3px $box-shadow-color;
           outline: none;  //去掉蓝色
       }
       &[disabled],&[readonly]{
           border-color:#333 ;
           color:#333;
           cursor: not-allowed;
       }
    }
    &.error{
        > input{
            border-color: $red;
        }
    }
    .icon-error{
        fill: $red;
    }

}
</style>