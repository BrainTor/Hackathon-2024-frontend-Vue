<template>
  <button class="toggle-button" @click="toggleSidebar" v-if="isMobile&&!isSidebarOpen"><fa icon = "bars"/></button>
  <aside class="sidebar" :class="{ open: isSidebarOpen }">
    <ul>
      <li class="element" @click = "toggle_items_click(1)" :class = "{locked:buttons[0]}">Главная</li>
      <li class="element" @click = "toggle_items_click(2)" :class = "{locked:buttons[1]}">Профиль</li>
      <li class="element" @click = "toggle_items_click(3)" :class = "{locked:buttons[2]}">Карта жителя</li>
      <li class="element" @click = "toggle_items_click(4)":class = "{locked:buttons[3]}">Документы и данные</li>
      <li class="element" @click = "toggle_items_click(5)":class = "{locked:buttons[4]}">Безопасность</li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
// если вдруг кто-то найдет данное сообщение, хочу сказать что я старался сделать нормальный адаптив, но
// не успеваю, так как занимаюсь один фронтом и просто не успеваю :-( 
import { ref, computed } from 'vue';
    const emit = defineEmits(['link-picker']);
    const isSidebarOpen = ref(false); // Сайдбар скрыт по умолчанию на всех устройствах
    const windowWidth = ref(window.innerWidth);
    let buttons = [true, false, false, false, false]
    const isMobile = computed(() => windowWidth.value <= 768);

    function toggleSidebar() {
      isSidebarOpen.value = !isSidebarOpen.value;
    }
    function toggle_items_click(number:number){
      buttons.forEach((element, index)=>{
        if(element){
          buttons[index] = false
          return
        }
      })
      buttons[number - 1] = true
      emit('link-picker', number);
      isSidebarOpen.value = !isSidebarOpen.value;
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
  top: 80px;
  left: 20px;
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
.locked{
  background-color: var(--primary_accent);
}
</style>