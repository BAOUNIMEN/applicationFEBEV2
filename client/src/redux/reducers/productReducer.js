import {
  ADD_PRODUCTS,
  DELETE_PRODUCTS,
  EDIT_PRODUCTS,
  GET_PRODUCTS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
} from "../actionTypes";

const init = {
  products: [],
  loading: false,
  errors: [],
};

const productReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: payload,
      };
    case GET_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        errors: [...state.errors, payload],
      };
    case ADD_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: [...state.products, payload],
      };
      case DELETE_PRODUCTS : 
      return {
          ...state,loading:false, products:state.products.filter(el=>el._id!==payload)
      };
      case EDIT_PRODUCTS:
      return {
      ...state,
      products: state.products.map((el) => (el._id === payload._id ? payload : el)),
  };
    default:
      return state;
  }
};

export default productReducer;
