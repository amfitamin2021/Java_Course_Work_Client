<template>

    <div class="confirm-modal" v-if="show" >
        <div @click.stop class="confirm_content">
            <slot></slot>
            <button class="btn btn-primary" @click="hideConfirm"><img src="@/img/crossed1.png" alt=""></button>
            <span class="confirm_text">Товар добавлен в корзину</span>
            
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
    hideConfirm(){
        console.log("Меня вызвали")
        this.$emit('update:show', false)
    }

  }

}
</script>


<style scoped>
    .confirm-modal{
        top: 85vh;
        bottom: 0;
        right: 0;
        left: auto;
        background: rgb(0, 0, 0);
        background: none;
        position: fixed;
        display: flex;
        z-index: 10;
        justify-content: center;
        align-items: center;

    }
    .confirm_content{
        margin: auto;
        opacity: 0.6;
        background: rgb(0, 0, 0);
        border-radius: 16px;
        padding: 10px;
        min-height: 30px;
        min-width: 200px;
    }
    .h2{
        padding: 20px;
        display: block;
    }

    .confirm_text{
        padding: 15px;
        margin: 20px;
        color: rgb(255, 255, 255);
        font-size: large;
    }

    .btn-primary{
        border-radius: 20px;
    }
    .btn-primary img{
        max-height: 30px;
    }
</style>