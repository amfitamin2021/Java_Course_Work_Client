<script setup>
const imgUrls = import.meta.glob('../img/*.png', {
  import: 'default',
  eager: true
})
</script>


<script>




export default {
  data() {
    return {
      text: 'Lorem ipsum, dolor sit amet consectetur ',
      arr2: [],
      totalamount: 0,
      countproducts: 0,

    }
  },
  
  props: {
    basketproducts: {
      type: Object,
      required: true
    },

    userdetails: {
      type: Array,
      required: true
    }
  },

  async mounted() {
    this.arr2 =  [...new Map(this.basketproducts.productList.map(item => [item['id'], item])).values()]
  },


  updated(){
    this.updateQuantity()
    this.UpdateTotalAmount()
    this.CountProducts()
  },



  methods: {

    hideBasket() {
      this.$emit('update:show', false)
    },

    addProductBasket(id){
        this.$emit('addProductBasket', id)
    },

    deleteProductBasket(id){
        this.$emit('deleteProductBasket', id)
    },

    deleteAllProductBasket(id){
      this.$emit('deleteAllProductBasket', id)
    },

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
    },

    updateQuantity(){
        for(let i = 0; i < this.arr2.length; i++){
        let count = 0
        for(let x = 0; x < this.basketproducts.productList.length; x++){
          if (this.arr2[i].id == this.basketproducts.productList[x].id){
            count++;
          }


        }
        this.arr2[i].orderQuantity = count
      }
      
    },

    UpdateTotalAmount(){
      let tempsum = 0;
      for(let i = 0; i < this.arr2.length; i++){
        tempsum += this.arr2[i].price * this.arr2[i].orderQuantity

      } 
      this.totalamount = tempsum


    },
    CountProducts(){
      let count = 0;
      for(let i = 0; i < this.arr2.length; i++){
        count += this.arr2[i].orderQuantity

      }
      this.countproducts = count

      
    },

    
  } 


}
</script>



<template>
  <div class="basket_products">
    <div class="main_container">
      <div class="products_list">
        <h3>Товары</h3>
        <div class="list">
          

          <div v-for = "basketproduct in this.arr2" :key="basketproduct.id" class="product">
            <div class="image">
              <img src="@/img/samotak2.png" alt="" class="product_image" />
            </div>
            <div class="description">
              <h3>{{ basketproduct.title }}</h3>
              <p class="desc_text">
                Цена: 
                {{ basketproduct.price }}₽
              </p>
            </div>
            <div class="info_by_user">
              
              <div class="btn-group">
                <button @click="deleteProductBasket(basketproduct.id)" type="button" class="btn btn-primary">-</button>
                <span type="" class="btn btn-primary">{{ basketproduct.orderQuantity}}</span>
                <button @click="addProductBasket(basketproduct.id)"  type="button" class="btn btn-primary">+</button>
              </div>
              <span>{{ basketproduct.price * basketproduct.orderQuantity }}₽</span>
              <div class="add_action">
                <div class="like_btn">
                  <img @click="isAddedChange(searchLikeProduct(basketproduct.id))"  :src= "!(searchLikeProduct(basketproduct.id)).isAdded ? imgUrls[`../img/heart1.png`] : imgUrls[`../img/heart2.png`]" class="like"/>

                </div>
                <div type = "button" @click="deleteAllProductBasket(basketproduct.id)" class="delete_btn">
                  
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>

      <div class="order_block">
        <h3>Общая информация</h3>
        <div class="table1">
            <table>
          <thead>
            <th scope="col" style="display: none">Определение</th>
            <th scope="col" style="display: none">Значение</th>
          </thead>
          <tbody>
            <tr scope="row">
              <th>Итого:</th>
              <th>{{ totalamount }}₽</th>
            </tr>
            <tr scope="row">
              <th>Количество товаров:</th>
              <th>{{ countproducts }}</th>
            </tr>
            <!-- <tr scope="row">Zaebis</tr> -->
          </tbody>
        </table>
        <div class="btn_div">
          <button type="button" class="btn btn-success order_button">
            <img src="@/img/buy_icon3.png" alt="">
            <span>Оформить заказ</span>
          </button>
        </div>
      </div>
        </div>
        
        
    </div>

    <!-- <div class="baskets_sum">
            <h2>Итоговая сумма</h2>
        </div> -->
  </div>
</template>


<style scoped>
.basket_products {
  width: 70vw;
  height: 80vh;
}

.main_container {
  display: flex;

  padding: 30px;

  justify-content: space-around;
}

.products_list{
    width: 70%;
}
.products_list .list{
  overflow-y: scroll;
  height: 70vh;
}

.product {
  display: flex;
  justify-content: center;
  align-items: center;
}

.product div {
  margin: 20px;
}

.product_image {
  height: 7vw;
  width: auto;
}

.order_block {
    height: 70vh;
}



.info_by_user {
  display: flex;
  /* flex-direction: row; */
  height: min-content;
  width: 40%;
  align-items: center;
}


.table1{
    height: 100%;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.table1 .btn_div {
  width: 100%;
  
}

.table1 .btn_div button {
  width: 100%;
}

.like{
  max-width: 30px;
  margin-block-end: auto;
  color: aqua;
  cursor: pointer;

  
}



.delete_btn{
    height: 35px;
    content: url('@/img/delete_icon4.png');
}

.delete_btn:hover{
    height: 35px;
    content: url('@/img/delete_icon3.png');
}
.order_button{
  display: flex;
  justify-content: space-around;
  border-radius: 20px;

}

.order_button img{
  height: 50px;

}

.order_button span{
  font-size: larger;
  padding-top: 9px;
}


</style>

