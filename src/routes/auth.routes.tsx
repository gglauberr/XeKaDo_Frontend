import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

import SignInSignUp from '../pages/SignInSignUp';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import { TelaLoading } from './styles';
import { CircularProgress } from '@mui/material';

import themePrimary from '../styles/themes/primary';

const AuthRoutes: React.FC = () => {
  const { loading } = useAuth();

  if (loading) {
    return (
      <TelaLoading>
        <CircularProgress
          size={200}
          style={{ color: themePrimary.colors.secondary }}
        />
      </TelaLoading>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<SignInSignUp />} />
      <Route path="/signin" element={<SignIn text={null} />} />
      <Route path="/signup" element={<SignUp text={null} />} />
    </Routes>
  );
};

export default AuthRoutes;
