import { useState } from 'react'
import './App.css'
import { RouterProvider, BrowserRouter, Router, createBrowserRouter } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Layout from "./pages/Layout"
import SignIn from "./pages/SignIn"
import Forecast from "./pages/Forecast"
import Favorites from "./pages/Favorites"
import Error from './pages/Error'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement : <Error />, 
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: "Favorites",
        element: <Favorites />
      },
      {
        path: "Forecast",
        element: <Forecast />
      },
      {
        path: "SignIn",
        element: <SignIn />
      }
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
