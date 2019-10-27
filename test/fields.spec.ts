import 'jest-extended'
import axios from '../src/client'
import fieldsMethods from '../src/api/fields'
import { testApiKey } from '../config'

describe('fields', () => {
  const client = fieldsMethods(axios(testApiKey))

  it('gets account fields', async () => {
    await expect(client
      .getFields())
      .resolves
      .toBeArray()
  })
})
