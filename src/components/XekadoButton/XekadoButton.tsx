import React from 'react';
import { Link } from 'react-router-dom';
import { Botao, Container } from './styles';
import { IXekadoButtonProps } from './types';

const XekadoButton: React.FC<IXekadoButtonProps> = ({
  width,
  padding,
  margin,
  link,
  type,
  children,
  onClick,
}) => (
  <Container width={width}>
    <Link to={link}>
      <Botao padding={padding} margin={margin} type={type} onClick={onClick}>
        {children}
      </Botao>
    </Link>
  </Container>
);

export default XekadoButton;
