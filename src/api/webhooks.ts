import { AxiosInstance } from 'axios'
import { WebhookData, WebhooksResponse } from '../@types'

export default function(client: AxiosInstance) {
  return {
    async getWebhooks() {
      const { webhooks } = await this.getWebhooksRaw()
      return webhooks
    },

    async getWebhooksCount() {
      const { count } = await this.getWebhooksRaw()
      return count
    },

    async getWebhooksRaw(): Promise<WebhooksResponse> {
      return client.get('webhooks')
    },

    async getWebhook(webhookId: number) {
      return client.get(`webhooks/${webhookId}`)
    },

    async createWebhook(webhook: WebhookData) {
      return client.post('webhooks', webhook)
    },

    async updateWebhook(webhookId: number, webhook: WebhookData) {
      return client.post(`webhooks/${webhookId}`, webhook)
    },

    async removeWebhook(webhookId: number) {
      return client.delete(`webhooks/${webhookId}`)
    },
  }
}
