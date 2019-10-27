import { AxiosInstance } from 'axios'
import { DoubleOptinStatus } from '../@types'

export default function(client: AxiosInstance) {
  return {
    async getDoubleOptinStatus(): Promise<DoubleOptinStatus> {
      return client.get('settings/double_optin')
    },

    async hasEnabledDoubleOptin(): Promise<boolean> {
      const status = await this.getDoubleOptinStatus()
      return status.enabled
    },

    async setDoubleOptin(isEnabled: boolean): Promise<DoubleOptinStatus> {
      return client.post('settings/double_optin', {
        enable: isEnabled,
      })
    },

    async enableDoubleOptin() {
      return this.setDoubleOptin(true)
    },

    async disableDoubleOptin() {
      return this.setDoubleOptin(false)
    },
  }
}
