export const SET_PRODUCTS = 'set-products'
export const ADD_PRODUCT = 'add-product'
export const REMOVE_PRODUCT = 'remove-product'

export const addProduct = productId => ({
  type: ADD_PRODUCT,
  productId
})

export const removeProduct = productId => ({
  type: REMOVE_PRODUCT,
  productId
})

export const setProducts = products => ({
  type: SET_PRODUCTS,
  products
})
