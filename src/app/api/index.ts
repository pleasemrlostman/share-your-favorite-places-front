import axios from "axios";

const api = axios.create({
  baseURL: "https://impressed-tandie-jhfordeploy-9d06538a.koyeb.app",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    // config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      // 인증 오류 처리
    }
    return Promise.reject(error);
  }
);

export default api;
