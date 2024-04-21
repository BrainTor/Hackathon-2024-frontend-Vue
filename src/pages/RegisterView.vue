<template>
  <div class="mainContainer animBlink">
    <div class="containerBlock">
      <router-link to='/' style="text-decoration:none;">
        <div class="logo">
          <img src="@/assets/img/imgLogoMain.png" class="logo_img">
        </div>
      </router-link>


      <div class="containerInside shadowContainer">
        <center>
          <h1 class="titleText">Регистрация</h1>
        </center>
        <div style="display:flex;flex-direction:column;align-items:center; margin-bottom:1rem;">
          <p class="insideText">Введите email</p>

          <div class="inputRow">
            <fa class="input-icon" icon="user" />
            <input v-model="emailInput" type="email" ref="emailInput" class="insideInput">
          </div>

          <p class="insideText">Введите логин</p>

          <div class="inputRow">
            <fa class="input-icon" icon="user" />
            <input v-model="loginInput" type="text" ref="loginInput" class="insideInput">
          </div>

          <p class="insideText">Введите Пароль</p>

          <div class="inputRow">
            <fa class="input-icon" icon="lock" />
            <input v-model="passwordInput" class="insideInput" type="password">
          </div>

          <p class="insideText">Повторите Пароль</p>

          <div class="inputRow">
            <fa class="input-icon" icon="lock" />
            <input v-model="rePasswordInput" class="insideInput" type="password">
          </div>

          <div class="inputRow" style="margin-top:1.4rem;">
            <label class="custom-checkbox">
              <input type="checkbox" class="checkboxInput" v-model="isChecked">
              <span class="checkmark"></span>
              <a class="checkIDK">Принять пользовательское соглашение</a>
            </label>
          </div>


        </div>

        <div style="display:flex;flex-direction:column; align-items:center;">
          <button id="submit" @click="onSubmitClicked">Зарегистрироваться</button>
          <div style="display:flex;flex-direction:row; justify-content:space-between;">
            <p class="insideText" style="font-size:1rem; margin-bottom:1.5rem">Уже есть аккаунт? </p>

            <router-link to="/login" class="insideText"
              style="font-family: 'Noto Sans', sans-serif;font-size:1rem; margin-bottom:1.5rem;color:var(--primary_accent);text-decoration:underline; margin-left:7px;cursor:pointer;"><a>
                Войти</a></router-link>

          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useAuthenticationStore } from '@/stores';
import { defineComponent } from 'vue';
import { client } from '@/utils/axios';
import type { User } from '@/utils/types';
import router from '@/router';

export default defineComponent({
  name: 'RegisterVue',
  data() {
    return {
      emailInput: '',
      loginInput: '',
      passwordInput: '',
      rePasswordInput: '',
      isChecked: false,
    }

  },
  beforeRouteEnter() {
    const auth = useAuthenticationStore();
    if (auth.isAuthenticated == "LOGGEDIN" && (auth.user?.accountState === "DOCUMENT_VERIFICATION" || auth.user?.accountState === "VERIFIED")) router.push("/profile");
    if (auth.isAuthenticated == "LOGGEDIN" && auth.user?.accountState === "EMAIL_VERIFICATION") router.push("/getCode");
  },
  methods: {
    async onSubmitClicked() {
      if (this.passwordInput !== this.rePasswordInput) {
        // TODO: error system
        alert("пароли не совпадают.")
        return
      }
      const email = this.emailInput;
      const login = this.loginInput;
      const password = this.passwordInput;
      const auth = useAuthenticationStore();

      const resp = await client.post<{user: User, jwt: string}>("http://127.0.0.1:3000/auth/register", {
        email,
        login,
        password
      });
      if (resp.status != 200) {
        // TODO: push notification to notification service
        console.error(resp.data)
      }
      else {
        if (await auth.signIn(resp.data.jwt)) {
          router.push("/getCode");
        }
      }
    }
  }
})
</script>

<style scoped>
.logo_img {
  width: 80px;
}

label {
  display: flex;
  align-items: center;
}

.custom-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}


.custom-checkbox .checkmark {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: white;
  border-color: black;
  border-style: solid;
  border-width: 1.45px;
  border-radius: 3px;
}

.errorCheckMark {
  border-style: none !important;
  background-color: red !important;
  transition: background-color 1s ease !important;

}


.custom-checkbox .checkmark:after {
  content: "";
  position: absolute;
  display: none;

}


.custom-checkbox input:checked~.checkmark:after {
  display: block;
}

/* Style the checkmark/indicator (default style - hidden) */
.custom-checkbox .checkmark:after {
  left: 46.3px;
  top: 6px;
  width: 5px;
  height: 10px;
  border: solid black;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.errorCheckMark:after {
  border: solid white !important;
  border-width: 0 2px 2px 0 !important;
  transform: rotate(45deg) !important;
}


.errorCheck {
  color: red !important;
  transition: color 1s ease !important;
}

.errorInput {
  border-color: red !important;
  border-width: 2px !important;
  border-style: solid !important;
  transition: border-color 1s ease;
}

.mainContainer {
  width: 100%;
  height: 100vh;
  background: var(--backroundLogin);
  display: flex;
  align-items: center;
  justify-content: center;

}

.containerInside {
  width: 370px;
  height: 650px;
  background: var(--primary_green);
  margin-top: 1.5rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

}

.logo {
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.insideInput {
  width: 85%;
  padding: 10px;
  border: 2px solid transparent;
  border-radius: 8px;
  background: #DCDCDC;
  padding-left: 40px;
  color: black;
}

.insideInput::placeholder {
  color: red;
  font-size: 0.87rem;
}

.insideInput:focus {
  outline: none;
}

.insideText {
  margin: 0px;
  font-family: "Noto Sans", sans-serif;
  margin-top: 0.6rem;
  margin-bottom: 0.6rem;
  font-size: 1.05rem;
  color: #FFF5E0;
  font-weight: 470;
}

#submit {
  width: 85%;
  background: var(--primary_accent);

  height: 45px;
  font-size: 1.21rem;

  border: 0px;
  border-radius: 8px;
}

.titleText {
  margin-top: 1.5rem;
  color: #FFF5E0;
  font-family: "Noto Sans", sans-serif;
}

.checkIDK {
  font-size: 0.86rem;
  cursor: pointer;
  margin-left: 7px;
  margin-top: 0.2rem;
  color: #FFF5E0;
  font-family: "Noto Sans", sans-serif;
}

.checkboxInput {
  transform: scale(1.3);
  margin-right: 7px;
}
</style>