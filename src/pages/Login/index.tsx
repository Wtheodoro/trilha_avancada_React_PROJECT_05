import React, { useRef, useState } from 'react';
import api from '../../services/api';
import { Redirect } from 'react-router-dom'

import { Container } from './styles';
import Header from '../../components/Header';

const Login = () => {
  const [permission, setPermission] = useState<Boolean>(false)

  const inputName = useRef<HTMLInputElement>(null)
  const inputAge = useRef<HTMLInputElement>(null)
  const inputEmail = useRef<HTMLInputElement>(null)
  const inputPassword = useRef<HTMLInputElement>(null)

  const signIn = () => {
    if (Number(inputAge.current?.value) >= 18) {
      api.post('/register', {
        email: inputEmail.current?.value,
        password: inputPassword.current?.value
      })
        .then(response => {
          localStorage.setItem("accessToken", response.data.accessToken)
          setPermission(true)
        })
    } else {
      alert('Seu marginal, vai pra escola! Você nem tem idade pra beber, muito menos comprar bebida')
    }
  }

  return (
    <>
      <Container>
        <div className="form">
          <h1>Cadastre-se</h1>
          <input type="text" placeholder="Nome" ref={inputName}/>
          <input type="number" placeholder="Idade" ref={inputAge}/>
          <input type="email" placeholder="Email" ref={inputEmail}/>
          <input type="password" placeholder="Senha" ref={inputPassword}/>
          <button onClick={signIn}>Enviar</button>
        </div>
      </Container>
      {
        permission &&
        <Redirect to="/home" />
      }
    </>
  );
};

export default Login;
