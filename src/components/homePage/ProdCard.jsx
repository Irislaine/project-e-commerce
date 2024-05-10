import React from 'react';
import './styles/prodCard.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postCartThunk } from '../../store/slices/cart.slice';

const ProdCard = ({prod}) => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleView = () => {
        navigate(`/product/${prod.id}`);
    }

    const handleBuy = () => {
        dispatch(postCartThunk('/cart', {
            quantity: 1,
            productId: prod.id,
        }))
    }


  return (
    <article className='prodcard'>
        <figure className='prodcard_img'>
            <img className='prodcard_img-1' src={prod.images[0].url} alt="product img" />
            <img className='prodcard_img-2' src={prod.images[1].url} alt="product img" />
        </figure>
        <hr />
        <ul className='prodcard_list'>
            <li className='prodcard_item'><span>{prod.brand}</span><span>{prod.title}</span></li>
            <li className='prodcard_item'><span>Price </span><span>$ {prod.price}.00</span></li>
        </ul>
        <div className='prodcard_buttons'>
            <button onClick={handleView}>View details</button>
            <button onClick={handleBuy}>Add to cart</button>
        </div>
    </article>
  )
}

export default ProdCard;