'use strict'

/* eslint-disable no-console */

const Hapi = require('hapi')
const Inert = require('inert')
const Vision = require('vision')
const Categories = require('./categories')
const CategoriesSchema = require('./categories.schema')
const Swagger = require('./swagger')
const SwaggerUi = require('./swagger-ui')

const Port = 3000
const Host = '0.0.0.0'
const Server = Hapi.server({ compression: false, port: Port, host: Host })

Server.route(
  {
    method: 'GET',
    path: '/categories',
    handler: (_, ctx) => ctx.response(Categories),
    options: {
      tags: ['api', 'catalog'],
      auth: false,
      response: { schema: CategoriesSchema }
    }
  })

module.exports.start = () =>
  Server
    .register([Inert, Vision, Swagger, SwaggerUi])
    .then(() =>
      Server.start()
        .then(() => console.debug(`DevOps Training API is online on port: ${Port}`))
        .catch(console.error))

module.exports.server = () => Server

module.exports.listener = () => Server.listener

module.exports.stop = () => Server.stop()
