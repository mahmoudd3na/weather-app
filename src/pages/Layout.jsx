import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import "./Layout.css"

export default function Layout() {
  return (
    <>
      <div className="container">
        <NavBar />
        <Outlet />
      </div>

    </>
  )
}
