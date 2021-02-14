import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setCartItem } from '../../store/ducks/cartItem/actions';
import { CarteItemState, EachCartItemType } from '../../store/ducks/cartItem/types';

import { Container, BuyCart } from './styles';

const Cart = () => {

  const [reRender, setReRender] = useState<Boolean>(true)

  const cartItens = useSelector((state: CarteItemState) => state.cartItem.cartItens)
  
  const newItemArray = cartItens
  
  const dispatch = useDispatch()


  const addMount = (obj: EachCartItemType) => {
    const indexOfItemFound = newItemArray.findIndex((element: EachCartItemType) => element.id === obj.id)

    newItemArray[indexOfItemFound].amount = obj.amount+1
    dispatch(setCartItem(newItemArray))
    setReRender(!reRender)
  }

  const calculator = () => {
    
  }

  return (

    <Container>
      <h1>Carrrinho</h1>
      {
        cartItens.map((i: EachCartItemType) => (
          <BuyCart key={i.id}>
            <img src={i.image} alt={i.title}/>
            <h2>{i.title}</h2>
            <p className="price">{i.price}</p>
            <div className="add">
              <button onClick={()=>addMount(i)}>+</button>
              <p>{i.amount}</p>
              <button>-</button>
            </div>
          </BuyCart>
        ))
      }
    </Container>
  );
};

export default Cart;
