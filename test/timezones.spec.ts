import 'jest-extended'
import axios from '../src/client'
import timezonesMethods from '../src/api/timezones'
import { testApiKey } from '../config'

describe('timezones', () => {
  const client = timezonesMethods(axios(testApiKey))

  it('gets all timezones', async () => {
    await expect(client
      .getTimezones())
      .resolves
      .toBeArray()
  })

  it('gets campaign count', async () => {
    await expect(client
      .getTimezone(1))
      .resolves
      .toHaveProperty('time')
  })
})
