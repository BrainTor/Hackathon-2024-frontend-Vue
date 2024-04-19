<template>
    <div class = "mainDiv">
        <img src="@/assets/img/imgLogoMain.png"  class = "logo">

        <div>
            <router-link to="/register">
                <button class="buttonsLogAndReg reg_but">
                    Регистрация
                </button>
            </router-link>
       
            <router-link to="/login">

                <button class="buttonsLogAndReg ">
                    Войти
                </button>

            </router-link>
      

          
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavigationBarCompnent',
 
});
</script>


<style scoped>
    .mainDiv{
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        background-color: var(--primary_green);
        padding: 0.34rem;
        padding-left: 0.7rem;
        padding-right: 0.7rem;
        
    }
    .logo{
        width: 60px;
        height: 60px;
    }
    .buttonsLogAndReg{
        background-color: var(--primary_accent);
        padding:8px;
        padding-left: 12px;
        padding-right: 12px;
        font-size: 13.7pt;
        margin-left: 7px;
        margin-right: 7px;
        border-radius: 7px;
        font-family: "Noto Sans", sans-serif;
        transition: 0.7s;
        color: #FFF5E0;
    }
    .buttonsLogAndReg:hover{
        background-color: #222b4f;
    }
    .reg_but{
        background-color: transparent;
        color: #FFF5E0;
        font-size: 13.2pt;
    }
    .reg_but:hover{
        background-color: var(--secondary_green);
        color:black
    }
</style>