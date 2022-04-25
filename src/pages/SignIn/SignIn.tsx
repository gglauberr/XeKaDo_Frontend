import React, { useState } from 'react';
import { Container, ImagemLogo, InputLogin, LinkLogin } from './styles';
import { ISignInProps } from './types';

import Logo from '../../assets/xekado-logo.png';
import { Grid } from '@mui/material';
import XekadoButton from '../../components/XekadoButton/XekadoButton';

import { useAuth } from '../../hooks/auth';
import { LoginRequest } from '../../models/request/Authentication/LoginRequest';

const SignIn: React.FC<ISignInProps> = () => {
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');

  const { Login } = useAuth();

  const handleSubmit = () => {
    const req: LoginRequest = { email, senha };
    Login(req);
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={2} sm={4} lg={5}></Grid>
        <Grid item xs={8} sm={4} lg={2}>
          <Grid item container direction="column" alignItems="center">
            <ImagemLogo src={Logo} alt="logo" />
            <InputLogin
              required
              type="text"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <InputLogin
              required
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={e => setSenha(e.target.value)}
            />
            <XekadoButton
              type="button"
              width="60%"
              padding="10px 20px"
              margin="20px 0 0 0"
              link={'#'}
              onClick={() => handleSubmit()}
            >
              Entrar
            </XekadoButton>
            <LinkLogin href="#">Redefinir Senha</LinkLogin>
            <LinkLogin href="/">Voltar</LinkLogin>
          </Grid>
        </Grid>
        <Grid item xs={2} sm={4} lg={5}></Grid>
      </Grid>
    </Container>
  );
};

export default SignIn;
