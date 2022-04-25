import styled from 'styled-components';
import { IXekadoButtonContainerStyle, IXekadoButtonStyle } from './types';

export const Container = styled.div<IXekadoButtonContainerStyle>`
  width: ${props => props.width};
`;

export const Botao = styled.button<IXekadoButtonStyle>`
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.primary};
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  font-weight: bolder;
  padding: ${props => props.padding};
  border-radius: 10px;
  border: 2px solid #000;
  margin: ${props => props.margin};

  a {
    width: 100%;
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
  }

  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
