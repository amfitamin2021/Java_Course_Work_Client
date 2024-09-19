
<script setup>

import Products from "@/components/Products.vue"
import Headervue from '@/components/Header-vue.vue'
import Stylesheet from '@/components/Style-sheet.vue'
import Intro from '@/components/In-tro.vue'
import TitleKatalog from "@/components/TitleKatalog.vue"
import Basket from "@/components/Basket.vue"
import BasketProducts from "@/components/BasketProducts.vue"
import Confirmation from "@/components/Confirmation.vue"
import { ref } from 'vue';

import axios from 'axios'
</script>



<template>
<div>

  <Headervue @showBasket="loadBasket" v-bind:basketproducts="basketproducts"></Headervue>
  <Stylesheet></Stylesheet>
  <Intro></Intro>
  <TitleKatalog @onChangeSelect="onChangeSelect"></TitleKatalog>
  <Products v-bind:userdetails="userdetails"  v-bind:info="info" @add="sendProduct" @isAddedChange="isAddedChange"></Products>
  <Basket v-model:show="basketVisible" >
    <BasketProducts 
    v-bind:basketproducts="basketproducts"  
    @deleteProductBasket="deleteProductBasket" 
    @addProductBasket="addProductBasket"
    @deleteAllProductBasket="deleteAllProductBasket"
    v-bind:userdetails="userdetails"
    @isAddedChange="isAddedChange"
    />
    
  </Basket>

  <Confirmation v-model:show="confirmationVisible"></Confirmation>
  
</div>


</template>


<script >  
  const componentKey = ref([]);
  export default {
    data(){
      return{
        info:[],
        userdetails:[],
        basketproducts:[],
        basketVisible: false,
        confirmationVisible: false,
        
        selectedsort: ''

      }
  },


    

  
  
    async mounted() { 

      console.log("Получение избранных продуктов(mounted)")
      await axios.get('http://192.168.1.125:8080/todos/user/1')
        .then(res => (this.userdetails = res.data))


      console.log("Получение каталога товаров(mounted)")
      await axios.get('http://192.168.1.125:8080/product')
        .then(res => (this.info = res.data))

      console.log("Получение содержимого корзины(mounted)")
      await axios.get('http://192.168.1.125:8080/basket/1')
        .then(res => (this.basketproducts = res.data))

        
    },

    watch: {
      selectedsort(newValue){
        try{ 
          axios.get('http://192.168.1.125:8080/product/' + newValue).then( res => this.info = res.data)
          console.log(this.info)
        } catch (err) {
          console.log(err)
        }
      },


    },


    

    methods:{


      async sendProduct(product){
        console.log("Отправление запроса на добавление товара в корзину(function(id, quantity))")
        await axios.post("http://192.168.1.125:8080/basket/1/" + product.id + "/" + product.orderQuantity)
        .then((response) => {console.log(response.status)});

        await this.GetProductBasket()
        product.orderQuantity = 0
        this.loadConfirm()

      },

      async addProductBasket(id){
        console.log("Отправление запроса на добавление товара в корзину(function(id))")
        await axios.post("http://192.168.1.125:8080/basket/1/" + id + "/" + '1')
          .then((response) => {console.log(response.status)});
        
        await this.GetProductBasket()

      },

      async deleteProductBasket(id){
        console.log("Отправление запроса на удаление продуктa из корзины(function)")
        await axios.delete(("http://192.168.1.125:8080/basket/1/" + id))
          .then((response) => {console.log(response.status)});
        await this.GetProductBasket()
      },

      async isAddedChange(productdetail){
        console.log("Отправление запроса на изменение избранных(function)")
        await axios.put('http://192.168.1.125:8080/todos/' + productdetail.user.id + "/" + productdetail.product.id)
        .then((response) => {console.log(response.status)});
        this.GetUserDetails()
      },

      async deleteAllProductBasket(id){
        console.log("Удаление всех продуктов в корзине(function)")
        await axios.delete(("http://192.168.1.125:8080/basket/all/1/" + id))
        .then((response) => {console.log(response.status)});
        await this.GetProductBasket()
      },

      async GetProductBasket(){
        console.log("Получение содержимого корзины(function)")
        await axios.get('http://192.168.1.125:8080/basket/1')
          .then(res => (this.basketproducts = res.data))
          
      },

      async GetUserDetails(){
        console.log("Получение содержимого избранных(function)")
        await axios.get('http://192.168.1.125:8080/todos/user/1')
        .then(res => (this.userdetails = res.data))
      },


      onChangeSelect(event){
        this.selectedsort = event.target.value
        console.log(this.selectedsort)
        
      },

      loadBasket(){
        this.basketVisible = true
      },

      loadConfirm(){
        this.confirmationVisible = true
      },

  }
  }



</script>
