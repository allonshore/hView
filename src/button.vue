<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
        <!--<svg v-if="icon" class="icon">-->
            <!--<use :xlink:href="`#i-${icon}`"></use>-->
        <!--</svg>-->
        <g-icon class="icon" v-if="icon &&  !loading" :name="icon" ></g-icon>
        <!--<g-icon class="loading" v-if="icon && !loading" name="loading"></g-icon>-->
        <g-icon class="icon loading" v-if="loading" name="loading"></g-icon>
        <div class="content">
             <slot></slot>
        </div>
    </button>


</template>

<script>
    import Vue from 'vue';
    import Icon from './icon';
    Vue.component('g-icon',Icon);
    export default {
        // props:['icon','iconPosition']
        props:{
            icon:{},
            loading:{
                type:Boolean,
                default: false,
            },
            iconPosition:{
                type:String,
                default:'left',
                validator(value){  //属性检查器
                    return value === "left" || value === "right"
                }
            }
        },
        methods:{
        }
    }
</script>

<style lang="scss">
    @keyframes spin {
        0%{transform:rotate(0deg);}
        100%{transform:rotate(360deg);}
    }
    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 .7em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        vertical-align: top;//上下不对齐的 就加这个  不要深究
        display: inline-flex;
        justify-content: center;
        align-items: center;
        &:hover {
            border-color: var(--border-color-hover);
        }
        &:active {
            background: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
        > .icon{order: 1;margin-right: .3em;}
        > .content{order: 2;}
        &.icon-right{
            > .icon{order: 2;margin-left: .3em;margin-right: .3em;}
            > .content{order: 1;}
        }
        .loading{
            animation: spin 1s infinite linear;
        }
    }

</style>