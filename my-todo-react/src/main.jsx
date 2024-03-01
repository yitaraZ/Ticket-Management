import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NewTicket from './components/Newticket.jsx'
import Table from './components/Table.jsx'
import Update from './components/UpdateTicket.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Table />
  },
  {
    path: "/new-ticket",
    element: <NewTicket />
  },{
    path: "/update-ticket",
    element: <Update />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
