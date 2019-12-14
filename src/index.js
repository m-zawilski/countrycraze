import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from "styled-components";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: linear-gradient(#222, #333);
  }
`

ReactDOM.render(
  <Router history={customHistory}>
    <GlobalStyle/>
    <App />
  </Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
