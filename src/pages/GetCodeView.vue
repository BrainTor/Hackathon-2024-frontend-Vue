<template>
  <div class="mainContainer animBlink">
    <div class="codeContainer shadowContainer">
      <router-link style="width: fit-content" to="/register">
        <fa icon="arrow-left" class="iconBack" />
      </router-link>

      <h3 style="margin-left: 20px; margin-bottom: 20px">Введите код:</h3>

      <p style="margin-left: 20px">
        Код подтверждения отправлен на указанную почту
      </p>

      <div class="inputsRow">
        <input v-for="(input, index) in inputs" :key="index" type="text" ref="inputs" v-model="input.value"
          @paste="handlePaste($event)" @input="handleInput(index, $event)" maxlength="1" class="inputCode" />
      </div>
      <!-- пока что убрано если успею реализую -->
      <!-- <p v-if="!this.timerEnd" :class="{ startAnim: !timerEnd }" style="margin-left:20px; cursor:not-allowed">Не пришел
        код? Отправить повторно,через {{ formattedTime }}</p>
      <p v-else class="resendCode">Отправить код повторно</p> -->

      <button class="sendButton" @click="onSendClicked">Отправить</button>
    </div>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import { useAuthenticationStore } from "@/stores";
import { client } from "@/utils/axios";
import type { User } from "@/utils/types";
import { defineComponent } from "vue";

export default defineComponent({
  name: "GetCodeView",
  mounted() {
    //this.initializeTimer();
  },

  computed: {
    formattedTime() {
      return `${this.minutes.toString().padStart(2, "0")}:${this.secundes
        .toString()
        .padStart(2, "0")}`;
    },
  },
  beforeMount() {
    const auth = useAuthenticationStore();
    console.log(auth.isAuthenticated, auth.user?.accountState)
    console.log(auth.isAuthenticated == "LOGGEDIN" && auth.user?.accountState === "DOCUMENT_VERIFICATION")
    console.log(auth.isAuthenticated == "LOGGEDIN" && auth.user?.accountState === "DOCUMENT_VERIFICATION")
    if (auth.isAuthenticated == "LOGGEDIN" && auth.user?.accountState === "DOCUMENT_VERIFICATION") router.push("/profile");
    else if (auth.isAuthenticated == "LOGGEDIN" && auth.user?.accountState === "VERIFIED") router.push("/profile");
    else if (auth.isAuthenticated == "GUEST") router.push("/login");
    else {
      (async () => {
        const auth = useAuthenticationStore();
        const resp = await client.get<{ sent: boolean }>("/auth/request-code", { headers: { Authorization: `Bearer ${auth.userJwt}` } });
        if (resp.data.sent) {
          console.log('new email was sent')
        }
        else {
          console.log('old email already exists')
        }
      })();
    }
  },
  data() {
    return {
      inputs: [
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
      ],
      err: false,
      code: "",
      minutes: 1,
      secundes: 30,

      timerEnd: false,
    };
  },
  methods: {
    handlePaste(event: any) {
      event.preventDefault();
      const data = event.clipboardData.getData("text").slice(0, 6);
      data.split("").forEach((char: any, index: number) => {
        this.inputs[index].value = char;
      });
    },
    initializeTimer() {
      const savedMinutes = localStorage.getItem("minutes");
      const savedSecond = localStorage.getItem("seconds");
      this.minutes = savedMinutes ? parseInt(savedMinutes) : 1;
      this.secundes = savedSecond ? parseInt(savedSecond) : 30; // Устанавливаем время на 1:30 минуты, если нет сохраненного значения
      this.startTimer();
    },

    startTimer() {
      const interval = setInterval(() => {
        if (this.secundes > 0) {
          this.secundes--;
          localStorage.setItem("seconds", this.secundes + "");
        } else if (this.minutes > 0) {
          this.minutes = 0;
          this.secundes = 59;
          localStorage.setItem("seconds", this.secundes + "");
          localStorage.setItem("minutes", this.minutes + "");
        } else {
          clearInterval(interval);
          localStorage.removeItem("seconds");
          localStorage.removeItem("minutes");
          this.timerEnd = true;
        }
      }, 1000);
    },
    handleInput(index: number, event: any) {
      if (event.target.value.length >= 1 && index < this.inputs.length - 1) {
        const inputs = this.$refs.inputs as HTMLInputElement[];
        if (inputs[index + 1]) {
          inputs[index + 1].focus();
        }
      }
    },
    async onSendClicked() {
      let d = '';
      const inputs = this.$refs.inputs as HTMLInputElement[];
      inputs.map(i => i.value.charAt(0)).forEach(i => d += i);
      const auth = useAuthenticationStore();
      const resp = await client.post<{ user: User, isActivated: boolean }>("/auth/enter-code", { code: d }, { headers: { Authorization: `Bearer ${auth.userJwt}` } });
      console.log("ok", resp.data, resp.status)
      if (resp.status != 200) {
        // TODO: push err to notification service
        console.error(resp.data)
      }
      else {
        if (resp.data.isActivated) {
          // relogin
          await auth.signIn(auth.userJwt!!);
          router.push("/profile");
        }
        else {
          // TODO: push err to notification service
          console.error('код не верен типа')
        }
      }
    }
  },
});
</script>

<style scoped>
.errorInput {
  border: 1px solid red !important;
  transition: 1s;
}

@keyframes slowSpawn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.startAnim {
  animation-name: slowSpawn;
  animation-duration: 1s;
  animation-iteration-count: 1;
}

.resendCode {
  cursor: pointer;
  opacity: 1;
  margin-left: 20px;
}

.iconBack {
  align-self: start;
  font-size: 20px;
  margin-bottom: 15px;
  cursor: pointer;
  transition: 1s;
  padding: 0.87rem;
  border-radius: 50%;
}

.iconBack:hover {
  background: #d3d3d3;
}

.mainContainer {
  background: var(--backroundLogin);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.codeContainer {
  background: var(--primary_green);
  width: fit-content;
  border-radius: 12px;
  padding: 40px;
  display: flex;
  flex-direction: column;
}

.inputCode {
  width: 60px;
  height: 60px;
  margin: 1.2rem;
  cursor: pointer;
  border: 0px;
  text-align: center;
  border-radius: 8px;
  font-weight: 900;
  background: silver;
  font-size: 1.4rem;
}

.inputCode:focus {
  outline: none;
}

.sendButton {
  background: var(--primary_accent);

  width: 10.5rem;
  margin-top: 0.7rem;
  align-self: end;
  height: 48px;
  font-size: 19.2px;
  border: 0px;
  border-radius: 8px;
}
</style>
