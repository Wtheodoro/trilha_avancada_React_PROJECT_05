import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../components/Header';
import Notification from '../../components/Notification';
import { BudgetItemState, BudgetItemType, BudgetType } from '../../store/ducks/budget/types';
import { setCartItem } from '../../store/ducks/cartItem/actions';
import { CarteItemState, EachCartItemType } from '../../store/ducks/cartItem/types';

import { Container, BuyCart } from './styles';

const Cart = () => {

  const [reRender, setReRender] = useState<Boolean>(true)
  const [budget, setBudget] = useState<any>([])
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

  // Esta funcao ainda não funciona como deveria
  const calculator = (obj: EachCartItemType) => {
    const price = Number(obj.price.substring(3).replace(',', '.'))
    const indexOfBudget = budgetItens.findIndex((element: BudgetItemType) => element.itemPrice === price)
    // dispatch(setBudget(budgetItens))

    if (indexOfBudget) {
      const ultPrice = price*obj.amount
      budgetItens.splice(indexOfBudget, 1, ultPrice)
    } else {
      budgetItens.push(price)
    }

    return price
  }

  console.log(budgetItens)

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
    </Container>
    </>
  );
};

export default Cart;
