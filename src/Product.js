
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './redux/product-reducer';

const ProductList = ({ products }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
   <>
    
    {products.map((product) => (
                
                
                <div className="col-lg-4 mt-2">
                    <div className="card" >

                        <img src={product.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title" style={{ fontWeight: "bold" }}>{product.name}</h5>
                            <p className="card-text">Rs.{product.price}</p>

                            <button class="btn btn-light" onClick={() => { handleAddToCart(product) }}>Add to cart</button>

                        </div>
                    </div>

                </div>

            ))}
            <br></br>

   </>
  );
};

export default ProductList;
