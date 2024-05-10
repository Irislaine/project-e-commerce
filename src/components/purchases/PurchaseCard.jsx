import React from 'react';
import './styles/purchaseCard.css';

const PurchaseCard = ({prod}) => {

    console.log(prod);

  return (
    <article className='purchasecard'>
        <h3 className='purchasecard_title'>{prod.product?.title}</h3>
        <figure className='purchasecard_img'>
            <img src={prod.product?.images[0].url}alt="produc img" />
        </figure>

        <p className='purchasecard_date'>{prod.updatedAt?.slice(0, 10)}</p>

        <span className='purchasecard_quantity'>{prod.quantity}</span>

        <span className='purchasecard_price'>Total Price: $ {prod.product?.price * prod.quantity}.00</span>
    </article>
  )
}

export default PurchaseCard;