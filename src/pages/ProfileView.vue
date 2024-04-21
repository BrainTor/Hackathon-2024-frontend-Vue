<template>
  <div class="min-h-screen flex flex-col">
    <NavigationBarCompnent class="mb-10" />
    <div class="flex flex-1 overflow-hidden">
      <SideBarComponent @link-picker="handleData" class="sidebar ml-5" />
      <ProfileMainComponent :number="childDate" class="profile ml-5 mr-5 mb-10" />
    </div>
  </div>
</template>

<script setup lang="ts">
import NavigationBarCompnent from '@/components/NavigationBarCompnent.vue';
import ProfileMainComponent from '@/components/ProfileMainComponent.vue';
import SideBarComponent from '@/components/SideBarComponent.vue';
import router from '@/router';
import { useAuthenticationStore } from '@/stores';
import { onBeforeMount, ref } from 'vue';

onBeforeMount(() => {
  const auth = useAuthenticationStore();
  if (auth.isAuthenticated == "LOGGEDIN" && auth.user?.accountState == "EMAIL_VERIFICATION") router.push("/getCode");
  if (auth.isAuthenticated == "LOGGEDIN" && auth.user?.accountState == "DISABLED") { auth.logout(); router.push("/"); }
})
let childDate = ref(0)
function handleData(number: number) {
  childDate.value = number
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