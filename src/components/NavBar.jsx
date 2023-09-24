import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NavBar.css"

export default function () {
    const toggleActivity = (isActive) => {
        return isActive ? { backgroundColor: "rgb(47, 47, 159)" } : undefined
    }
    return (
        <div className="nav-bar">
            <NavLink to="" style={({ isActive }) => toggleActivity(isActive)}>Dashboard</NavLink>
            <NavLink to="Forecast" style={({ isActive }) => toggleActivity(isActive)}>Forecast</NavLink>
            <NavLink to="Favorites" style={({ isActive }) => toggleActivity(isActive)}>Favorites</NavLink>
            <NavLink to="SignIn" style={({ isActive }) => toggleActivity(isActive)}>Sign In </NavLink>
        </div>
    )
}
