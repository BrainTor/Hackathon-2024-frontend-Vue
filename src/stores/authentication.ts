import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { User } from '@/utils/types';
import { client } from '@/utils/axios';

export const useAuthenticationStore = defineStore('authentication', () => {
  const authenticationStatus = ref<string>("WAITING");
  const userJwt = ref<string | null>(null);
  const user = ref<User | null>(null);

  async function logout() {
    authenticationStatus.value = "GUEST";
    userJwt.value = null;
    user.value = null;
    localStorage.removeItem("authentication.jwt");
  }
  async function signIn(jwt: string) {
    console.log(jwt)
    if (authenticationStatus.value == "GUEST" || authenticationStatus.value == "WAITING") {
      const resp = await client.get<{ user: User }>("/users/@me", { headers: { Authorization: `Bearer ${jwt}` } });
      console.log("ok", resp.data, resp.status)
      if (resp.status != 200) {
        // TODO:push notification to notification service
        console.error(resp.data)
      }
      else {
        authenticationStatus.value = "LOGGEDIN";
        user.value = resp.data.user;
        userJwt.value = jwt;
        localStorage.setItem("authentication.jwt", jwt);
        return true;
      }
      return false;

    }
  }
  function setIsAuthenticated(data: string) {
    authenticationStatus.value = data;
  }
  return { isAuthenticated: authenticationStatus, userJwt, user, logout, signIn, setIsAuthenticated }
})
