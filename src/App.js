import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset'; //removendo estilizações iniciais do navegador

import './App.css';
import Home from './pages/home/index';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <Home />
    </ThemeProvider>
  );
}

export default App;
