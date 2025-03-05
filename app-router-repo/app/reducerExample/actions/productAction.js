export const GET_PRODUCTS = 'GET_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

export const getProducts = (products) => ({
  type: GET_PRODUCTS,
  payload: products,
});

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const deleteProduct = (productId) => ({
  type: DELETE_PRODUCT,
  payload: productId,
});