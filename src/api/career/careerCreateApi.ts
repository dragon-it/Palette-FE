import { baseInstanceFormData } from '../axios'
import { requestCreateResponseDataProps } from '@/types'

export async function careerCreateApi(dto, file) {
  try {
    const formData = new FormData()
    // formData.append('dto', JSON.stringify(dto)) // 요거 안댐

    formData.append(
      // 요거 댐
      'dto',
      new Blob([JSON.stringify(dto)], { type: 'application/json' })
    )

    for (const blob of file) {
      formData.append('file', blob, `${Date.now()}.png`)
    }

    const response = await baseInstanceFormData.post(
      '/develop/create',
      formData
    )

    return {
      status: response.status,
      success: true,
      response: response.data,
      error: null
    }
  } catch (error: any) {
    const errorResponseData: requestCreateResponseDataProps = {
      status: error.response?.status,
      success: false,
      response: [],
      error: error.response?.data.message || 'Unknown Error'
    }

    return errorResponseData
  }
}
