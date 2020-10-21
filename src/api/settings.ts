import { AxiosInstance } from 'axios'
import { DoubleOptinStatus } from '../@types'

export default function(client: AxiosInstance) {
  return {
    async getDoubleOptinStatus(): Promise<DoubleOptinStatus> {
      return await client.get('settings/double_optin')
    },

    async hasEnabledDoubleOptin(): Promise<boolean> {
      const status = await this.getDoubleOptinStatus()
      return status.enabled
    },

    async setDoubleOptin(isEnabled: boolean): Promise<DoubleOptinStatus> {
      return await client.post('settings/double_optin', {
        enable: isEnabled,
      })
    },

    async enableDoubleOptin() {
      return await this.setDoubleOptin(true)
    },

    async disableDoubleOptin() {
      return await this.setDoubleOptin(false)
    },
  }
}
