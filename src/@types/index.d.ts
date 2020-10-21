import { AxiosRequestConfig } from 'axios'

export interface Options {
  axiosOptions?: AxiosRequestConfig
  baseURL?: string
  useCaseConverter?: boolean
  headers?: { [key: string]: string }
}

export type LanguageCode =
  'ar' |
  'bg' |
  'ca' |
  'ch' |
  'cz' |
  'de' |
  'dk' |
  'ee' |
  'en' |
  'es' |
  'fi' |
  'fr' |
  'frq' |
  'gr' |
  'he' |
  'hr' |
  'hu' |
  'it' |
  'lt' |
  'lv' |
  'mk' |
  'mx' |
  'nl' |
  'no' |
  'pl' |
  'pr' |
  'pt' |
  'ptbr' |
  'ro' |
  'ru' |
  'se' |
  'sk' |
  'sl' |
  'sr' |
  'tr' |
  'ua' |
  string |
  null

export type CampaignAction = 'send' | 'cancel'
export type CampaignStatus = 'sent' | 'draft' | 'outbox'

export interface CampaignQuery {
  limit?: number
  offset?: number
  order?: 'ASC' | 'DESC'
}

export interface CampaignData {
  type: 'regular' | 'ab'
  groups?: number[]
  segments?: number[]
  subject?: string
  from?: string
  fromName?: string
  language?: LanguageCode
  abSettings?: AbSettings
}

export interface AbSettings {
  values: any[]
  sendType: string
  abWinType: string
  winnerAfter: number
  winnerAfterType: string
  splitPart: number
}

export interface CampaignContent {
  html: string
  plain: string
  autoInline?: boolean
}

export interface Count {
  count: number
}

export interface CampaignSendData {
  type?: 1 | 2
  followupSchedule?: '24h' | 'specific'
  analytics?: 0 | 1
  date?: string
  timezoneId?: number
  folowupDate?: string
  followupTimezoneId?: number
}

export interface SegmentQuery {
  limit?: number
  offset?: number
  order?: 'ASC' | 'DESC'
}

export type SubscriberType = 'active' | 'unsubscribed' | 'bounced' | 'junk' | 'unconfirmed'

export interface SubscriberQuery {
  limit?: number
  offset?: number
  type?: SubscriberType
}

// TODO: consider adding optional key hints for city, company, etc.
export interface SubscriberFields {
  [key: string]: string | number | Date
}

// TODO: remove in next major version
export interface SubsriberFields extends SubscriberFields {}

export interface SubscriberData {
  email: string
  name?: string
  fields?: SubscriberFields
  resubscribe?: boolean
  type?: 'unsubscribed' | 'active' | 'unconfirmed'
  signupIp?: string
  signupTimestamp?: string
  confirmationIp?: string
  confirmationTimestamp?: string
}

export interface SubscriberDataUpdate {
  name?: string
  type?: 'unsubscribed' | 'active'
  fields?: SubscriberFields
  resendAutoresponders?: boolean
}

export interface SubscriberSearchQuery {
  query?: string
  offset?: number
  limit?: number
  minimized?: boolean
}

export type SubscriberActivityType =
  'opens' |
  'clicks' |
  'junks' |
  'bounces' |
  'unsubscribes' |
  'forwards' |
  'sendings' |
  null

export interface GroupQuery {
  limit?: number
  offset?: number
  filters?: string
}

export interface GroupData {
  name?: string
}

export interface GroupSubscriberData {
  email: string
  name?: string
  fields?: SubscriberFields
  resubscribe?: boolean
  type?: 'unsubscribed' | 'active' | 'unconfirmed'
  autoresponders?: boolean
}

export interface GroupSubscriberFlags {
  resubscribe?: boolean
  autoresponders?: boolean
  returnStatus?: boolean
}

export interface SubscriberGroupQuery extends GroupQuery {
  type?: SubscriberType
}

export interface FieldData {
  title?: string
  type?: 'TEXT' | 'NUMBER' | 'DATE'
}

export interface FieldUpdate {
  title?: string
}

export interface WebhookData {
  event: string
  url: string
}

export interface Stats {
  subscribed: number
  unsubscribed: number
  campaigns: number
  sentEmails: number
  openRate: number
  clickRate: number
  bounceRate: number
}

export interface DoubleOptinStatus {
  enabled: boolean
  previewPaths: {
    pagePath: string
    emailPath: string
  }
}

export interface Timezone {
  id: number
  time: number
  gmt: string
  title: string
  timezone?: string
}

export interface Account {
  id: number
  email: string
  from: string
  name: string
  subdomain: string
  timezone: Timezone
}

export interface AccountWrap {
  account: Account
}

export interface Batch {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  path: string
  body?: {
    [key: string]: any
  }
}

export interface SegmentsResponse {
  data: any[]
  meta: {
    pagination: {
      count: number
      current_page: number
      links: any[]
      per_page: number
      total: number
      total_pages: number
    }
  }
}

export interface WebhooksResponse {
  count: number
  limit: number
  start: number
  webhooks: any[]
}
