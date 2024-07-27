import axios from "axios";

export const baseURL = import.meta.env.VITE_BASE_URL;

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        ContentType: "application/json",
        "Cache-Control": "no-cache",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
        // token key
    },
});

const isOngoingMaintenance = (status) => {
    if (status === 404) {
        window.location.href = "/notfound";
    }
};

api.interceptors.request.use(
    (request) => {
        return request;
    },
    (error) => {
        isOngoingMaintenance(error.response?.status);
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        isOngoingMaintenance(response.data);
        return response;
    },
    (error) => {
        isOngoingMaintenance(error.response?.status);
        return Promise.reject(error);
    }
);

export default api;
