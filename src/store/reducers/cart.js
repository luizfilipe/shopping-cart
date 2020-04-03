import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cart'
import { remove, omit } from 'lodash'

const initialState = []

const search = (state, { id }) => state.find(p => p.id === id)

export const cart = (state = initialState, action) => {
  let product = null
  switch (action.type) {
    case ADD_TO_CART:
      product = search(state, action.product)
      if (!product) {
        return [
          ...state,
          {
            ...omit(action.product, ['available']),
            quantity: 1
          }
        ]
      } else {
        product.quantity++
        break
      }
    case REMOVE_FROM_CART:
      product = search(state, action.product)
      if (product.quantity === 1) {
        remove(state, p => product.id === p.id)
      } else {
        product.quantity--
      }
      break
  }
  return [
    ...state
  ]
}
