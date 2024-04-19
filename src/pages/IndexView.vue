<script lang="ts">

import FooterComponent from '@/components/FooterComponent.vue';
import NavigationBarCompnent from '@/components/NavigationBarCompnent.vue';

import { defineComponent } from 'vue';
export default defineComponent({
  name: "IndexView",
  components: {
    NavigationBarCompnent,
    FooterComponent
  } 
})
</script>

<template>
  <div class="main_container"> 
    <NavigationBarCompnent/>

    <FooterComponent/>

  </div>
</template>

<style scoped>
.main_container{
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
}
</style>
