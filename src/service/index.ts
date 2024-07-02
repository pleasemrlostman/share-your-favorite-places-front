import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

class Service {
  protected http: AxiosInstance;

  constructor(baseURL: string) {
    this.http = axios.create({
      baseURL,
    });

    // 요청 인터셉터
    this.http.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // 여기서 요청 전에 작업을 수행할 수 있습니다.
        // 예: 토큰 추가
        // const token = localStorage.getItem('token');
        // if (token) {
        //   config.headers['Authorization'] = `Bearer ${token}`;
        // }
        return config;
      },
      (error) => {
        // 요청 오류가 있는 작업 수행
        return Promise.reject(error);
      }
    );

    // 응답 인터셉터
    this.http.interceptors.response.use(
      (response: AxiosResponse) => {
        // 응답 데이터를 가공하거나 로깅할 수 있습니다.
        return response;
      },
      (error) => {
        // 응답 오류가 있는 작업 수행
        return Promise.reject(error);
      }
    );
  }
}

export default Service;
