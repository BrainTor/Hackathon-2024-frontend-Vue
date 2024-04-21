<script lang="ts">
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import { useAuthenticationStore } from './stores';
export default defineComponent({
    name: "App",
    data() {
        return {
            canWork: false
        }
    },
    mounted() {
        const auth = useAuthenticationStore();
        if (localStorage.getItem("authentication.jwt") !== null) {
            auth.signIn(localStorage.getItem("authentication.jwt")!!)
                .then(() => this.canWork = true);
        }
        else {
            auth.setIsAuthenticated("GUEST")
            this.canWork = true;
        }
    }
})
</script>

<template>
    <RouterView v-if="canWork" />
</template>