import http from './http'
import { setProducts } from '../store/actions/product'

export const getProducts = async dispatch => {
  try {
    const response = await http().get('/products')
    dispatch(setProducts(response.data.products))
  } catch (err) {
    console.error(err.message)
  }
}
