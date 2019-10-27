import 'jest-extended'
import axios from '../src/client'
import settingsMethods from '../src/api/settings'
import { testApiKey } from '../config'

describe('settings', () => {
  const client = settingsMethods(axios(testApiKey))

  it('gets whether double opt-in was enabled', async () => {
    await expect(client
      .hasEnabledDoubleOptin())
      .resolves
      .toBeBoolean()
  })
})
