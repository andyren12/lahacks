import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Upload</Link>
        </li>
        <li>
          <Link to="/test">Take a Test</Link>
        </li>
        <li>
          <Link to="/workflow">Check your Workflow</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar