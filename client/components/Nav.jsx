import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  const activeStyle = {
    fontWeight: '500',
    textDecorationLine: 'underline',
  }

  return (
    <div className="nav-bar">
      <img src="/images/logo.svg" alt="" className="logo" />
      <ul className="nav-menu">
        <li>
          <NavLink
            className="nav-item"
            to={'/'}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-item"
            to={'/work'}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Work
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-item"
            to={'/bio'}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Bio
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Nav
