import { CircularProgress } from '@mui/material';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

import Home from '../pages/Home';
import { TelaLoading } from './styles';

import themePrimary from '../styles/themes/primary';

const AppRoutes: React.FC = () => {
  const { loading } = useAuth();

  if (loading) {
    return (
      <TelaLoading>
        <CircularProgress
          size={70}
          style={{ color: themePrimary.colors.secondary }}
        />
      </TelaLoading>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
