import axios from '../src/client'
import statsMethods from '../src/api/stats'
import { testApiKey } from '../config'

describe('stats', () => {
  const client = statsMethods(axios(testApiKey))

  it('gets account stats', async () => {
    await expect(client
      .getStats())
      .resolves
      .toHaveProperty('subscribed')
  })
})
