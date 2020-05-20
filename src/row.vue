<template>
    <div class="row" :style="rowStyle">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:"HongboRow",
    props:{
        gutter:{
            type:[Number,String]
        }
    },
    created() {
        console.log(this.$children)//没有儿子

    },
    computed: {
        rowStyle(){
            let {gutter} = this
            return {marginLeft: -gutter/2+'px',marginRight: -gutter/2+'px'}
        }
    },
    mounted() {
       console.log(this.$children)
        //将gutter传到每个子组件了
        this.$children.forEach((vm)=>{
            vm.gutter = this.gutter
        })
    }
}
 // var div = document.createElement('div')//created 内存中创建出来
 // var childDiv = document.createElement('div')//child created 内存中创建出来
 // div.appendChild(childDiv) //child mounted
 // document.body.appendChild(div)//mounted
</script>
<style lang="scss" scoped>
.row{
    display: flex;
    /* row补足col左右边框   */
}
</style>