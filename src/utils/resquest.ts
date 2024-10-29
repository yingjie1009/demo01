import axios from "axios";
import 'element-plus/es/components/message/style/css'

declare module "axios" {
  interface AxiosInstance {
    (config: AxiosRequestConfig): Promise<any>;
  }
}

var baseURL;
if (import.meta.env.MODE == "development") {
  baseURL = "/api";
} else {
  baseURL = (window as any).proBaseURL;
}


const requests = axios.create({
  baseURL: baseURL,
  timeout: 60000, // 请求超时时间
  // headers: {
  //   "Content-Type": "application/json",
  // },
});

// 添加请求拦截器
requests.interceptors.request.use(
  (config: any) => {
    // config.headers.authorization = sessionStorage.getItem("token");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
requests.interceptors.response.use(
  // 返回成功
  (res) => {
      return res.data
  },
  // 返回失败，终止Promise链
  (error) => {
    return Promise.reject(error.response);
  }
);

export default requests;
