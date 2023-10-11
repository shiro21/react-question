import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './view/Main';
import { ThemeProvider } from './ThemeProvider';
import { Container, GlobalStyle } from './item/theme';
import "./style/style.css";


function App() {

  return (
    <ThemeProvider>
      <Container>
      <GlobalStyle />
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
