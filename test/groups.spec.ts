import 'jest-extended'
import axiosFactory from '../src/client'
import groupsMethods, { MailerLiteGroup } from '../src/api/groups'
import { testApiKey, testSubscriberEmail } from '../config'

const subscriberEmail = testSubscriberEmail ?? 'john@doe.com'

const asyncNoop = async () => {}

const clientFactory = () => {
  const axios = axiosFactory(testApiKey)
  const client = groupsMethods(axios)

  return { axios, client }
}

describe('groups', () => {
  it('gets groups', async () => {
    const { client } = clientFactory()
    const groups = await client.getGroups()

    expect(groups).toBeArray()
    expect(groups.length).toBeGreaterThanOrEqual(1)
  })

  describe('group searching', () => {
    let group: MailerLiteGroup

    beforeAll(async () => {
      const { client } = clientFactory()
      group = await client.createGroup({ name: 'test-group' })
    })

    afterAll(async () => {
      const { client } = clientFactory()
      await client.removeGroup(group.id)
    })

    it('searches groups by group name', async () => {
      const { client } = clientFactory()
      const groups = await client.searchGroups(group.name)

      expect(groups).toBeArray()
      expect(groups[0].id).toBe(group.id)
    })
  })

  describe('group subscribers', () => {
    let group: MailerLiteGroup

    beforeAll(async () => {
      const { client } = clientFactory()
      group = (await client.getGroups())[0]
    })

    it('gets group subscriber count', async () => {
      const { client } = clientFactory()

      await expect(client
        .getGroupSubscriberCount(group.id))
        .resolves
        .toBeNumber()
    })

    it('adds a subscriber to a provided group', async () => {
      const { axios, client } = clientFactory()
      const axiosPost = jest
        .spyOn(axios, 'post')
        .mockImplementation(asyncNoop)

      await client.addSubscriberToGroup(group.id, {
        email: subscriberEmail,
        name: 'John Doe',
        fields: {},
      })

      expect(axiosPost).toBeCalledWith(
        `groups/${group.id}/subscribers`,
        { email: subscriberEmail, fields: {}, name: 'John Doe' },
      )
    })

    it('removes a subscriber from a provided group', async () => {
      const { axios, client } = clientFactory()

      const axiosDelete = jest
        .spyOn(axios, 'delete')
        .mockImplementation(asyncNoop)

      await client.removeGroupSubscriber(group.id, subscriberEmail)

      expect(axiosDelete)
        .toBeCalledWith(`groups/${group.id}/subscribers/${subscriberEmail}`)
    })
  })
})
