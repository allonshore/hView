<template>
    <div class="col" :class="[`col-${span}`,offset && `offset-${offset}`]"
     :style="{paddingLeft: gutter/2+'px',paddingRight:gutter/2+'px'}">
        <div style="border: 1px solid green;height:100px">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: "hongboCol",
        props: {
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            }
        },
        data(){
            return{
                gutter: 0
            }
        },
        created() {
        },
        mounted() {
        }
    }
</script>
<style lang="scss" scoped>
    .col {
        height: 100px;
        /*background: grey;*/
        width: 50%;
        /*border: 1px solid red;*/
        padding: 0 10px;
        $class: col- ;
        //循环1到24
        @for $n from 1 through 24 {
            // for each $col_#{i}
            &.#{$class}#{$n} {
                width: ($n /24) *100%;
            }
        }
        $class-prefix: offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n /24) *100%;
            }
        }
    }
</style>