import React from 'react';
import { Container, ImagemLogo } from './styles';

import Logo from '../../assets/xekado-logo.png';
import { Grid } from '@mui/material';
import XekadoButton from '../../components/XekadoButton/XekadoButton';

const SignInSignUp: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={2} sm={4} lg={5}></Grid>
        <Grid item xs={8} sm={4} lg={2}>
          <Grid item container direction="column" alignItems="center">
            <ImagemLogo src={Logo} alt="logo" />
            <XekadoButton
              type="button"
              width="60%"
              padding="10px 20px"
              margin="20px 0 0 0"
              link={'/signin'}
            >
              Entrar
            </XekadoButton>
            <XekadoButton
              type="button"
              width="60%"
              padding="10px 20px"
              margin="20px 0 0 0"
              link={'/signup'}
            >
              Cadastrar
            </XekadoButton>
          </Grid>
        </Grid>
        <Grid item xs={2} sm={4} lg={5}></Grid>
      </Grid>
    </Container>
  );
};

export default SignInSignUp;
