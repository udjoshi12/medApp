import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Auth0Provider} from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-qxs72dhhuuaq1c6t.us.auth0.com"
    clientId="WpSvgAovKzw32N2sMJwERgNBxK38pZSK"
  >
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Auth0Provider>
)

