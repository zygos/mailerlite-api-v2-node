import axios from '../src/client'
import batchMethods from '../src/api/batch'
import { testApiKey } from '../config'

describe('batch', () => {
  const client = batchMethods(axios(testApiKey))

  it('gets account info via batch', async () => {
    const batchResult = await client.batch([
      {
        method: 'GET',
        path: '/api/v2/me',
      },
    ])

    expect(batchResult).toHaveLength(1)
    expect(batchResult).toBeInstanceOf(Array)
    expect(batchResult[0]).toHaveProperty('body')
    expect(batchResult[0].body).toHaveProperty('account')
  })
})
