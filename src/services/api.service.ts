import axios, { AxiosError, AxiosResponse, HttpStatusCode } from "axios";
import createAuthRefreshInterceptor, {
  AxiosAuthRefreshRequestConfig,
} from "axios-auth-refresh";
import axiosRetry from "axios-retry";
import { useAuthStore } from "../store/authStore";
import { API_URL } from "@env";

const RETRY_COUNT = 3;

const API = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

const successResponseHandler = (response: AxiosResponse) => {
  return Promise.resolve({
    ...response,
    data: response.data.data ?? response.data,
  });
};

const errorResponseHandler = (error: AxiosError) => {
  console.error("API Error:", {
    url: error.config?.url,
    status: error.response?.status,
    data: error.response?.data,
  });

  return Promise.reject(error);
};

API.interceptors.request.use((config) => {
  const token = useAuthStore.getState().tokens?.access_token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  if (!config.headers["Content-Type"]) {
    config.headers["Content-Type"] = "application/json";
  }
  return config;
});

const refreshToken = async (failedRequest: { response: AxiosResponse }) => {
  const { tokens, setTokens, clearTokens } = useAuthStore.getState();
  try {
    if (!tokens?.refresh_token) throw new Error("No refresh token");

    const output = await API.post(
      "/auth/refresh", 
      { token: tokens.refresh_token },
      {
        skipAuthRefresh: true,
        headers: { Authorization: undefined },
      } as AxiosAuthRefreshRequestConfig
    );

    await setTokens(output.data);

    // Update the failed request with the new access token
    failedRequest.response.config.headers.Authorization = `Bearer ${output.data.access_token}`;

    return Promise.resolve(failedRequest);
  } catch (err) {
    await clearTokens();
    return Promise.reject(err);
  }
};

const handleErrorConditions = (error: AxiosError) => {
  switch (error.response?.status) {
    case HttpStatusCode.NotFound:
    case HttpStatusCode.UnprocessableEntity:
    case HttpStatusCode.Forbidden:
    case HttpStatusCode.TooManyRequests:
    case HttpStatusCode.BadRequest:
    case HttpStatusCode.InternalServerError:
    case HttpStatusCode.BadGateway:
      return false;
    default:
      return true;
  }
};


API.interceptors.response.use(successResponseHandler, errorResponseHandler);

createAuthRefreshInterceptor(API, refreshToken, {
  pauseInstanceWhileRefreshing: true,
  statusCodes: [401],
});

axiosRetry(API, {
  retries: RETRY_COUNT,
  retryCondition: handleErrorConditions,
  retryDelay: (retryCount) => retryCount * 10000,
});

export default API;
