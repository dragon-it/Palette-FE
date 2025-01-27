import { baseInstanceFormData } from 'api/index'

export async function GroupPurchasePostApi(dto, file) {
  console.log(dto)
  console.log(file)
  try {
    const formData = new FormData()

    formData.append(
      'dto',
      new Blob([JSON.stringify(dto)], { type: 'application/json' })
    )

    for (const blob of file) {
      formData.append('file', blob, `${Date.now()}.png`)
    }

    const response = await baseInstanceFormData.post(
      '/api/groupPurchase',
      formData
    )
    return response.data
  } catch (error) {
    console.error('PURCHASEPOST_FAILURE', error)
    throw error
  }
}
