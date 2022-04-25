import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
`;

export const InputCadastro = styled.input`
  width: 100%;
  border-radius: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  padding: 10px;
  border: 2px solid #000;
  margin: 5px 0;
  outline: none;
`;

export const ImagemLogo = styled.img`
  width: 100%;
  margin-bottom: 20px;
`;

export const LinkCadastro = styled.a`
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-family: 16px;
  margin-top: 20px;
  text-decoration: underline;
  cursor: pointer;

  :hover {
    color: ${props => props.theme.colors.tertiary};
  }
`;
