<script setup lang="ts">

import FooterComponent from '@/components/FooterComponent.vue';
import ModalComponent from '@/components/ModalComponent.vue';

import NavigationBarCompnent from '@/components/NavigationBarCompnent.vue';

import { ref } from 'vue';
const isActive = ref(false);
function handleDataFromChild(data:any) {
  isActive.value = data;
 
}

</script>

<template>
  <div class="main_container"> 
    <NavigationBarCompnent/>


  <ModalComponent v-model="isActive">
    <template #header>
      <h1 class = "header_text">Подача заявки</h1>
    </template>
    <div class = "container_modal_body">
      <p class = "text_modal">ФИО:</p>
      <div class="inputRow">
        <fa class="input-icon correct" icon = "user"/>
        <input class="input_modal" type="text">
      </div>

      <p class = "text_modal">Номер мобильного телефона:</p>
      <div class="inputRow">
        <fa class="input-icon correct" icon = "phone"/>
        <input class="input_modal" type="text">
      </div>
      <p class = "text_modal_or">или</p>
      <p class = "text_modal">Ссылка на социальную сеть:</p>
      <div class="inputRow">
        <fa class="input-icon correct" icon = "link"/>
        <input class="input_modal" type="text">
      </div>
    </div>
    <template #footer>

      <button class = "button_close" @click="isActive = false">Закрыть</button>
      <button class = "button_send">Отправить</button>
    </template>
  </ModalComponent>

    <FooterComponent @Show="handleDataFromChild"/>

  </div>
</template>

<style scoped>
.container_modal_body{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main_container{
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
}
.input_modal{
  width: 90%;
  padding: 8px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 7px;
  padding-left: 38px;
}
.text_modal{
  align-self: start;
  font-weight: 700;
  font-size: 13pt;
  margin-left: 0.68rem;
}
.button_send{
  background-color: var(--primary_accent);
  margin-top: 1rem;
  padding: 7px;
  color: white;
  border-radius: 7px;
}
.button_close{
  padding: 7px;
  margin-top: 1rem;
  border-radius: 7px;
  transition: 1s;
}
.button_close:hover{
  background-color: grey;
}
.correct{
  left: 9%!important;
}
</style>
