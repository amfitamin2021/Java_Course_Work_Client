<script>

export default {

    data(){
      return{
        
      }
    },

    methods: {
      onChangeSelect(event){
        this.$emit('onChangeSelect', event)
      }

    }
}
</script>





<template>
    <div class="katalog">
   <h2 class="help_title">Самокаты на любой вкус!</h2>

   <div class = "search_pac">
    <img class = "search_icon" src="../img/filter.png" alt="поиск">
    <select @change="onChangeSelect" class="search_select" placeholder="Отфильтровать">
        <option disabled value="">Выберите из списка</option>
        <option value="name">По названию</option>
        <option value="price">По цене (дешевые)</option>
        <option value="price_desc">По цене (дорогие)</option> 
    </select>
    <img class = "search_icon" src="../img/search2.png" alt="поиск">
   <input class="search_products" placeholder = "Поиск..." type="input">
    </div>
    </div>
</template>

<style scoped>
.search_products{
    display: block;
    border-style: solid;
    padding: 8px;
    padding-right: 20px;
    border-radius: 20px;
    outline: none;

}

.search_products::-webkit-input-placeholder {
    font-weight: bold;

}

.search_products::-moz-placeholder {
    font-weight: bold;
}
.search_products:focus{
    border-color: var(--gray-600);
}

.search_icon{
    max-width: 50px;
    padding-right: 10px;
}

.search_icon:focus{
    max-width: 40px;
    padding-right: 10px;
}

.search_pac{
    display: flex;
    justify-content: flex-end;
}

.search_select{
    padding-right: 30px;
    margin-right: 40px;
    display: block;
    border-style: solid;
    padding: 8px;
    border-width: unset;
    padding-right: 10px;
    border-radius: 30px;
    outline: none;
}
</style>
