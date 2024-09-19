<template>

    <div class="basket" v-if="show" @click="hideBasket">
        <div @click.stop class="basket_content">
            <slot></slot>
        </div>

    </div>
</template>


<script >


export default {
  props:{
    show:{
        type: Boolean,
        default: false
    }
  },
  methods:{
    hideBasket(){
        this.$emit('update:show', false)
    }

  }

}
</script>


<style scoped>
    .basket{
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        display: flex;
        z-index: 10;

    }
    .basket_content{
        margin: auto;
        background: rgb(253, 249, 249);
        border-radius: 12px;
        min-height: 600px;
        min-width: 600px;
    }
    .h2{
        padding: 20px;
        display: block;
    }
</style>