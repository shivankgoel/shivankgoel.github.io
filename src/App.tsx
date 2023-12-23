import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { HomePage } from './Pages/HomePage';
import { extendTheme } from '@chakra-ui/react'
import "@fontsource/caveat";
import "@fontsource/heebo";
import "@fontsource/coming-soon";

const theme = extendTheme({
  fonts: {
    heading: `'Caveat', sans-serif`,
    body: `'Coming Soon', sans-serif`,
  }
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <HomePage />
      </div>
    </ChakraProvider>
  );
}

export default App;
