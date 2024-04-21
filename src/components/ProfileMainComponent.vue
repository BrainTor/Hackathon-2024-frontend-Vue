<template>


  <div v-if="cont[0]" class="flex-1 p-10">
    <h1>
      Главная
    </h1>
    <h2>Карта:</h2>
    <div class="flex">
      <CardName>
        <template #money>
          <p class="money">{{card?.balance ?? 0}}р</p>
        </template>
      </CardName>
      <div class="ml-6">
        <h2 class="mt-0">Данные карты:</h2>
        <p class="text-lg">Номер карты:</p>

        <p><b>{{card?.permanentAccountNumber ?? 0}}</b> </p>

        <p class="text-lg">Действителен до: <b>{{(new Date(card?.expiration??0)).getUTCMonth().toString().padStart(2, '0')}}/{{ Array.from((new Date(card?.expiration??0)).getUTCFullYear().toString()).slice(2).join('') }}</b> </p>
        <p class="text-lg">Владелец: <b>{{ user?.lastName }} {{ user?.firstName }} {{ user?.dadName }}</b> </p>


        <button class="replenish_but">Пополнить</button>
      </div>


    </div>
    <h2>Документы:</h2>
    <div class="w-full flex justify-between doc_cont">
      <p class="text-xl">Паспорт</p>
      <button class="edit_butt">
        Изменить
      </button>

    </div>

    <div class = "w-full flex justify-between doc_cont">
      <p class = "text-lg">Снилс</p>

      <button class="edit_butt">
        Изменить
      </button>

    </div>



  <div class = "w-full flex justify-between doc_cont">
    <p class = "text-lg">ИНН</p>

      <button class="edit_butt">
        Добавить
      </button>

    </div>



  </div>



  <div v-else-if="cont[1]" class="flex-1 p-10 for_font">
    <h1 class="font-semibold">Профиль</h1>
    <div>
      <h2 class="self-start font-semibold">Личная информация:</h2>
      <div class="flex flex-col w-full comp p-4">
        <div class="flex justify-between w-full ">
          <p style="font-size: 17pt;" class="font-extrabold">{{ user?.lastName }} {{ user?.firstName }} {{ user?.dadName }}</p>
          <button class="edit_butt" disabled>Редактировать</button>
        </div>
        <!-- <p class="title">Пол</p>
        <p class="font-extrabold">Не указан</p>
        <p class="title">Дата рождения</p>
        <p class="font-extrabold">Не указана</p> -->
      </div>
    </div>


    <div>
      <h2 class="self-start font-semibold">Контактная информация:</h2>
      <div class="flex flex-col w-full comp p-4">
        <!-- <div class="flex justify-between w-full mb-1">
          <div class="flex flex-col">
            <p class="title">Мобильный телефон</p>
            <p class="font-extrabold">+7-909-404-49-22</p>
          </div>

          <button class="edit_butt">Редактировать</button>
        </div>
        <hr> -->
        <div class="flex justify-between w-full mt-1 items-center">
          <div class="flex flex-col">
            <p class="title">Электронная почта</p>
            <p class="font-extrabold">{{user?.email}}</p>
          </div>

          <button class="edit_butt" disabled>Редактировать</button>
        </div>


      </div>

    </div>

  </div>

  <div v-else-if="cont[2]" class="flex-1 p-10">
      <h1>Карта жителя</h1>

    <div class="flex flex-wrap">
      <CardName>
        <template #money>
          <p class="money">{{card?.balance ?? 0}}р</p>
        </template>
      </CardName>
      <div class="ml-6">
        <h2 class="mt-0">Данные карты:</h2>
        <p class="text-lg">Номер карты:</p>

        <p><b>{{card?.permanentAccountNumber ?? 0}}</b> </p>

        <p class="text-lg">Действителен до: <b>{{(new Date(card?.expiration??0)).getUTCMonth().toString().padStart(2, '0')}}/{{ Array.from((new Date(card?.expiration??0)).getUTCFullYear().toString()).slice(2).join('') }}</b> </p>
        <p class="text-lg">Владелец: <b>{{ user?.lastName }} {{ user?.firstName }} {{ user?.dadName }}</b> </p>


        <button class = "replenish_but" @click="sendDataToParent">Пополнить</button>
       </div>
   
 
      </div>
      <h2>История транзакций:</h2>

    <div class="flex w-full justify-between mt-2 mb-2 pb-2 transaction_cont">
      <p class="text-lg"> Оплата Поездки</p>
      <p class="text-lg">-200</p>
    </div>
  </div>

  <div v-else-if="cont[3]" class="flex-1 p-10">
    <h1>Документы и данные</h1>

    <div class="w-full flex justify-between doc_cont">
      <p class="text-xl">Паспорт</p>
      <button class="edit_butt">
        Изменить
      </button>

    </div>

    <div class="w-full flex justify-between doc_cont">
      <p class="text-xl">Снилс</p>

      <button class="edit_butt">
        Изменить
      </button>

    </div>



    <div class="w-full flex justify-between doc_cont">
      <p class="text-xl">ИНН</p>

      <button class="edit_butt">
        Добавить
      </button>

    </div>
  </div>


  <div v-else-if="cont[4]" class="flex-1 p-10 main_sec">
    <h1 style ="align-self: start;">Безопастность</h1>

    <div class = "container_sec">
        <h3 class="font">Пароль</h3>
        <button class = "edit_butt">Изменить</button>
    </div>

    <div class = "container_sec">
        <div>
            <h3 class = "font">Вход без пароля</h3>
            <p class = "font">Необходим для удостоверения личности при выезде и пребывании за пределами государства.</p>
        </div>
        <button class = "edit_butt">Включить</button>
    </div>


    <div class="container_sec">
      <div>
          <h3 class = "font">Двухфакторная аутентификация </h3>
          <p class = "font">Включите двухфакторную аутентификацию, чтобы повысить защищенность вашей учетной записи. Тогда злоумышленник не сможет получить доступ к аккаунту, завладев логином и паролем.</p>
      </div>
      <button class="edit_butt">Включить</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineProps, watch, ref } from 'vue';
import CardName from './cardName.vue';
import { useAuthenticationStore } from '@/stores';
import type { Card, Transaction, User } from '@/utils/types';
import { client } from '@/utils/axios';

export default defineComponent({
  name: "ProfileMainComponent",
  props: {
    number: {
      type: Number,
      required: true
    }
  },
  components: {CardName},
  mounted() {
    let cont = [true, false, false, false, false]
    watch(() => this.$props.number, (newValue, oldValue) => {
      cont.forEach((element, index) => {
        if (element) {
          cont[index] = false
          return
        }
      })
      cont[newValue - 1] = true
    });
    this.cont = cont;

    (async () => {
      const auth = useAuthenticationStore();
      const user = auth.user;
      const cardResp = await client.get<{ card: Card }>("/cards/@me/", {headers: {Authorization: `Bearer ${auth.userJwt!!}`}});
      const transactionResp = await client.get<{ transactions: Transaction[] }>("/cards/@me/transactions", {headers: {Authorization: `Bearer ${auth.userJwt!!}`}});
      this.user = user;
      this.card = cardResp.data.card;
      this.transactions = transactionResp.data.transactions;
    })();
  },
  
  data() {
    
    return {
      card: null as Card | null,
      user: null as User | null,
      transactions: [] as Transaction[],
      cont: [] as boolean[],
      props: this.$props
    }
  },
})

</script>

<style scoped>
.title_text {
  font-family: "Noto Sans", sans-serif;
}

hr {
  background-color: whitesmoke;
  border: none;
  height: 2px;
}
.edit_butt{
    height: 45px;
    align-self: center;
    padding: 0px 12px;
    border-radius: 8px;
    font-size: 18px;
    transition: 0.4s;
    font-family: 'Noto Sans' , sans-serif;

}

.edit_butt:hover {
  background-color: var(--primary_accent);
  color: black;
}

.comp {
  border: 3px solid white;
  border-radius: 7px;
}

.title {

  font-size: 15pt;
}

.font{
  font-family: 'Noto Sans' , sans-serif;
}

.for_font {
  font-family: "Noto Sans", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.container_sec {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 7px;
  border: 2px solid whitesmoke;
  font-family: "Noto Sans", sans-serif;
  border-radius: 8px;
  padding-left: 10px;
  padding-right: 10px;
}

.main_sec {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-family: 'Noto Sans' , sans-serif;
  align-items: center;
}


.replenish_but {
  background-color: var(--primary_accent);
  font-size: 18px;
  width: 100%;
  height: 40px;
  margin-top: 0.6rem;
  border: 0px;
  border-radius: 8px;
}

.transaction_cont {
  border: 2px solid whitesmoke;
  border-top: 0px;
  border-right: 0px;
  border-left: 0px;

}

.doc_cont {
  border: 2px solid whitesmoke;
  padding: 12px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  align-items: center;
}
</style>