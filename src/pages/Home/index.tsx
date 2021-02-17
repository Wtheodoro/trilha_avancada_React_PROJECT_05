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
        <h2>🍺 Destaques no Empório</h2>
        <Spotlights />
      </Container>
    </>
  );
};

export default Home;
