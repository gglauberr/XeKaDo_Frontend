import React from 'react';
import { Container, ImagemLogo, InputCadastro, LinkCadastro } from './styles';
import { ISignUpProps } from './types';

import Logo from '../../assets/xekado-logo.png';
import { Grid } from '@mui/material';
import XekadoButton from '../../components/XekadoButton/XekadoButton';

const SignUp: React.FC<ISignUpProps> = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={2} sm={4} lg={5}></Grid>
        <Grid item xs={8} sm={4} lg={2}>
          <Grid item container direction="column" alignItems="center">
            <ImagemLogo src={Logo} alt="logo" />
            <InputCadastro placeholder="Nome" />
            <InputCadastro placeholder="Email" />
            <InputCadastro placeholder="Senha" />
            <InputCadastro placeholder="Confirme sua senha" />
            <XekadoButton
              type="button"
              width="60%"
              padding="10px 20px"
              margin="20px 0 0 0"
              link={'#'}
            >
              Cadastrar
            </XekadoButton>
            <LinkCadastro href="/">Voltar</LinkCadastro>
          </Grid>
        </Grid>
        <Grid item xs={2} sm={4} lg={5}></Grid>
      </Grid>
    </Container>
  );
};

export default SignUp;
