import axios, { AxiosRequestConfig } from 'axios'
import { useCallback } from 'react'

const instance = axios.create({
  timeout: 2000,
  baseURL: '/api/',
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
  // baseURL: import.meta.env.VITE_BASE_URL
})

interface Config extends AxiosRequestConfig {
  token?: string
}

// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    const token = localStorage.getItem('token')
    config.headers.Authorization = token ? `Bearer ${token}` : ''
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  ({ data }) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return data
  },
  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export const http = async (params: Config) => {
  const config = {
    method: 'GET',
    ...params
  }
  return instance(config)
}

export const useHttp = () => {
  const token = localStorage.getItem('token')
  return useCallback((params: Config) => http(params), [token])
}
