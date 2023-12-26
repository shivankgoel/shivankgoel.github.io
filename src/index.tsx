import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { HomePage } from './Pages/HomePage';
import { extendTheme } from '@chakra-ui/react'
import "@fontsource/caveat";
import "@fontsource/heebo";
import "@fontsource/coming-soon";
import { Helmet } from "react-helmet";
import { Leetcode } from './Pages/Leetcode';

const theme = extendTheme({
  fonts: {
    heading: `'Caveat', sans-serif`,
    body: `'Coming Soon', sans-serif`,
  }
})

const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/leetcode",
    element: <Leetcode />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Helmet>
      <title>Shivank Goel</title>
      <meta name="description" content="A software engineer and wannapreneur working in GenAI space." />
    </Helmet>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
