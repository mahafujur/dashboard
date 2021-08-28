import React, {Suspense} from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import App from './routes/App';
import {BrowserRouter} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import reportWebVitals from './reportWebVitals';
import ThemedSuspense from "./components/ThemedSuspense";
import "react-toggle/style.css";

const history = createBrowserHistory()


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter history={history}>
          <Suspense fallback={<ThemedSuspense/>}>
          <App />
          </Suspense>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
