<template>
    <div class = "containerBlock">
        <router-link to='/' style="text-decoration:none;">
            <div class = "logo" >
              <img src="@/assets/img/imgLogoMain.png" class="logo_img">
            </div>
        </router-link>


        <div class = "containerInside shadowContainer">
            <center><h1 class = "titleText">Вход</h1></center>
          
            <div style = "display:flex;flex-direction:column;align-items:center;">
                <p class = "insideText">Введите логин</p>
                <div class = "inputRow">
                  <fa class="input-icon" icon="user"/>
                  <input v-model = "loginInput" class = "insideInput" 
                  >
                </div>
                <p class = "insideText">Введите Пароль</p>
                <div class = "inputRow">
                    <fa class="input-icon" icon="lock"/>
                    <input v-model ="passwordInput" type = "password" class = "insideInput" >
                </div>

                <p  class ="forgotPass">Забыли пароль?</p>


                <div class = "rowCheckBox">
                    <input type = "checkbox" style = "transform:scale(1.40);">
                    <p class = "checkBoxText">Запомнить меня</p>
                </div>

                

            </div>
            
            <div style="display:flex;flex-direction:column; align-items:center;">
             <button id="submit" >Войти</button>
              <div style="display:flex;flex-direction:row; justify-content:space-between;">
                  <p class = "insideText" style="font-size:1rem; margin-bottom:1.5rem">Нет аккаунта?</p>
                  
                  <router-link to = "/register" class = "insideText" style="font-family: 'Noto Sans', sans-serif;font-size:1rem; margin-bottom:1.5rem;color:var(--primary_accent);text-decoration: underline; margin-left:7px;cursor:pointer;"><a > Зарегистрироваться</a></router-link>
                  
              </div>
               
            </div>
            
        </div>
</div>

</template>

<style scoped>
.logo_img{
    width: 80px;
}
.containerBlock{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
}

.forgotPass{
    font-size:0.95rem;
    margin-top:1.4rem;
    color: #FFF5E0;
    cursor:pointer;
    font-family: "Noto Sans", sans-serif;
    margin-bottom:0px;

   
  }
  .rowCheckBox{
    display:flex;
    flex-direction:row;
    align-self:start;
    margin-left:2rem;
    cursor:pointer;
    align-items: center;
    margin-top: 1rem;
  }
      .mainContainer{
        width:100%;
        height:100vh;
        background:var(--backroundLogin);
        display:flex;
        align-items:center;
        justify-content:center;
      }
    
      .containerInside{
          width:370px;
          height:500px;
          background-color: var(--primary_green);
          margin-top:1.5rem;
          border-radius:12px;
          display:flex;
          flex-direction:column;
          justify-content:space-between;
  
      }
      .logo{
        cursor:pointer;
        display:flex;
        flex-direction:row;
        justify-content:center;
      }

      .insideInput{
        width:85%;
        padding:10px;
        border:2px solid transparent;
        border-radius:8px;
        background:#DCDCDC;
        padding-left:40px;
        color:black;
       
      }
      .insideInput:focus{
        outline:none;
      }
      .insideInput::placeholder{
        color:red;
        font-size:0.87rem;
      }
      .checkBoxText{
        font-size:1rem;
        font-family: "Noto Sans", sans-serif;
        margin-left:0.5rem;
        margin-top: 0.1rem;
      }
      .insideText{
        margin:0px;
        margin-top:0.8rem;
        margin-bottom:0.8rem;
        font-size:1.21rem;
        color: #FFF5E0;
        font-family: "Noto Sans", sans-serif;
      }
      #submit{
        width:85%;
        background:var( --primary_accent);
        color:var(--backgroundTextButtonSuc);
        height:45px;
        font-size:1.21rem;
        margin-top: 1rem;
        border:0px;
        border-radius:8px;
      }
      .titleText{
        margin-top:1.5rem;
        font-family: "Noto Sans", sans-serif;
      }


</style>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'LoginView',
  data() {
      return {
        loginInput: '',
        passwordInput:'',
        isChecked: false,
        errorLogin:false,
        errorPassword:false,
        errorMsg:''
      };
    }
});
</script>

