import { AxiosInstance } from 'axios'
import { SegmentQuery, SegmentsResponse } from '../@types'

export default function(client: AxiosInstance) {
  return {
    async getSegments(params: SegmentQuery = {}) {
      const { data } = await this.getSegmentsRaw(params)
      return data
    },

    async getSegmentsCount(params: SegmentQuery = {}) {
      const { meta } = await this.getSegmentsRaw(params)
      return meta.pagination.count
    },

    async getSegmentsRaw(params: SegmentQuery = {}): Promise<SegmentsResponse> {
      return client.get('segments', { params })
    },
  }
}
