import 'jest-extended'
import axios from '../src/client'
import campaignsMethods from '../src/api/campaigns'
import { testApiKey } from '../config'

describe('campaigns', () => {
  const client = campaignsMethods(axios(testApiKey))

  it('gets all campaigns', async () => {
    await expect(client
      .getCampaigns())
      .resolves
      .toBeArray()
  })

  it('gets campaign count', async () => {
    await expect(client
      .getCampaignCount())
      .resolves
      .toBeNumber()
  })
})
