import 'jest-extended'
import axios from '../src/client'
import webhooksMethods from '../src/api/webhooks'
import { testApiKey } from '../config'

describe('webhooks', () => {
  const client = webhooksMethods(axios(testApiKey))

  it('gets webhooks', async () => {
    await expect(client
      .getWebhooks())
      .resolves
      .toBeArray()
  })
})
