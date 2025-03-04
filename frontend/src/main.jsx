import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,
  RouterProvider
 } from 'react-router-dom'
import Authentication from './components/Authentication.jsx'
import { PageType } from './components/Authentication.jsx'

 const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <Authentication pageType={PageType.LOGIN} />,
  },
  {
    path: '/register',
    element: <Authentication pageType={PageType.REGISTRATION} />
  }
 ])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
