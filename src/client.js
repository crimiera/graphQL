import React from 'react'
import { hydrate } from 'react-dom'
import App from './app/index.js'
import { BrowserRouter } from 'react-router-dom'



  hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('app')
  );
