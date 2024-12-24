import axios, { AxiosError } from 'axios'
import { useSearchParams } from 'react-router-dom'

// tạo hook search lấy từ params url
export const useQueryString = () => {
  const [searchParams] = useSearchParams()
  const searchParamsObject = Object.fromEntries([...searchParams])
  return searchParamsObject // trả về 1 object params vd: url?page=2
}

// tạo method check error và trả về kiểu error là AxiosError
export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  return axios.isAxiosError(error)
}
