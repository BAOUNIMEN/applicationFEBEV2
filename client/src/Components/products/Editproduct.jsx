import React, { useState } from 'react'
import {Button, Form, FormControl, Modal} from "react-bootstrap"
import { useDispatch } from 'react-redux';
import { editProducts } from '../../redux/actions/productActions';
export const Editproduct = ({product}) => {
    const [show, setShow] = useState(false);

    const [title, setTitle]= useState(product.title)
    const[description, setDescription]= useState(product.description)
    const[imageUrl, setImageUrl]=useState(product.imageUrl)
    const[ category,setCategory]= useState(product.category)
    const[price, setPrice]=useState(product.price)
    const[quantity, setQuantity]=useState(product.quantity)
    const dispatch = useDispatch();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = (e) => {
        e.preventDefault();
        const editedProduct = {
          id: product._id,
          title,
          description,
          imageUrl,
          category,
          price,
          quantity,
        };
        dispatch(editProducts(editedProduct));
        handleClose();
      };
  return (
    <div>
     <Button variant="primary" onClick={handleShow}>EDIT</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header> 
        <Modal.Body>
          <Form onSubmit={handleSubmit} >
            <FormControl
              placeholder="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></FormControl>
            <FormControl
              placeholder="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></FormControl>
            <FormControl
              placeholder="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            ></FormControl>
            <FormControl
              placeholder="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            ></FormControl>
            <FormControl
              placeholder="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></FormControl>
            <FormControl
              placeholder="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            ></FormControl>
            <Button variant="secondary" >
            Close
          </Button>
          <Button variant="primary" type="submit" >
            Save Changes
          </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
       </Modal>
    </div>
  )
}
