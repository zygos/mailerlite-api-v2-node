import axios, { AxiosInstance } from 'axios'
import camelCase from 'camelcase-keys'
import snakeCase from 'snakecase-keys'
import { Options } from './@types'

export default function MailerLiteClient(apiKey: string, {
  axiosOptions = {},
  baseURL = 'https://api.mailerlite.com/api/v2/',
  useCaseConverter = true,
  headers = {},
}: Options = {}) {
  if (typeof apiKey !== 'string') throw new Error('No API key provided')

  const axiosConfig = {
    ...axiosOptions,
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      'X-MailerLite-ApiKey': apiKey,
      'User-Agent': 'MailerLite API v2 Node',
      ...headers,
    },
  }

  const client: AxiosInstance = axios.create(axiosConfig)

  if (useCaseConverter) {
    client.interceptors.request.use(
      (request) => {
        if (!!request.data && typeof request.data === 'object') {
          request.data = snakeCase(request.data, { deep: true })
        }

        return request
      },
      async (error) => Promise.reject(error),
    )
  }

  client.interceptors.response.use(
    (response) => {
      if (!useCaseConverter) return response.data

      return camelCase(response.data, { deep: true })
    },
    async (error) => Promise.reject(error),
  )

  return client
}
