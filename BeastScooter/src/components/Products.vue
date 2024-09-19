<script setup>

const imgUrls = import.meta.glob('../img/*.png', {
  import: 'default',
  eager: true
})

</script>


<script >


export default {
  props: {
    info: {
        type: Array,
        required: true,
    },
    userdetails: {
      type: Array,
      required: true
    }
    
  },
  data(){
      return{
        country: 0,
        
      }
  },

  methods:{
      addProduct(product){
        this.$emit('add', product)
      },
      isAddedChange(productdetail){
        this.$emit('isAddedChange', productdetail)
      },
      searchLikeProduct(id){
        for(let i = 0; i < this.userdetails.length; i++){
          if(this.userdetails[i].product.id == id)
            return this.userdetails[i]
        }
      }
  }

}
</script>



<template>
  <div  class="katalog">
    <div v-if = "info != null"  class="cards">
    <div id="section-6" >
        <div v-for = "product in info" :key="product.id" class="card6">
          <div class="imgBox">
              <img v-show = "product.quantity > 0" @click="isAddedChange(searchLikeProduct(product.id))"  :src= "!(searchLikeProduct(product.id)).isAdded ? imgUrls[`../img/heart1.png`] : imgUrls[`../img/heart2.png`]" class="like"/>
              <img src= "@/img/katsamokat (5).png" class="trade"/>
              
          </div>
          <transition-group name="product-list">
          <div v-if = "product.quantity > 0" class="contentBox">
            <h4> {{ product.title }} </h4>
            <h2 class="price">{{ product.price }}₽</h2>

            <div class="cards btn-group">
              <button v-if="product.orderQuantity != 0" @click="product.orderQuantity--" type="button" class="btn btn-primary">-</button>
              <button v-else type="button" class="btn btn-primary" disabled="disabled">-</button>
              <div type="" class="btn btn-primary"  ><strong >{{ product.orderQuantity}}</strong></div>
              <button v-if="product.orderQuantity < product.quantity" @click="product.orderQuantity++" type="button" class="btn btn-primary">+</button>
            </div>
            <button class="buy" type="submit" @click="addProduct(product)">Купить</button>
            
          </div>
          <h2 v-else class="contentBox"> Товар закончился! </h2>
        </transition-group>
          
        </div>
  
    </div>
    </div>
    <h2 v-else class="contentBox"> Каталог товаров пуст! </h2> 
  </div>
</template>

<style scoped>

.like{
  max-width: 30px;
  margin-block-end: auto;
  color: aqua;
  cursor: pointer;
  
}

.product-list-item{
  display: inline-block;
  margin-right: 10px;
}

.product-list-enter-active,
.product-list-leave-active{
  transition: all 1s ease;
}
.product-list-enter-from,
.product-list-leave-to{
  opacity: 0;
  transform: translateY(30px);
}

.btn .btn-primary{
  height: 40px;
  widows: 20px;
}

</style>

