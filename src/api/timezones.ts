import { AxiosInstance } from 'axios'
import { Timezone } from '../@types'

export default function (client: AxiosInstance) {
  return {
    getTimezones(): Promise<Timezone> {
      return client.get('timezones', {
        baseURL: 'https://api.mailerlite.com/api/master/',
      })
    },

    getTimezone(timezoneId: number): Promise<Timezone> {
      return client.get(`timezones/${timezoneId}`, {
        baseURL: 'https://api.mailerlite.com/api/master/',
      })
    },
  }
}
