import axios from "axios";

const baseApi = import.meta.env.VITE_APP_BASE_API;
const token = import.meta.env.VITE_APP_API_TOKEN;



export const client = axios.create({
    baseURL: baseApi,
    headers:{
        'Authorization': `Bearer ${token}`
    }
})