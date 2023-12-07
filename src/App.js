
import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './Navbar';
import Product from './Product';
import Cart from './Listcard'
import Head from './Head';
;
const App = () => {
  const products = [{
    id: 1,
    name: "Watch",
    price: 4000,
    image: "https://c0.wallpaperflare.com/preview/940/907/612/watch-product-aesthetic-classy.jpg"

  },
  {
    id: 2,
    name: "Shoe",
    price: 5000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzOe9XFye0F0Uj1laaYxUAK95GCsap1dxddw&usqp=CAU"

  },
  {
    id: 3,
    name: "Camera",
    price: 20000,
    image: "https://i.pcmag.com/imagery/reviews/02Uc53QnK54VMTtvk3KzxLJ-1.fit_lim.size_840x473.v1677603207.jpg"

  },
  {
    id: 4,
    name: "kettle",
    price: 3000,
    image: "https://images.meesho.com/images/products/206219579/afkxm_512.webp"

  },
  {
    id: 5,
    name: "camera",
    price: 40000,
    image: "https://expertphotography.b-cdn.net/wp-content/uploads/2020/11/product-photography-tips-17-1.jpg"


  },
  {
    id: 6,
    name: "bottels",
    price: 550,
    image: "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png"

  },
  {
    id: 7,
    name: "Lotion",
    price: 400,
    image: "https://spectrum-brand.com/cdn/shop/products/58cm-artificial-monstera-plain-leaf-stem-photography-styling-prop-lifestyle-inuse-2-2.jpg?v=1631722954&width=1001s"

  }
    , {
    id: 8,
    name: "Watch",
    price: 25000,
    image: "https://c0.wallpaperflare.com/preview/940/907/612/watch-product-aesthetic-classy.jpg"

  },
  {
    id: 9,
    name: "kettle",
    price: 3000,
    image: "https://images.meesho.com/images/products/206219579/afkxm_512.webp"

  },
  ]
  const cartLength = store.getState().cart.items.length;
 
 
  return (
    

    <>
<Provider store={store}>
       <Navbar />
       <Head/>
       
        <br></br><br></br><br></br>
        <Routes>

          <Route path='/' element={
            
          <div className='container'>
        <div className='row'>
        
           <Product products={products}/>
          <br></br>
        </div>
        </div>} />


          <Route path='/cart' element={<div className='cart-container'>
            <div className='popup'>
              <Cart cartLength={cartLength}/>
            </div></div>} />



        </Routes>
</Provider>
        
    </>
  );
};

export default App;
