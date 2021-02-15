import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CarteItemState, EachCartItemType } from '../../store/ducks/cartItem/types';

import { Container } from './styles';


const Notification = () => {

  const notification = useSelector((state: CarteItemState) => state.cartItem.cartItens)
  let notificationSum = 0

  notification.map((i: EachCartItemType) => {
    notificationSum = notificationSum + i.amount
  })

  return (
    <Container>
      {
        notificationSum > 0 &&
        <div>{notificationSum}</div>
      }
    </Container>
  );
};

export default Notification;
