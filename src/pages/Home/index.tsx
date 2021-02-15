import React from 'react';
import Header from '../../components/Header';
import Notification from '../../components/Notification';
import Spotlights from '../../components/Spotlights';

import { Container } from './styles';

const Home = () => {
  return (
    <>
      <Notification />
      <Container>
        <h1>Bglho dificil!</h1>
        <Spotlights />
      </Container>
    </>
  );
};

export default Home;
