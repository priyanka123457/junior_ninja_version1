import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import './index.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import App from './App';

let rootE1 = document.getElementById('root');
let root = ReactDOM.createRoot(rootE1);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);



