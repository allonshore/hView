<template>
    <div class="toast">
      <slot></slot>
    </div>
</template>
<script>
export default {
    name:"HongboToast"
}
</script>
<style lang="scss" scoped>
.toast{
    border:1px solid red;
}
</style>