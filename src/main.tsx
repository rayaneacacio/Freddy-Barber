import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/global';
import { Home } from './pages/Home';
import { Sobre } from './pages/Sobre';
import { Barbearia } from './pages/Barbearia';
import { Servicos } from './pages/Servicos';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <GlobalStyles />
      <Home />
      <Sobre />
      <Barbearia />
      <Servicos />
    </ThemeProvider>
  </React.StrictMode>,
)
