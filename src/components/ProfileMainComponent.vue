<template>


  <div v-if="cont[0]" class="flex-1 p-10">
      <h1>
        Главная
      </h1>
  </div>



  <div v-else-if="cont[1]" class="flex-1 p-10 for_font">
    <h2 class = "font-semibold">Профиль</h2>
    <div>
      <h2 class="self-start font-semibold">Личная информация:</h2>
      <div class="flex flex-col w-full comp p-4">
        <div class="flex justify-between w-full ">
          <p style="font-size: 17pt;" class ="font-extrabold">Иван Иванов</p>
          <button class="edit_butt">Редактировать</button>
        </div>
        <p class="title">Пол</p>
        <p class="font-extrabold">Не указан</p>
        <p class="title">Дата рождения</p>
        <p class="font-extrabold">Не указана</p>
      </div>
    </div>

  
    <div>
      <h2 class="self-start font-semibold">Контактная информация:</h2>
      <div class="flex flex-col w-full comp p-4">
        <div class="flex justify-between w-full mb-1">
          <div class="flex flex-col">
            <p class="title">Мобильный телефон</p>
            <p class="font-extrabold">+7-909-404-49-22</p>
          </div>
  
          <button class="edit_butt">Редактировать</button>
        </div>
        <hr>
        <div class="flex justify-between w-full mt-1 items-center">
          <div class="flex flex-col">
            <p class="title">Электронная почта</p>
            <p class="font-extrabold">zalupa@online.com</p>
          </div>
  
          <button class="edit_butt">Редактировать</button>
        </div>
  
  
    </div>
    
    </div>

  </div>

  <div v-else-if="cont[2]" class="flex-1 p-10">
      <h1>Карта жителя</h1>
  </div>

  <div v-else-if="cont[3]" class="flex-1 p-10">
      <h1>Документы и данные</h1>
  </div>

  
  <div v-else-if="cont[4]" class="flex-1 p-10">
    <h1 class = "title">Безопастность</h1>
</div>
</template>

<script lang="ts" setup>
import { defineProps, watch } from 'vue';
const props = defineProps({
  number: {
    type: Number,
    required: true
  }
})

let cont = [true, false, false, false, false]
watch(() => props.number, (newValue, oldValue) => {
  cont.forEach((element,index)=>{
    if(element){
      cont[index] = false
      return
    }
  })
  cont[newValue-1] = true
});

</script>

<style scoped>
.title_text{
  font-family: "Noto Sans", sans-serif;
}
hr {
  background-color: whitesmoke;
  border: none;
  height: 2px;
}
.edit_butt{
    height: 45px;
  
    padding: 0px 12px;
    border-radius: 8px;
    transition: 0.4s;

}
.edit_butt:hover{
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

.for_font {
  font-family: "Noto Sans", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

</style>