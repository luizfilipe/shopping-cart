export const ADD_TO_CART = 'add-to-cart'
export const REMOVE_FROM_CART = 'remove-from-cart'

export const addToCart = product => ({
  type: ADD_TO_CART,
  product
})

export const removeFromCart = product => ({
  type: REMOVE_FROM_CART,
  product
})
