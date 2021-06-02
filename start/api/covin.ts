import Route from '@ioc:Adonis/Core/Route'

Route.group(async () => {
  Route.get('findByPin/:pin', 'CovinsController.findByPin')
}).prefix('api/covin')
