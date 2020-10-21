import { AxiosInstance } from 'axios'
import { Stats } from '../@types'

export default function(client: AxiosInstance) {
  return {
    async getStats(): Promise<Stats> {
      return await client.get('stats')
    },
  }
}
