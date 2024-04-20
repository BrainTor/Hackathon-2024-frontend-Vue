import { useAuthenticationStore } from "@/stores";
import axios from "axios";

const BASE_URL: string = import.meta.env.VITE_API_BASE_URL!!;

export const client = axios.create({
    baseURL: BASE_URL,
    validateStatus: () => true,
})
client.interceptors.request.use((config) => {
    const auth = useAuthenticationStore();
    if (auth.isAuthenticated == "LOGGEDIN" && !!config.headers.Authorization)
    {
        config.headers.Authorization = `Bearer ${auth.userJwt}`;    
    }
    return config;
});