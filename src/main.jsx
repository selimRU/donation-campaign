import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './components/Routes/Routes.jsx'
import AuthContext from './components/AuthContext/AuthContext.jsx'
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthContext>
      <RouterProvider router={router}>
      </RouterProvider>
    </AuthContext>

  </React.StrictMode>,
)
