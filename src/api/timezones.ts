import { AxiosInstance } from 'axios'
import { Timezone } from '../@types'

export default function(client: AxiosInstance) {
  return {
    async getTimezones(): Promise<Timezone> {
      return await client.get('timezones', {
        baseURL: 'https://api.mailerlite.com/api/master/',
      })
    },

    async getTimezone(timezoneId: number): Promise<Timezone> {
      return await client.get(`timezones/${timezoneId}`, {
        baseURL: 'https://api.mailerlite.com/api/master/',
      })
    },
  }
}
