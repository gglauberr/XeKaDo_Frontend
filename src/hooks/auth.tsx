import { AxiosError, AxiosResponse } from 'axios';
import React, { createContext, useContext, useState } from 'react';
import { LoginRequest } from '../models/request/Authentication/LoginRequest';
import { TokenResponse } from '../models/response/Authentication/TokenResponse';
import { fazerLogin } from '../services/AuthenticationService';

interface IAuthContext {
  logged: boolean;
  loading: boolean;
  Login(req: LoginRequest): Promise<void>;
  Logout(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const [logged, setLogged] = useState<boolean>(() => {
    const isLogged = localStorage.getItem('Token');

    return !!isLogged;
  });

  const [loading, setLoading] = useState<boolean>(false);

  const Login = async (req: LoginRequest) => {
    setLoading(true);
    await fazerLogin(req)
      .then((res: AxiosResponse<TokenResponse>) => {
        localStorage.setItem('Token', res.data.data.token);
        setLogged(true);
        setLoading(false);
      })
      .catch((error: AxiosError<TokenResponse>) => {
        alert(error.response?.data.message);
        setLoading(false);
      });
  };

  const Logout = () => {
    setLoading(true);
    localStorage.removeItem('Token');
    setLogged(false);
    setLoading(false);
  };

  return (
    <AuthContext.Provider value={{ logged, loading, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
