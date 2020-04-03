import http from './http'

export const getVouchers = async () => {
  try {
    const response = await http().get('/vouchers')
    return response.data
  } catch (err) {
    console.error(err.message)
  }
}
