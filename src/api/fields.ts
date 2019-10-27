import { AxiosInstance } from 'axios'
import { FieldData, FieldUpdate } from '../@types'

export default function (client: AxiosInstance) {
  return {
    getFields() {
      return client.get('fields')
    },

    createField(field: FieldData) {
      return client.post('fields', field)
    },

    updateField(fieldId: number, fieldUpdate: FieldUpdate) {
      return client.put(`fields/${fieldId}`, fieldUpdate)
    },

    removeField(fieldId: number) {
      return client.delete(`fields/${fieldId}`)
    },
  }
}
