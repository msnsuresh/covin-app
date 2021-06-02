// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Redis from '@ioc:Adonis/Addons/Redis'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import covinApiService from 'App/Services/covin/CovinAPIService'

export default class CovinsController {
  public async findByPin({ response, params }: HttpContextContract) {
    const result = await Redis.get(params.pin)

    if (result) {
      response.send({
        message: 'from redis',
        data: JSON.parse(result),
      })
    } else {
      const { data } = await covinApiService.covinAPI.get(
        `appointment/sessions/public/findByPin?pincode=${params.pin}&date=02-06-2021`
      )
      await Redis.set(params.pin, Buffer.from(JSON.stringify(data)), 'EX', 10)
      response.send({
        message: 'from local',
        data,
      })
    }
  }
}
