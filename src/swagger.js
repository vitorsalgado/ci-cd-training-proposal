'use strict'

const Swagger = require('hapi-swaggered')

module.exports = {
  plugin: Swagger,
  options: {
    auth: false,
    schemes: ['http', 'https'],
    tags: [
      {
        name: 'catalog',
        description: 'Catalog Endpoints'
      }
    ],
    tagging: {
      mode: 'tags'
    },
    info: {
      title: 'Categories API',
      version: 'Categories API',
      description: 'DevOps Training Categories Provider'
    }
  }
}
