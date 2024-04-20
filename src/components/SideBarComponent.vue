<template>
  <button class="toggle-button" @click="toggleSidebar" v-if="isMobile">Меню</button>
  <aside class="sidebar" :class="{ open: isSidebarOpen }">
    <ul>
      <li class="element" @click = "toggle_items_click(1)">Главная</li>
      <li class="element" @click="toggle_items_click(2)">Профиль</li>
      <li class="element" @click = "toggle_items_click(3)">Карта жителя</li>
      <li class="element" @click = "toggle_items_click(4)">Документы и данные</li>
      <li class="element" @click = "toggle_items_click(5)">Безопасность</li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
    const emit = defineEmits(['link-picker']);
    const isSidebarOpen = ref(false); // Сайдбар скрыт по умолчанию на всех устройствах
    const windowWidth = ref(window.innerWidth);

    const isMobile = computed(() => windowWidth.value <= 768);

    function toggleSidebar() {
      isSidebarOpen.value = !isSidebarOpen.value;
    }
    function toggle_items_click(number:number){
      emit('link-picker', number);
    }
    window.addEventListener('resize', () => {
      windowWidth.value = window.innerWidth;
      if (!isMobile.value) {
        isSidebarOpen.value = true; // Всегда открыт на ПК
      } else {
        isSidebarOpen.value = false; // Скрыт по умолчанию на мобильных устройствах
      }
    });

   

</script>

<style scoped>
.toggle-button {
  display: none;
  position: fixed;
  z-index: 1001;
  top: 10px;
  left: 10px;
}

.sidebar {
  width: 0;
  overflow-x: hidden;
  transition: width 0.5s;
  background-color: var(--secondary_green);
  height: fit-content;
 
  z-index: 1000;

}

.sidebar.open {
  width: 256px; /* Постоянная ширина для ПК */
}

@media (max-width: 768px) {
  .toggle-button {
    display: block;
  }

  .sidebar {
    width: 0; /* Сайдбар скрыт на мобильных */
    position: fixed;
    top: 0;
    height: 100%;
    left: 0;
  }

  .sidebar.open {
    width: 100%; /* Полноэкранный при открытии на мобильных */
  }
}

@media (min-width: 769px) {
  .sidebar {
    width: 256px; /* Всегда открыт и постоянной ширины на ПК */
    margin-left: 20px;
    border-radius: 8px;
  }
}

.element {
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: background-color 0.6s;
}

.element:hover {
  background-color: var(--primary_accent);
  color: white;
  border-radius: 7px;
}
</style>