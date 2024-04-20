<template>

    <div class="min-h-screen flex flex-col">
        <NavigationBarCompnent class="mb-10" />
        <div class="flex flex-1 overflow-hidden">
          <SideBarComponent  class="container h-auto mb-10 ml-4"/>
          <ProfileMainComponent class="container mb-10" />
        </div>
      </div>
</template>

<script lang="ts" setup>
import NavigationBarCompnent from '@/components/NavigationBarCompnent.vue';
import ProfileMainComponent from '@/components/ProfileMainComponent.vue';
import SideBarComponent from '@/components/SideBarComponent.vue';



</script>

<style scoped>
.container{
    background-color: var(--secondary_green);
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
   
}

</style>