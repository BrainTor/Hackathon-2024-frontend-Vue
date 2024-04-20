<template>
  <div class="flex-1 p-10 for_font">
    <h2 class="self-start font-semibold">Профиль:</h2>
    <div class="flex flex-col w-full comp p-4">
      <div class="flex justify-between w-full ">
        <p style="font-size: 17pt;" class ="font-extrabold">Иван Иванов</p>
        <button class="edit_button">Редактировать</button>
      </div>
      <p class="title">Пол</p>
      <p class="font-extrabold">Не указан</p>
      <p class="title">Дата рождения</p>
      <p class="font-extrabold">Не указана</p>
    </div>

    <h2 class="self-start font-semibold">Контактная информация:</h2>
    <div class="flex flex-col w-full comp p-4">
      <div class="flex justify-between w-full mb-1">
        <div class="flex flex-col">
          <p class="title">Мобильный телефон</p>
          <p class="font-extrabold">+7-909-404-49-22</p>
        </div>

        <button class="edit_button">Редактировать</button>
      </div>
      <hr>
      <div class="flex justify-between w-full mt-1">
        <div class="flex flex-col">
          <p class="title">Электронная почта</p>
          <p class="font-extrabold">zalupa@online.com</p>
        </div>

        <button class="edit_button">Редактировать</button>
      </div>


    </div>
    <h2 class="self-start font-semibold">Уровень учетной записи:</h2>
    <div class="flex flex-col w-full comp p-4 ">
      <p class="font-black">Пока пох</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
hr {
  background-color: whitesmoke;
  border: none;
  height: 2px;
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
}
</style>