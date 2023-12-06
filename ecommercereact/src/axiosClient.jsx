import axios from "axios";
import Cookies from "js-cookie";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
});

axiosClient.interceptors.request.use(async (config) => {
    const token = Cookies.get("ACCESS_TOKEN");
    config.headers.Authorization = `Bearer ${token}`;
    config.headers["Content-Type"] = ["application/json", "multipart/form-data"];
    return config;
});

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    throw error;
});



export default axiosClient;