import { AxiosInstance } from 'axios'
import {
  GroupData,
  GroupQuery,
  GroupSubscriberData,
  GroupSubscriberFlags,
  SubscriberGroupQuery,
  SubscriberType,
  Count
} from '../@types'

export default function (client: AxiosInstance) {
  return {
    getGroups(params: GroupQuery = {}) {
      return client.get('groups', { params })
    },

    getGroup(groupId: number) {
      return client.get(`groups/${groupId}`)
    },

    createGroup(group: GroupData) {
      return client.post('group', group)
    },

    updateGroup(groupId: number, groupUpdate: GroupData) {
      return client.put(`groups/${groupId}`, groupUpdate)
    },

    removeGroup(groupId: number) {
      return client.delete(`groups/${groupId}`)
    },

    addSubscriberToGroup(groupId: number, subscriber: GroupSubscriberData) {
      return client.post(`groups/${groupId}/subscribers`, subscriber)
    },

    addSubscribersToGroup(
      groupId: number,
      subscribers: GroupSubscriberData[],
      importOptions: GroupSubscriberFlags = {},
    ) {
      return client.post(`groups/${groupId}/subscribers/import`, {
        subscribers,
        ...importOptions,
      })
    },

    getSubscribersGroupImport(groupId: number, importId: number) {
      return client.get(`groups/${groupId}/subscribers/import/${importId}`)
    },

    getGroupSubscriber(groupId: number, subscriberId: number) {
      return client.get(`groups/${groupId}/subscribers/${subscriberId}`)
    },

    getGroupSubscribers(groupId: number, params: SubscriberGroupQuery = {}) {
      return client.get(`groups/${groupId}/subscribers`)
    },

    async getGroupSubscriberCount(groupId: number) {
      const { count }: Count = await client.get(`groups/${groupId}/subscribers/count`)
      return count
    },

    getGroupSubscribersByType(
      groupId: number,
      subscriberType: SubscriberType,
      params: GroupQuery = {},
    ) {
      return client.get(`groups/${groupId}/subscribers/${subscriberType}`, { params })
    },

    async getGroupSubscribersCountByType(
      groupId: number,
      subscriberType: SubscriberType,
    ) {
      const { count }: Count =
        await client.get(`groups/${groupId}/subscribers/${subscriberType}/count`)

      return count
    },

    removeGroupSubscriber(groupId: number, subscriberIdentifier: number | string) {
      return client.delete(`groups/${groupId}/subscribers/${subscriberIdentifier}`)
    },
  }
}
