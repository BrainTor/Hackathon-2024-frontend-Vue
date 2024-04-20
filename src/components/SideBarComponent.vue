<template>
    <aside class="w-64 bg-gray-700 h-full">
      <ul>
        <li class="p-2 mt-2 mb-2 text-center cursor-pointer element ">Главная</li>
        <li class="p-2 mt-2 mb-2 text-center cursor-pointer element ">Профиль</li>
        <li class="p-2 mt-2 mb-2 text-center cursor-pointer element">Карта жителя</li>
        <li class="p-2 mt-2 mb-2 text-center cursor-pointer element">Документы и данные</li>
        <li class="p-2 mt-2 mb-2 text-center cursor-pointer element">Безопастность</li>
      </ul>
    </aside>
  </template>
  
  <script lang="ts" setup>
  </script>
  
  <style scoped>
    .element{
        transition:0.6s
    }
    .element:hover{
        background-color: var(--primary_accent);
        color: white;
        border-radius: 7px;
    }
  </style>