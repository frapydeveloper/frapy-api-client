import axios, { AxiosResponse, AxiosRequestConfig, AxiosInstance } from "axios";

declare module "axios" {
  interface AxiosResponse<T = any> extends Promise<T> {}
}

export abstract class HttpClient {
  protected readonly instance: AxiosInstance;

  public constructor(url: string) {
    this.instance = axios.create({
      baseURL: url,
      responseType: "json",
      headers: {
        "Content-Type": "application/json",
      },
    });

    this._initializeResponseInterceptor();
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use((response: AxiosResponse) => {
      const { headers } = response;
      const accessToken: string | undefined = headers["access-token"];

      if (accessToken) {
        localStorage.setItem("access-token", accessToken);
      }

      return response;
    });

    this.instance.interceptors.request.use(
      (requestConfig: AxiosRequestConfig) => {
        const accessToken: string | null = localStorage.getItem("access-token");

        if (accessToken && requestConfig.headers) {
          const bearerToken = `Bearer ${accessToken}`;
          requestConfig.headers["authorization"] = bearerToken;
        }

        return requestConfig;
      }
    );
  };

  private _handleResponse = ({ data }: AxiosResponse) => data;

  protected _handleError = (error: any) => Promise.reject(error);
}
