import Logger from '@ioc:Adonis/Core/Logger'
import covinApiService from 'App/Services/covin/CovinAPIService'
import { AxiosRequestConfig } from 'axios'

covinApiService.boot()

covinApiService.covinAPI.interceptors.request.use((config: AxiosRequestConfig) => {
  Logger.info(config.data, 'Request -> ')
  return config
})

covinApiService.covinAPI.interceptors.response.use((x) => {
  Logger.info(x.data, 'from console')
  return x
})
