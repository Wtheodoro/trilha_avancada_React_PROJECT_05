import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../components/Header';
import Notification from '../../components/Notification';
import { BudgetItemState, BudgetItemType, BudgetType } from '../../store/ducks/budget/types';
import { deleteCartItem, setCartItem } from '../../store/ducks/cartItem/actions';
import { CarteItemState, EachCartItemType } from '../../store/ducks/cartItem/types';

import { Container, BuyCart } from './styles';

const Cart = () => {

  const [reRender, setReRender] = useState<Boolean>(true)
  const budget: number[] = []
  let result: number = 0
  const cartItens = useSelector((state: CarteItemState) => state.cartItem.cartItens)
  const budgetItens = useSelector((state: any) => state.budgetItem.arrayBudget)
  const newItemArray = cartItens
  
  const dispatch = useDispatch()

  const addMount = (obj: EachCartItemType) => {
    const indexOfItemFound = newItemArray.findIndex((element: EachCartItemType) => element.id === obj.id)

    newItemArray[indexOfItemFound].amount = obj.amount+1
    dispatch(setCartItem(newItemArray))
    setReRender(!reRender)
  }

  const decreaseMount = (obj: EachCartItemType) => {
    const indexOfItemFound = newItemArray.findIndex((element: EachCartItemType) => element.id === obj.id)

    if (newItemArray[indexOfItemFound].amount > 0) {
      newItemArray[indexOfItemFound].amount = obj.amount-1
      dispatch(setCartItem(newItemArray))
      calculator(obj)
      setReRender(!reRender)
    }
  }

  const deleteItem = (obj: EachCartItemType) => {
    const indexOfItemFound = newItemArray.findIndex((element: EachCartItemType) => element.id === obj.id)
    newItemArray.splice(indexOfItemFound, 1)
    dispatch(setCartItem(newItemArray))
    calculator(obj)
    setReRender(!reRender)
  }

  const calculator = (obj: EachCartItemType) => {
    const price = Number(obj.price.substring(3).replace(',', '.'))*obj.amount
    budgetControll(obj)
    return price
  }

  const budgetControll = (obj: EachCartItemType) => {
    const totalItemPrice = Number(obj.price.substring(3).replace(',', '.'))*obj.amount
    // dispatch(setBudget(totalItemPrice))
    budget.push(totalItemPrice)
    const reducerArray = (accumulator: number, currentValue: number) => accumulator + currentValue
    result = budget.reduce(reducerArray)
  }

  const finishOrder = () => {
    alert('Seu pedido foi realizado.')
    dispatch(deleteCartItem())
  }

  return (
    <>
    <Notification />
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
              <button onClick={()=>decreaseMount(i)}>-</button>
            </div>
            <button onClick={()=>deleteItem(i)} className="btn-delete">Excluir</button>
            <p className="total">Total do item: R$ {calculator(i).toFixed(2)}</p>
          </BuyCart>
        ))
      }
      {
        result > 0 &&
        <>
        <p>Total do pedido: R$ {result.toFixed(2)}</p>
        <button onClick={finishOrder}>FIM DE TUDO!</button>
        </>
      }
    </Container>
    </>
  );
};

export default Cart;
