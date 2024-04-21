<script setup lang="ts">

import FooterComponent from '@/components/FooterComponent.vue';
import ModalComponent from '@/components/ModalComponent.vue';

import NavigationBarCompnent from '@/components/NavigationBarCompnent.vue';
import ReplenishModal from '@/components/ReplenishModal.vue';

import { ref , inject} from 'vue';

let amount = ref(0)

const isActive = ref(false);
function handleDataFromChild(data:any) {
  isActive.value = data;
 
}
import type { GlobalState } from '@/stores/types';
let but_pay = ref([false, false, false]);
const globalState = inject<GlobalState>('globalState')!;
  function listen_clicks(data:number){

but_pay.value.forEach((element , index)=>{
  if(element){
    but_pay.value[index] = false
    return
  }
})
but_pay.value[data] = true
}


</script>

<template>

  <ReplenishModal :isVisible="globalState.isModalOpen" @close="globalState.toggleModal">
    <template #header>
        <h3 class = "text-lg">Пополение счета</h3>
    </template>

    <template #body>
        <div>
            <p style = "font-size: 18px;">Пополнив баланс карты вы сможете оплачивать проезд, обеды в столовых образовательных учреждений и так далее</p>

            <h3>Сумма к пополенению:</h3>
            <div class = "flex justify-center">
              <input v-model="amount" type="number" class = "input_rep">
            </div>
            
            <div class = "flex justify-between mt-2">
                <button class = "helper_button" @click = "amount = 50">50</button>
                <button class = "helper_button" @click = "amount = 100">100</button>
                <button class = "helper_button" @click = "amount = 200">200</button>
                <button class = "helper_button" @click = "amount = 500">500</button>
            </div>
            <h3>Способ оплаты:</h3>

            <div class = "flex flex-wrap justify-between mb-2">
                <button class = "helper_button" @click="listen_clicks(0)" style = "background-color: transparent;" 
                :style="{ 'background-color': but_pay[0] ? 'var(--primary_accent)' : 'transparent'}"

                >Карта</button>
                <button class = "helper_button" @click="listen_clicks(1)" :style="{ 'background-color': but_pay[1] ? 'var(--primary_accent)' : 'transparent'}"
                >Центр-инвест эквайринг</button>
                <button class = "helper_button" @click="listen_clicks(2)" :style="{ 'background-color': but_pay[2] ? 'var(--primary_accent)' : 'transparent'}"
                >СБП</button>

            </div>
        </div>
    </template>

    <template #footer>
        <div class = "w-full flex justify-between">
            <button class = "button_close" style = "font-size: 18px;" @click = "globalState.toggleModal">
              Закрыть
            </button>

            <button class = "button_send" style = "font-size: 18px;">
                Оплатить
            </button>
        </div>
    </template>
</ReplenishModal>


  <div class="main_container"> 
    <NavigationBarCompnent/>


  <ModalComponent v-model="isActive">
    <template #header>
      <h2 class = "header_text text-white">Подача заявки</h2>
    </template>
    <div class = "container_modal_body">
      <p class = "text_modal text-white">ФИО:</p>
      <div class="inputRow">
        <fa class="input-icon correct" icon = "user"/>
        <input class="input_modal" type="text">
      </div>

      <p class = "text_modal text-white">Номер мобильного телефона:</p>
      <div class="inputRow">
        <fa class="input-icon correct" icon = "phone"/>
        <input class="input_modal" type="text">
      </div>
      <p class = "text_modal_or text-white">или</p>
      <p class = "text_modal text-white">Ссылка на социальную сеть:</p>
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

.correct{
  left: 9%!important;
}


.input_rep{
  width: 80%;
  padding: 10px;
  border-radius: 8px;
  color: black;
  margin-bottom: 1rem;
}
.helper_button{
  background-color: var(--primary_accent);
  font-size: 18px;
  padding: 7px 14px;
  border-radius: 8px;
}
.backMain{
  background-color: var(--primary_accent);
}
</style>
