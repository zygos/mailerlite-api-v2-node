import axios from '../src/client'
import accountMethods from '../src/api/account'
import { testApiKey } from '../config'

describe('account', () => {
  const client = accountMethods(axios(testApiKey))

  it('gets account info', async () => {
    const account = await client.getAccount()
    expect(account).toHaveProperty('email')
  })
})
