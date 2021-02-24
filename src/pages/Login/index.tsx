import React, { useRef, useState } from 'react';
import api from '../../services/api';
import { Redirect } from 'react-router-dom'
import { Container } from './styles';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const [permission, setPermission] = useState<Boolean>(false)

  const inputName = useRef<HTMLInputElement>(null)
  const inputAge = useRef<HTMLInputElement>(null)
  const inputEmail = useRef<HTMLInputElement>(null)
  const inputPassword = useRef<HTMLInputElement>(null)

  const signIn = async () => {
    if (Number(inputAge.current?.value) >= 18) {
      const response  = await api.post('/register', {
        email: inputEmail.current?.value,
        password: inputPassword.current?.value
      })
        {
          localStorage.setItem("accessToken", response.data.accessToken)
          setPermission(true)
        }
    } else {
      toast.error('O acesso ao conteúdo é restrito à pessoas adultas.')
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
          <input type="submit" value="Cadastrar" onClick={signIn}/>
        </div>
      </Container>
      {
        permission &&
        <Redirect to="/home" />
      }
      <Toaster />
    </>
  );
};

export default Login;
