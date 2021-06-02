import axios, { AxiosInstance } from 'axios'

class CovinAPIService {
  public covinAPI: AxiosInstance
  private isBooted = false

  public boot() {
    if (this.isBooted) {
      return
    }

    this.isBooted = true
    this.covinAPI = axios.create({
      baseURL: 'https://cdn-api.co-vin.in/api/v2',
    })
  }
}

export default new CovinAPIService()
