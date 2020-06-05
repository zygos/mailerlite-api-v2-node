import { AxiosInstance } from 'axios'
import { SubscriberQuery, SubscriberData, SubscriberDataUpdate, SubscriberSearchQuery, SubscriberActivityType } from '../@types'

export default function(client: AxiosInstance) {
  return {
    async getSubscribers(params: SubscriberQuery = {}) {
      return client.get('subscribers', { params })
    },

    async addSubscriber(subscriber: SubscriberData) {
      return client.post('subscribers', subscriber)
    },

    async getSubscriber(identifier: number | string) {
      return client.get(`subscribers/${identifier}`)
    },

    async updateSubscriber(identifier: number | string, subscriber: SubscriberDataUpdate) {
      return client.put(`subscribers/${identifier}`, subscriber)
    },

    async searchSubscribers(params: SubscriberSearchQuery = {}) {
      return client.get('subscribers/search', { params })
    },

    async getSubscriberActivity(identifier: number | string) {
      return client.get(`subscribers/${identifier}/activity`)
    },

    async getSubscriberActivityByType(
      identifier: number | string,
      activityType: SubscriberActivityType,
    ) {
      return client.get(`subscribers/${identifier}/actvity/${activityType}`)
    },

    async getSubscriberGroups(identifier: number | string) {
      return client.get(`subscribers/${identifier}/groups`)
    },
  }
}
