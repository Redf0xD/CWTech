const session = require('supertest-session')
const app = require('../src/app')
const { expect } = require('chai')
const agent = session(app)

describe('GET /iecho?text=query', () => {
  it('responde con un status code 200', async () => {
    const response = await agent.get('/iecho?text=query')
    expect(response.status).to.eql(200)
  })
  it('responde con el texto enviado por query invertido', async () => {
    const response = await agent.get('/iecho?text=query')
    expect(response.body.text).to.equal('yreuq')
  })
  it('el flag palindrome deberia retornar false', async () => {
    const response = await agent.get('/iecho?text=query')
    expect(response.body.palindrome).to.equal(false)
  })
  it('el flag palindrome deberia retornar true', async () => {
    const response = await agent.get('/iecho?text=dad')
    expect(response.body.palindrome).to.equal(true)
  })
  it('deberia retornar un status code 400 si el texto llega vacio', async () => {
    const response = await agent.get('/iecho?text=')
    expect(response.status).to.eql(400)
  })
})
