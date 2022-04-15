import axios, { Axios, AxiosResponse, AxiosRequestConfig } from "axios";

const axiosClient: Axios = axios.create({
  baseURL: process.env.REACT_APP_API,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.response.use((response: AxiosResponse) => {
  const { headers } = response;
  const accessToken: string | undefined = headers["access-token"];

  if (accessToken) {
    localStorage.setItem("access-token", accessToken);
  }

  return response;
});

axiosClient.interceptors.request.use((requestConfig: AxiosRequestConfig) => {
  const accessToken: string | null = localStorage.getItem("access-token");

  if (accessToken && requestConfig.headers) {
    const bearerToken = `Bearer ${accessToken}`;
    requestConfig.headers["authorization"] = bearerToken;
  }

  return requestConfig;
});

export default axiosClient;
