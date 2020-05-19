<template>
    <div class="col">
      <slot></slot>
    </div>
</template>
<script>
export default {
    name:"hongboCol",
    props:{
      span:Number
    }
}
</script>
<style lang="scss" scoped>
.col{
  height: 100px;
  background: grey;
  width: 50%;
  border: 1px solid red;

  $class: col- ;
  //循环1到24
  @for $n from 1 through 24{
      // for each $col_#{i}
      &.#{$class}#{$n}{
        width: ($n /24) *100%;
      }
  }
}
</style>