import { AxiosInstance } from 'axios'
import { Batch } from '../@types'

export default function (client: AxiosInstance) {
  return {
    batch(requests: Batch[]): Promise<any[]> {
      return client.post('batch', {
        requests,
      })
    },
  }
}
