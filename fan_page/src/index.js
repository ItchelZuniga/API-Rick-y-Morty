import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode><Auth0Provider 
  domain="dev-qbm887swakctegsl.us.auth0.com" 
  clientId='oFTPPBwzGyRgDfuFFx1SoV2tCIKsjb5L' 
  redirectUri={window.location.origin}> 
  <App />
  </Auth0Provider>
</React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
