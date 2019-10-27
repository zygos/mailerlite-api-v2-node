import { AxiosInstance } from 'axios'
import { FieldData, FieldUpdate } from '../@types'

export default function(client: AxiosInstance) {
  return {
    async getFields() {
      return client.get('fields')
    },

    async createField(field: FieldData) {
      return client.post('fields', field)
    },

    async updateField(fieldId: number, fieldUpdate: FieldUpdate) {
      return client.put(`fields/${fieldId}`, fieldUpdate)
    },

    async removeField(fieldId: number) {
      return client.delete(`fields/${fieldId}`)
    },
  }
}
