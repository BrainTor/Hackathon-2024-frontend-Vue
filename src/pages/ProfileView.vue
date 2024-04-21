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
  
  <div class="min-h-screen flex flex-col">
    <NavigationBarCompnent class="mb-10" />
    <div class="flex flex-1 overflow-hidden">
      <SideBarComponent @link-picker="handleData" class="sidebar ml-5" />

      <ProfileMainComponent @vis="getClick" :number="childDate" class="profile ml-5 mr-5 mb-10" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ReplenishModal from '@/components/ReplenishModal.vue';
import NavigationBarCompnent from '@/components/NavigationBarCompnent.vue';
import ProfileMainComponent from '@/components/ProfileMainComponent.vue';

import SideBarComponent from '@/components/SideBarComponent.vue';
import router from '@/router';
import { useAuthenticationStore } from '@/stores';
import { onBeforeMount , ref } from 'vue';
import { inject } from 'vue';


let but_pay = ref([false, false, false]);

import type { GlobalState } from '@/stores/types';

const globalState = inject<GlobalState>('globalState')!;



let amount = ref(0) 

onBeforeMount(() => {
  const auth = useAuthenticationStore();
  if (auth.isAuthenticated == "LOGGEDIN" && auth.user?.accountState == "EMAIL_VERIFICATION") router.push("/getCode");
  if (auth.isAuthenticated == "LOGGEDIN" && auth.user?.accountState == "DISABLED") { auth.logout(); router.push("/"); }
})
let childDate = ref(0)
function handleData(number: number) {
  childDate.value = number
}

function listen_clicks(data:number){

  but_pay.value.forEach((element , index)=>{
    if(element){
      but_pay.value[index] = false
      return
    }
  })
  but_pay.value[data] = true
}

function getClick(){
  globalState.toggleModal()
}


</script>

<style scoped>

.container {
  background-color: var(--secondary_green);
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;

}

.profile {
  background-color: var(--secondary_green);
  border-radius: 10px;
}

.sidebar {
  background-color: var(--secondary_green);
  border-radius: 10px;

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
/* Media queries for responsiveness */
@media (max-width: 1024px) {
  .sidebar {
    width: 100%;
    order: -1;
  }

  .profile {
    width: 100%;
  }
}

@media (min-width: 1025px) {
  .sidebar {
    width: 250px;
  }

  .profile {
    flex: 1;
  }
}



</style>