import { AxiosInstance } from 'axios'
import { SubscriberQuery, SubscriberData, SubscriberDataUpdate, SubscriberSearchQuery, SubscriberActivityType } from '../@types'

export default function (client: AxiosInstance) {
  return {
    getSubscribers(params: SubscriberQuery = {}) {
      return client.get('subscribers', { params })
    },

    addSubscriber(subscriber: SubscriberData) {
      return client.post('subscribers', subscriber)
    },

    getSubscriber(identifier: number | string) {
      return client.get(`subscribers/${identifier}`)
    },

    updateSubscriber(identifier: number | string, subscriber: SubscriberDataUpdate) {
      return client.put(`subscribers/${identifier}`, subscriber)
    },

    searchSubscribers(params: SubscriberSearchQuery = {}) {
      return client.get('subscribers/search', { params })
    },

    getSubsscriberActivity(identifier: number | string) {
      return client.get(`subscribers/${identifier}/activity`)
    },

    getSubscriberActivityByType(
      identifier: number | string,
      activityType: SubscriberActivityType,
    ) {
      return client.get(`subscribers/${identifier}/actvity/${activityType}`)
    },

    getSubsscriberGroups(identifier: number | string) {
      return client.get(`subscribers/${identifier}/groups`)
    },
  }
}
