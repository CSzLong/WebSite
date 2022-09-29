import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/">合作伙伴</Link>
            <Link to="/about">Members</Link>
            <Link to="/about">Contact us</Link>
        </div>
    </nav>
  )
}
