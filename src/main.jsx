import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

import Home from './routes/Home';
import Solucao from './routes/Solucao'; 
import Sobre from './routes/Sobre';
import Login from './routes/Login';
import Cadastrar from './routes/Cadastrar';
import Error from './routes/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/solucao", element: <Solucao /> },
      { path: "/sobre", element: <Sobre /> },
      { path: "/login", element: <Login /> },
      { path: "/cadastrar", element: <Cadastrar /> },
      { path: "*", element: <Error /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
