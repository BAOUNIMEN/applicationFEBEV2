import axios from 'axios';
import {
  ADD_PRODUCTS,
  DELETE_PRODUCTS,
  EDIT_PRODUCTS,
  GET_PRODUCTS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
} from '../actionTypes';

export const getProducts = () => async (dispatch) => {
  dispatch({
    type: GET_PRODUCTS,
  });
  try {
    const {data} = await axios.get('/product/get_products');
    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_FAIL,
      payload: error.response.data,
    });
  }
};
export const addproduct = (newProduct) => async(dispatch) => {
  try {
    const {data} = await axios.post("/product/add_products",newProduct)
      console.log(data)
      dispatch({
          type:ADD_PRODUCTS,
          payload:data
      })
  } catch (error) {
      alert("add error")
  }
};
export const deleteProducts = (id) => async(dispatch) => {
  try {
      const {data} = await axios.delete(`/product/delete_products/${id}`)
      console.log(data)
      dispatch({
          type:DELETE_PRODUCTS,
          payload:id
      })
  } catch (error) {
      // alert("delete error")
      console.log(error.message)
  }
}
export const editProducts = (editedProduct) => async (dispatch) => {
  try {
       const {data} = await axios.put(`/product/edit_products/${editedProduct.id}`, editedProduct)
       dispatch({
        type:EDIT_PRODUCTS,
        payload: data
       })
  } catch (error) {
    //  alert('edit error')
    console.log(error.message)
  }

} 