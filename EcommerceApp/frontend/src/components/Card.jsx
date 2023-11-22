import React, { useState } from 'react';
import './css/Card.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { useNavigate } from 'react-router-dom';


function Card({ product }) {
  const [quantity, setQuantity] = useState(1);
 const navigate = useNavigate();


  const increaseQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const dispatch = useDispatch()

  const handleAddCart = (product) =>{

     dispatch(addToCart(product))
      navigate('/Cart');
   
  }

  return (

    
    <div className="card custom-card">
      
      <img
        src={product.imageURL}
        className="card-img-top"
        alt={product.name}
      />

      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-description">{product.description}</p>
        <p className="card-text">Price: ${product.price.toFixed(2)}</p>
        <div className="input-group mb-3">
          <span className="input-group-text">Quantity:</span>
          <input type="number" className="form-control" value={quantity} readOnly />
          <button className="btn btn-outline-secondary" onClick={decreaseQuantity}>-</button>
          <button className="btn btn-outline-secondary" onClick={increaseQuantity}>+</button>
        </div>
        <button className="btn btn-primary custom-button"  onClick={()=>handleAddCart(product)}>Add to Cart</button>
        <button className="btn btn-success custom-button">Buy</button>
      </div>
    </div>
  );
}

export default Card;
