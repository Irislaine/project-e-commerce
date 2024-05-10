import React, { useState } from 'react';
import './styles/prodInfo.css';
import { postCartThunk } from '../../store/slices/cart.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProdInfo = ({ product }) => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [counter, setCounter] = useState(1);
  
  const handleLess = () => {
    if(counter > 1){
      setCounter(counter - 1)
    }
  }

  const handlePlus = () => {
    setCounter(counter + 1)
  }

  const handleBuy = () => {
      dispatch(postCartThunk('/cart', {
      quantity: counter,
      productId: product.id,
    }));
    navigate('/cart');
  }

  return (
    <article className='prodinfo'>
      <h3 className='prodinfo_brand'>{product?.brand}
      </h3>

      <h2 className='prodinfo_title'>{product?.title}
      </h2>

      <p className='prodinfo_description'>{product?.description}
      </p>

      <div className='prodinfo_container'>
        <p className='prodinfo_price'>
          <span>Price
          </span>
          <span>$ {product?.price}.00
          </span>
        </p>

        <div className='prodinfo_counter'>
          <p>quantity</p>

          <button onClick={handleLess} className='prodinfo_btnless'>-1
          </button>

          <span>{counter}</span>

          <button onClick={handlePlus} className='prodinfo_btnplus'>+1
          </button>
        </div>
      </div>    

        <button onClick={handleBuy} className='prodinfo_btnbuy'>Add to cart
        </button>
    </article>
  )
}

export default ProdInfo;