<script>


import axios from 'axios'
// import {SERVER_URL} from '../../config.js'
import { toDisplayString } from 'vue'



export default {
    data() {
        return {
            email: "",
            password: "",
            username: ""
        };
    },
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        async register() {
            await axios.post("http://127.0.0.1:8080/auth", {
                email: this.email,
                username: this.username,
                password: this.password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => (console.log(res)));
        },
        showSuccess() {
          this.$toast.add({severity:'success', summary: 'Success Message', detail:'Message Content', life: 3000});
      },
    },
    async mounted() {
        this.showSuccess()
    },
    components: { toDisplayString }
}

</script>

<template>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap" rel="stylesheet">

<body>
<div class="background">
  <div class="shape"></div>
  <div class="shape"></div>
</div>

<form method="post">
  <h3>Регистрация</h3>

  <label for="username">Имя пользователя</label>
  <input v-bind:value ="username" @input="username = $event.target.value" name = "username" type="text" placeholder="Имя пользователя" id="username">

  <label for="username">Email</label>
  <input v-bind:value ="email" @input="email = $event.target.value" name = "email" type="text" placeholder="Email" id="email">

  <label for="password">Пароль</label>
  <input v-bind:value ="password" @input="password = $event.target.value" name = "password" type="text" placeholder="Пароль" id="password">

  <a href="#" class="button">Уже есть аккаунт? Войти</a>

  <button @click="register" type="button" >Зарегистрироваться</button>
  <div class="social">
    <div class="go"><i class="fab fa-google"></i>  Google</div>
    <div class="fb"><i class="fab fa-vk"></i>  VK</div>
  </div>
</form>
<Toast />
</body>
</template>


<style scoped>

@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");
      *,
*:before,
*:after{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body{
    margin-top: 30%;
    background-color: #080710;
}
.background{
    width: 430px;
    height: 520px;
    position: absolute;
    transform: translate(-50%,-50%);
    left: 50%;
    top: 50%;
}
.background .shape{
    height: 200px;
    width: 200px;
    position: absolute;
    border-radius: 50%;
}
.shape:first-child{
    background: linear-gradient(
        #1845ad,
        #23a2f6
    );
    left: -80px;
    top: -80px;
}
.shape:last-child{
    background: linear-gradient(
        to right,
        #ff512f,
        #f09819
    );
    right: -30px;
    bottom: -80px;
}
form{
    height: 600px;
    width: 400px;
    background-color: rgba(255,255,255,0.13);
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255,255,255,0.1);
    box-shadow: 0 0 40px rgba(8,7,16,0.6);
    padding: 50px 35px;
}
form *{
    font-family: 'Poppins',sans-serif;
    color: #ffffff;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
}
form h3{
    font-size: 32px;
    font-weight: 500;
    line-height: 42px;
    text-align: center;
}

label{
    display: block;
    margin-top: 30px;
    font-size: 16px;
    font-weight: 500;
}
input{
    display: block;
    height: 50px;
    width: 100%;
    background-color: rgba(255,255,255,0.07);
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
}
::placeholder{
    color: #e5e5e5;
}
button{
    margin-top: 20px;
    width: 100%;
    background-color: #ffffff;
    color: #080710;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
}
.social{
  margin-top: 30px;
  display: flex;
}
.social div{
  background: red;
  width: 150px;
  border-radius: 3px;
  padding: 5px 10px 10px 5px;
  background-color: rgba(255,255,255,0.27);
  color: #eaf0fb;
  text-align: center;
}
.social div:hover{
  background-color: rgba(255,255,255,0.47);
}
.social .fb{
  margin-left: 25px;
}
.social i{
  margin-right: 4px;
}

.button{
    cursor: pointer;
}

a, u {
  text-decoration: none;
}
</style>