import { SET_PRODUCTS, ADD_PRODUCT, REMOVE_PRODUCT } from '../actions/product'

const initialState = []

const search = (state, id) => state.find(p => p.id === id)

export const products = (state = initialState, action) => {
  let product = null
  switch (action.type) {
    case SET_PRODUCTS:
      return [
        ...state,
        ...action.products
      ]
    case ADD_PRODUCT:
      product = search(state, action.productId)
      product.available++
      break
    case REMOVE_PRODUCT:
      product = search(state, action.productId)
      product.available--
      break

  }

  return [
    ...state
  ]
}
