import account from './api/account'
import axiosClient from './client'
import batch from './api/batch'
import campaigns from './api/campaigns'
import fields from './api/fields'
import groups from './api/groups'
import segments from './api/segments'
import settings from './api/settings'
import stats from './api/stats'
import subscribers from './api/subscribers'
import timezones from './api/timezones'
import webhooks from './api/webhooks'
import { Options } from './@types'

export default function MailerLite(apiKey: string, options: Options = {}) {
  const client = axiosClient(apiKey, options)

  return {
    ...account(client),
    ...batch(client),
    ...campaigns(client),
    ...fields(client),
    ...groups(client),
    ...segments(client),
    ...settings(client),
    ...stats(client),
    ...subscribers(client),
    ...timezones(client),
    ...webhooks(client),
  }
}
