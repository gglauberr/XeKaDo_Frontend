import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import primary from './styles/themes/primary';

import Routes from './routes';

const App: React.FC = () => (
  <ThemeProvider theme={primary}>
    <GlobalStyle />
    <Routes />
  </ThemeProvider>
);

export default App;
