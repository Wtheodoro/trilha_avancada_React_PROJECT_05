import { stat } from 'fs';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux'
import { CarteItemState, EachCartItemType } from '../../store/ducks/cartItem/types';

import { Container, BuyCart } from './styles';

const Cart = () => {

  const cartItens = useSelector((state: CarteItemState) => state.cartItem.cartItens)

  console.log(cartItens)

  const addMount = () => {
    
  }

  return (

    <Container>
      <h1>Carrrinho</h1>
      {
        cartItens.map((i: EachCartItemType) => (
          <BuyCart key={i.id}>
            <img src={i.image} alt={i.title}/>
            <h2>{i.title}</h2>
            <p>{i.price}</p>
            <div className="add">
              <button onClick={addMount}>+</button>
              <p>1</p>
              <button>-</button>
            </div>
          </BuyCart>
        ))
      }
    </Container>
  );
};

export default Cart;
