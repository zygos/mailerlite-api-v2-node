import { AxiosInstance } from 'axios'
import {
  Count,
  GroupData,
  GroupQuery,
  GroupSubscriberData,
  GroupSubscriberFlags,
  SubscriberGroupQuery,
  SubscriberType,
} from '../@types'

export default function(client: AxiosInstance) {
  return {
    async getGroups(params: GroupQuery = {}) {
      return await client.get('groups', { params })
    },

    async getGroup(groupId: number) {
      return await client.get(`groups/${groupId}`)
    },

    async createGroup(group: GroupData) {
      return await client.post('groups', group)
    },

    async updateGroup(groupId: number, groupUpdate: GroupData) {
      return await client.put(`groups/${groupId}`, groupUpdate)
    },

    async removeGroup(groupId: number) {
      return await client.delete(`groups/${groupId}`)
    },

    async addSubscriberToGroup(groupId: number, subscriber: GroupSubscriberData) {
      return await client.post(`groups/${groupId}/subscribers`, subscriber)
    },

    async addSubscribersToGroup(
      groupId: number,
      subscribers: GroupSubscriberData[],
      importOptions: GroupSubscriberFlags = {},
    ) {
      return await client.post(`groups/${groupId}/subscribers/import`, {
        subscribers,
        ...importOptions,
      })
    },

    async getSubscribersGroupImport(groupId: number, importId: number) {
      return await client.get(`groups/${groupId}/subscribers/import/${importId}`)
    },

    async getGroupSubscriber(groupId: number, subscriberId: number) {
      return await client.get(`groups/${groupId}/subscribers/${subscriberId}`)
    },

    async getGroupSubscribers(groupId: number, params: SubscriberGroupQuery = {}) {
      return await client.get(`groups/${groupId}/subscribers`)
    },

    async getGroupSubscriberCount(groupId: number) {
      const { count }: Count = await client.get(`groups/${groupId}/subscribers/count`)
      return count
    },

    async getGroupSubscribersByType(
      groupId: number,
      subscriberType: SubscriberType,
      params: GroupQuery = {},
    ) {
      return await client.get(`groups/${groupId}/subscribers/${subscriberType}`, { params })
    },

    async getGroupSubscribersCountByType(
      groupId: number,
      subscriberType: SubscriberType,
    ) {
      const { count }: Count =
        await client.get(`groups/${groupId}/subscribers/${subscriberType}/count`)

      return count
    },

    async removeGroupSubscriber(groupId: number, subscriberIdentifier: number | string) {
      return await client.delete(`groups/${groupId}/subscribers/${subscriberIdentifier}`)
    },
  }
}
