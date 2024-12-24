import axios, { AxiosInstance } from 'axios'
//setup axios
class Http {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:4000/',
      timeout: 10000, // 10s set thời gian, khi quá thời gian này gọi api sẽ bị hủy
      // setup headers
      headers: {
        'Content-Type': 'application/json' // gửi lên server và yêu cầu server trả về dữ liệu là json
      }
    })
  }
}

const http = new Http().instance

export default http
