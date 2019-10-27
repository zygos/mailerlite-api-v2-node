import { AxiosInstance } from 'axios'
import { WebhookData, WebhooksResponse } from '../@types'

export default function (client: AxiosInstance) {
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
      return await client.get('webhooks')
    },

    getWebhook(webhookId: number) {
      return client.get(`webhooks/${webhookId}`)
    },

    createWebhook(webhook: WebhookData) {
      return client.post('webhooks', webhook)
    },

    updateWebhook(webhookId: number, webhook: WebhookData) {
      return client.post(`webhooks/${webhookId}`, webhook)
    },

    removeWebhook(webhookId: number) {
      return client.delete(`webhooks/${webhookId}`)
    },
  }
}
