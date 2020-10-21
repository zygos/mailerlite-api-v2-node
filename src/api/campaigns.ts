import { AxiosInstance } from 'axios'
import {
  CampaignAction,
  CampaignContent,
  CampaignData,
  CampaignQuery,
  CampaignSendData,
  CampaignStatus,
  Count,
} from '../@types'

export default function(client: AxiosInstance) {
  return {
    async actOnCampaign(
      campaignId: number,
      action: CampaignAction,
      data: CampaignSendData = {},
    ) {
      return await client.post(`/campaigns/${campaignId}/actions/${action}`, data)
    },

    async getCampaigns(status: CampaignStatus = 'sent', params: CampaignQuery = {}) {
      return await client.get(`campaigns/${status}`, { params })
    },

    async getCampaignCount(status: CampaignStatus = 'sent'): Promise<number> {
      const { count }: Count = await client.get(`campaigns/${status}/count`)
      return count
    },

    async createCampaign(campaign: CampaignData) {
      if (!campaign.groups && !campaign.segments) {
        throw new Error('Groups or segments have to be specified')
      }

      if (campaign.type === 'regular' && !campaign.subject) {
        throw new Error('Mail subject is required if campaign type is regular.')
      }

      if (campaign.type === 'ab' && !campaign.abSettings && typeof campaign.abSettings !== 'object') {
        throw new Error('AbSettings are required if campaign type is ab.')
      }

      return await client.post('campaigns', campaign)
    },

    async removeCampaign(campaignId: number) {
      return await client.delete(`campaigns/${campaignId}`)
    },

    async setCampaignContent(campaignId: number, content: CampaignContent) {
      return await client.put(`campaigns/${campaignId}/content`, content)
    },
  }
}
