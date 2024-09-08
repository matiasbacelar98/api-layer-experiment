import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

// Axios instance & default parameters
const axiosParams = {
  baseURL: 'https://jsonplaceholder.typicode.com',
};

const axiosInstance = axios.create(axiosParams);

// Main API method
function api(axios: AxiosInstance) {
  return {
    get: <T>(url: string, config: AxiosRequestConfig = {}) =>
      axios.get<T>(url, config),
    post: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
      axios.post<T>(url, body, config),
    patch: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
      axios.patch<T>(url, body, config),
    put: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
      axios.put<T>(url, body, config),
    delete: <T>(url: string, config: AxiosRequestConfig) =>
      axios.delete<T>(url, config),
  };
}

export default api(axiosInstance);
