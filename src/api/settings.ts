import { AxiosInstance } from 'axios'
import { DoubleOptinStatus } from '../@types'

export default function (client: AxiosInstance) {
  return {
    getDoubleOptinStatus(): Promise<DoubleOptinStatus> {
      return client.get('settings/double_optin')
    },

    async hasEnabledDoubleOptin(): Promise<boolean> {
      try {
        const status = await this.getDoubleOptinStatus()
        return status.enabled
      } catch (err) {
        throw err
      }
    },

    setDoubleOptin(isEnabled: boolean): Promise<DoubleOptinStatus> {
      return client.post('settings/double_optin', {
        enable: isEnabled,
      })
    },

    enableDoubleOptin() {
      return this.setDoubleOptin(true)
    },

    disableDoubleOptin() {
      return this.setDoubleOptin(false)
    },
  }
}
