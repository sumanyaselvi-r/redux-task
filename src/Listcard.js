// src/components/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from './redux/product-reducer';
import store from './redux/store';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();
  const cartLength = store.getState().cart.items.length;

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleIncreaseQuantity = (productId) => {
    dispatch(increaseQuantity(productId));
  };

  const handleDecreaseQuantity = (productId) => {
    dispatch(decreaseQuantity(productId));
  };

  return (
    <>
         <h1 style={{ textAlign: 'center', fontFamily: "'Times New Roman', Times, serif", backgroundColor: "bisque" }}>cart({cartLength})
          
         </h1>
      <br></br>
      {
        cartLength > 0 ? (<ol className="list-group list-group-numbered">
          {cartItems.map((item) => (
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <img src={item.image} width={100} height={80}></img>
              <div className="fw-bold"><h3>{item.name}</h3></div>
              Rs.{item.price}


              <div>
                <button class="btn btn-primary" onClick={() => handleIncreaseQuantity(item.id)}>+</button><span>   {item.quantity}    </span>
                <button class="btn btn-primary " onClick={() => handleDecreaseQuantity(item.id)}>-</button>
              </div>
              <button class="btn btn-danger" onClick={() => { handleRemoveFromCart(item.id) }}><span >Remove</span></button>


            </li>
          ))}
        </ol>) : <h3 style={{ color: 'black', marginRight: '20px', paddingRight: '20px', textAlign: 'center', fontFamily: "'Times New Roman', Times, serif", fontWeight: "bold", fontSize: "40px" }}>No item in the cart</h3>
      }
      <br></br>
      <div id="total" >Total: Rs.{cartItems.reduce((total, item) => total + item.totalPrice, 0)}</div>

    </>
  );
};

export default Cart;
