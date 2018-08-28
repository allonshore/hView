<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
        <!--<svg v-if="icon" class="icon">-->
            <!--<use :xlink:href="`#i-${icon}`"></use>-->
        <!--</svg>-->
        <g-icon v-if="icon" :name="icon"></g-icon>
        <div class="content">
             <slot></slot>
        </div>
    </button>


</template>

<script>
    export default {
        // props:['icon','iconPosition']
        props:{
            icon:{},
            iconPosition:{
                type: String,
                default:'left',
                validator(value){  //属性检查器
                    if(value !== "left" || value !== "right"){
                        return false
                    }
                    return true;
                }
            }
        }
    }
</script>

<style lang="scss">
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
    }

</style>