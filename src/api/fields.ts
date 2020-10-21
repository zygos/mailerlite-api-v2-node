import { AxiosInstance } from 'axios'
import { FieldData, FieldUpdate } from '../@types'

export default function(client: AxiosInstance) {
  return {
    async getFields() {
      return await client.get('fields')
    },

    async createField(field: FieldData) {
      return await client.post('fields', field)
    },

    async updateField(fieldId: number, fieldUpdate: FieldUpdate) {
      return await client.put(`fields/${fieldId}`, fieldUpdate)
    },

    async removeField(fieldId: number) {
      return await client.delete(`fields/${fieldId}`)
    },
  }
}
