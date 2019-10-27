import 'jest-extended'
import axios from '../src/client'
import segmentsMethods from '../src/api/segments'
import { testApiKey } from '../config'

describe('segments', () => {
  const client = segmentsMethods(axios(testApiKey))

  it('gets segments', async () => {
    await expect(client
      .getSegments())
      .resolves
      .toBeArray()
  })

  it('gets raw segments pagination', async () => {
    const rawSegments = await client.getSegmentsRaw()

    expect(rawSegments.meta.pagination).toHaveProperty('currentPage')
  })
})
