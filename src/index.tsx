import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CustomRouter from './app/layout/CustomRouter';
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <CustomRouter history = {history}>
    <App />
  </CustomRouter>
);
