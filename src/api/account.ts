import { AxiosInstance } from 'axios'
import { AccountWrap } from '../@types'

export default function(client: AxiosInstance) {
  return {
    async getAccountRaw(): Promise<AccountWrap> {
      return client.get('me')
    },

    async getAccount() {
      const { account } = await this.getAccountRaw()
      return account
    },

    async getMe() {
      return this.getAccount()
    },
  }
}
