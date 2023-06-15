import React, { useState } from 'react'
import ProductList from '../products/ProductList'
import { useDispatch } from 'react-redux'
import { addproduct } from '../../redux/actions/productActions'
import Entet from '../accueil/Entet'
import Nav from '../accueil/Nav'
import './addproduct.css'
const Addproduct = () => {
    const [title, setTitle]= useState('')
    const[description, setDescription]= useState('')
    const[imageUrl, setImageUrl]=useState('')
    const[ category,setCategory]= useState('')
    const[price, setPrice]=useState('')
    const[quantity, setQuantity]=useState('')
    const dispatch = useDispatch();
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        const newprod={
            title,
            description,
            imageUrl,
            category,
            price,
            quantity,
        }
     dispatch(addproduct(newprod))
    }
  return (
    <div className='crud'> 
      <div className='header'>
       <Entet/>
       <Nav />
      </div>
      <div className='formulair'>
       <form onSubmit={handleSubmit}>
        <label>title</label>
        <input type="text" value = {title} onChange={(e)=>setTitle(e.target.value)}/>
        <label>description</label>
        <input type="text" value = {description} onChange={(e)=>setDescription(e.target.value)}/>
        <label>imageUrl</label>
        <input type="text" value = {imageUrl} onChange={(e)=>setImageUrl(e.target.value)}/>
        <label>category</label>
        <input type="text" value = {category} onChange={(e)=>setCategory(e.target.value)}/>
        <label>price</label>
        <input type="Number" value = {price} onChange={(e)=>setPrice(e.target.value)}/>
        <label>quantity</label>
        <input type="text" value = {quantity} onChange={(e)=>setQuantity(e.target.value)}/>
        <button type="Number" >Confirm</button>
        </form>
       </div>
       
     <ProductList/>
    </div>
  )
}

export default Addproduct