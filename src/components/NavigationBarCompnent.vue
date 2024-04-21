<template>

   
    <div class = "mainDiv">


     
    
        <router-link to = "/"><img src="@/assets/img/imgLogoMain.png"  class = "logo"></router-link>
        

        <div v-if="!auth">
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

        <div v-else>
            <DropDown class="dropDown">
                <template #trigger>
                    <fa icon = "bars" style="font-size: 20pt;" class = "dropDownTrigger" @click = "toggleDropdown"/>

                   
                </template>

                <template #items>
                    <p></p>
                    <div v-if="isOpen" class="dropdown-content">
                        <button @click="selectItem(1)"><fa icon = "user"/> Профиль</button>
                        <button @click="selectItem(2)"><fa icon = "money-bill"/> Пополнить</button>
                        <button @click="selectItem(3)"  style = "color: red;"><fa icon = "door-open"/> Выйти</button>
                        
                    </div>

                </template>
            </DropDown>
        </div>
    </div>


    
</template>

<script setup lang="ts">

import  {onBeforeMount , inject} from 'vue';
import  {useAuthenticationStore}  from '@/stores';
import type { GlobalState } from '@/stores/types';

const globalState = inject<GlobalState>('globalState')!;

import { ref } from 'vue';
import DropDown from './DropDown.vue';
import router from '@/router';

const authClient = useAuthenticationStore();
const isOpen = ref(false);

let auth = ref(false)

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}


function selectItem(item:any) {
    switch(item) {
        case 1:
            router.push('/profile')
            break
        case 2:
            globalState.toggleModal()
            
            isOpen.value = false; 
            break
        case 3:
            authClient.logout()
            auth.value = false
            router.push('/')
    }


}


onBeforeMount(()=>{

        if (localStorage.getItem("authentication.jwt") !== null) {
            authClient.signIn(localStorage.getItem("authentication.jwt")!!)
                .then(() => {
                    auth.value = true
                } );
        }

})
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
    .dropDownTrigger{
        font-size: 20pt;
        margin-right: 0.3rem;
        cursor: pointer;
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
        background-color: #198186;
    }
    .reg_but{
        background-color: transparent;
        color: #FFF5E0;
        font-size: 13.2pt;
    }
    .reg_but:hover{
        background-color: var(--secondary_green);
    
    }
    .dropDown{
        position: relative;
        display: inline-block;
    }
    .dropdown-content{
      
            display: block;
            position: absolute;
            background-color: #f9f9f9;
            right:-5px;
            top: 40px;
          
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 1;
       
    } 
    
    
    .dropdown-content button {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        border: none;
        transition: 0.4s;
        background: none;
        text-align: center;
        width: 100%;
        border-bottom: 1px solid #ccc;
        font-weight: 500;
      }

        
    .dropdown-content button:hover {
        background-color: var(--primary_accent);
      }
</style>