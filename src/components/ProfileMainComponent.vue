<template>
    <div class="flex-1 p-10 for_font">
      <h2 class = "text-black">Профиль</h2>
      <div class="flex flex-col w-full comp p-4 text-black">
            <div class = "flex justify-between w-full ">
                <p style="font-size: 17pt;">Иван Иванов</p>
                <button>Редактировать</button>
            </div>
            <p class="title">Пол</p>
            <p>Не указан</p>
            <p class = "title">Дата рождения</p>
            <p>Не указана</p>
      </div>

      <h2 class = "text-black">Контактная информация</h2>
      <div class="flex flex-col w-full comp p-4 text-black">
            <div class = "flex justify-between w-full mb-1">
                <div class = "flex flex-col">
                    <p class="title">Мобильный телефон</p>
                    <p>+7-909-404-49-22</p>
                </div>
                
                <button>Редактировать</button>
            </div>
            <hr>
            <div class = "flex justify-between w-full mt-1">
                <div class = "flex flex-col">
                    <p class="title">Электронная почта</p>
                    <p>zalupa@online.com</p>
                </div>
                
                <button>Редактировать</button>
            </div>

            
      </div>
      <h2 class = "text-black">Уровень учетной записи</h2>
      <div class="flex flex-col w-full comp p-4 text-black">
            <p>Пока пох</p>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  </script>
  
  <style scoped>
  .comp{
    border: 3px solid black;
    border-radius: 7px;
  }
  .title{
    color: rgb(175, 167, 167);
    font-size: 15pt;
  }
  .for_font{
    font-family: "Noto Sans", sans-serif;
  }
  </style>