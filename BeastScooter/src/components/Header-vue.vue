<template>
    <header class="header">
    <div class="header__container">

      <div class="logo">
        <a><img class="logo_inner" id="other" src="../img/logo.png" alt="Logo" height="60px"></a>
        <span id="menu_name">Beast Scooter</span>
      </div>
      <div class="header__menu menu">
        <div class="menu__icon">
          <span></span>
        </div>
      </div>
      <nav class="menu__body">
        <ul class="menu__list">

            <li @click="loadBasket"><a class="menu__link"><img src="../img/basket3.png" alt="Cart" height="30px"></a></li>
            <li @click="loadBasket" v-if="sum != 0" ><p><a class="menu__link">{{ sum }}₽</a></p></li>
            <li @click="showNotification" v-else ><p><a class="menu__link">Закупиться</a></p></li>

            <li><a class="menu__link"><img src="../img/heart.png" alt="Cart" height="30px"></a></li>
            <li><p><a class="menu__link">Избранное</a></p></li>


            <li><a class="menu__link"><img src="../img/user.png" alt="Cart" height="30px"></a></li>
            <li><p><a class="menu__link">Профиль</a></p></li>

        </ul>
      </nav>
    </div>
  </header>
</template>


<script >


export default {
  props:{
    basketproducts:{
      type: Object,
      required: true
    }
  },
  data(){
      return{
        sum: 0
      }
  },

  updated(){
    this.sumPrices()
  },
  methods:{
    sumPrices(){
      let tempsum = 0;
      for(let i = 0; i < this.basketproducts.productList.length; i++){
        tempsum += this.basketproducts.productList[i].price

      } 
      this.sum = tempsum
    },
    loadBasket(){
      this.$emit('showBasket')
    },
    showNotification(){
      this.$emit('showNotification')
    }
  }

}
</script>