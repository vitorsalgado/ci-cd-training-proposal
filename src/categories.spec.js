'use strict'

const Request = require('supertest')
const Server = require('./server')

describe('Categories', () => {
  beforeAll(() => Server.start())

  afterAll(() => Server.stop())

  it('it should return 200 (OK)', () =>
    Request(Server.listener())
      .get('/categories')
      .expect(200))
})
