import { SET_PRODUCTS, ADD_PRODUCT, REMOVE_PRODUCT } from '../actions/product'

const initialState = [
  {
    id: 1,
    name: 'Banana',
    price: 10.0,
    available: 10
  },
  {
    id: 2,
    name: 'Apple',
    price: 20.0,
    available: 15
  },
  {
    id: 3,
    name: 'Orange',
    price: 30.0,
    available: 8
  },
  {
    id: 4,
    name: 'Mango',
    price: 15.0,
    available: 20
  }
]

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
