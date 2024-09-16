import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/Router';
import { Providers } from './providers/Providers';
import './assets/styles/main.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <Providers>
      <RouterProvider router={router} />
    </Providers>
)
