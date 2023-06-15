import React from 'react';
import './card.css';
import { useDispatch } from 'react-redux';
import { deleteProducts } from '../../redux/actions/productActions';
import { Editproduct } from './Editproduct';

const ProductCard = ({product}) => {
  const dispatch=useDispatch()
  // console.log(product)
  return (
    <div className="card">
      <h3> {product.title} </h3>
      <img src={product.imageUrl} alt="" />
      {/* <h4> {product.description} </h4> */}
      <h5> Prix:{product.price}D </h5>
      {/* {product.quantity > 0 ? (
        <h5>Currently available ({product.quantity} in stock) </h5>
      ) : (
        <h5>Currently out of stock </h5>
      )} */}
       <button style={{background:"#f44336", borderRadius:"4px",padding: "2px" }} onClick={()=>dispatch(deleteProducts(product._id))} >DELETE</button>
       <Editproduct product={product} />
    </div>
  );
};

export default ProductCard;