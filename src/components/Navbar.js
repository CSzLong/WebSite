import { Link } from 'gatsby'
import React from 'react'
import dataJson from '../../public/static/d/query.json'

export default function Navbar () {
  const {title} = dataJson.data.site.siteMetadata.title

  return (
    <nav>
        <h1>{ title }</h1>
        <div className='links'>
            <Link to="/">Home</Link>
            <Link to="http://www.baidu.com">合作伙伴</Link>
            <Link to="/about">Members</Link>
            <Link to="/about">Contact us</Link>
        </div>
    </nav>
  )
}
