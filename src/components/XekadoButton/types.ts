export interface IXekadoButtonProps
  extends IXekadoButtonStyle,
    IXekadoButtonContainerStyle {
  link: string;
  type: 'submit' | 'reset' | 'button' | undefined;
  children?: React.ReactNode;
  onClick?: () => void;
}

export interface IXekadoButtonStyle {
  padding: string;
  margin: string;
}

export interface IXekadoButtonContainerStyle {
  width: string;
}
