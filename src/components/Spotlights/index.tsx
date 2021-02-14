import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import api from '../../services/api';
import { getBeers } from '../../store/ducks/beers/actions';
import { BeerItemType } from '../../store/ducks/beers/types';

import { Container, Box } from './styles';
import { getCategories } from '../../store/ducks/categories/actions';
import { setCartItem } from '../../store/ducks/cartItem/actions';
import { CarteItemState, EachCartItemType } from '../../store/ducks/cartItem/types';
import { CategoriesState } from '../../store/ducks/categories/types';
import { isTemplateTail } from 'typescript';

const Spotlights = () => {

  const [denyPermission,setDenyPermission] = useState<Boolean>(false)
  // TIPAR ISSO
  const [beers,  setBeers] = useState<BeerItemType[]>()

  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      const accessToken = localStorage.getItem('accessToken')
      const headers = {
        'Authorization' : `Bearer ${accessToken}`
      }
      api.get(`/categories`, {headers: headers})
        .then(response => {
          dispatch(getCategories(response.data))
        })

      api.get(`/beers`, {headers: headers})
        .then(response => setBeers(response.data))

    } else {
      setDenyPermission(true)
    }
  }, [])

  const cartItens = useSelector((state: CarteItemState) => state.cartItem.cartItens)

  const addCart = (i: BeerItemType) => {

    const newItemArray = cartItens

    const itemFound = newItemArray.find((element: EachCartItemType) => element.id === i.id)

    // function updateItemArray(newItemArray: any , item: any) {
    //   if (newItemArray.indexOf(item) === -1) {
    //     const newItem: EachCartItemType = {
    //           description: i.description,
    //           id: i.id,
    //           image: i.image,
    //           price: i.price,
    //           title: i.title,
    //           amount: 1
    //     }
    //     newItemArray.push(newItem)
    //   } else {

    //   }
    // }

    // }
    if (itemFound) {
      itemFound.amount = itemFound.amount+1

      function search(vetor: EachCartItemType[], element: any) {
        if (vetor.indexOf(element) >= 0) {
          return vetor.indexOf(element)
        } else {
          alert("DEU RUIM!")
        }
      }

      const index = newItemArray.indexOf(search(newItemArray, i.id)
      const milagre = newItemArray.splice(index, 1, itemFound)
      newItemArray.push(itemFound)


    } else {
      const newItem: EachCartItemType = {
        description: i.description,
        id: i.id,
        image: i.image,
        price: i.price,
        title: i.title,
        amount: 1
      }
      newItemArray.push(newItem)
    }

    dispatch(setCartItem(newItemArray))
    console.log(newItemArray)
  }

  return (
    <>
      <h1>Destaques no Empório</h1>
      <Container>
      {
        beers?.map((i: BeerItemType) => (
          <Box key={i.id}>
            <div className="card">
              <img src={i.image} alt={i.title} className="product"/>
              <h2>{i.title}</h2>
              <p>{i.description}</p>
              <p>{i.price}</p>
              <Link to="/cart" onClick={() => addCart(i)}>Comprar</Link>
            </div>
          </Box>
        )) 
      }
      </Container>
      {
        denyPermission &&
        <Redirect to="/" />
      }
    </>
  );
};

export default Spotlights;
