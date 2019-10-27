import 'jest-extended'
import axios from '../src/client'
import groupsMethods from '../src/api/groups'
import { testApiKey } from '../config'

describe('groups', () => {
  const client = groupsMethods(axios(testApiKey))

  it('gets groups and group subscriber count', async () => {
    const groups = await client.getGroups()

    expect(groups).toBeArray()

    if (!Array.isArray(groups)) return

    expect(groups.length).toBeGreaterThanOrEqual(1)

    await expect(client
      .getGroupSubscriberCount(groups[0].id))
      .resolves
      .toBeNumber()
  })
})
