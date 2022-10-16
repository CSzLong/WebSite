import { graphql, Link, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

export default function Navbar () {
  const data = useStaticQuery(graphql`
      query logo {
        file(relativePath: {eq: "linelogo.png"}) {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
  `) 
  return (
    <nav>
        <Link to="/" className='logolinks'>
          <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="linelogo"/>
        </Link>
        <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/">合作伙伴</Link>
            <Link to="https://twitter.com/aptosglobalCN">
            <svg width="22" height="17" xmlns="http://www.w3.org/2000/svg">
              <g>
              <title>Layer 1</title>
              <path id="svg_1" d="m22,2.007c-0.809,0.341 -1.68,0.571 -2.593,0.676c0.932,-0.532 1.648,-1.372 1.984,-2.373c-0.873,0.492 -1.837,0.848 -2.866,1.04c-0.823,-0.834 -1.995,-1.354 -3.294,-1.354c-2.493,0 -4.513,1.92 -4.513,4.289c0,0.337 0.04,0.664 0.116,0.978c-3.75,-0.178 -7.076,-1.887 -9.302,-4.482c-0.388,0.633 -0.61,1.37 -0.61,2.157c0,1.488 0.797,2.801 2.007,3.569c-0.74,-0.021 -1.437,-0.215 -2.044,-0.536l0,0.055c0,2.077 1.555,3.811 3.621,4.205c-0.379,0.098 -0.778,0.151 -1.19,0.151c-0.291,0 -0.573,-0.027 -0.848,-0.078c0.573,1.704 2.241,2.944 4.216,2.98c-1.545,1.149 -3.491,1.835 -5.607,1.835c-0.363,0 -0.724,-0.02 -1.077,-0.06c1.997,1.218 4.37,1.928 6.92,1.928c8.301,0 12.841,-6.536 12.841,-12.204c0,-0.187 -0.005,-0.371 -0.013,-0.555c0.882,-0.605 1.647,-1.361 2.252,-2.22l0,-0.001l0,0z" fill="rgb(29, 155, 240)" fill-rule="evenodd"/>
              </g>
            </svg>
            </Link>
            <Link to="https://github.com/aptosglobal">
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <g>
                <title>Layer 1</title>
                <path id="svg_1" d="m11.019,-0.006c-6.088,0 -11.009,4.583 -11.009,10.252c0,4.532 3.153,8.368 7.528,9.726c0.546,0.101 0.747,-0.221 0.747,-0.493c0,-0.237 -0.018,-1.052 -0.018,-1.901c-3.062,0.612 -3.7,-1.222 -3.7,-1.222c-0.492,-1.188 -1.221,-1.493 -1.221,-1.493c-1.003,-0.628 0.073,-0.628 0.073,-0.628c1.111,0.068 1.695,1.052 1.695,1.052c0.984,1.562 2.569,1.12 3.207,0.849c0.091,-0.662 0.383,-1.12 0.693,-1.375c-2.442,-0.238 -5.012,-1.12 -5.012,-5.058c0,-1.12 0.437,-2.037 1.13,-2.75c-0.109,-0.254 -0.492,-1.307 0.109,-2.715c0,0 0.93,-0.272 3.026,1.052c0.874,-0.221 1.822,-0.339 2.752,-0.339c0.929,0 1.877,0.118 2.752,0.339c2.096,-1.324 3.025,-1.052 3.025,-1.052c0.602,1.408 0.219,2.461 0.109,2.715c0.711,0.713 1.13,1.63 1.13,2.75c0,3.938 -2.569,4.803 -5.03,5.058c0.401,0.322 0.747,0.933 0.747,1.901c0,1.375 -0.018,2.478 -0.018,2.817c0,0.272 0.201,0.594 0.747,0.493c4.375,-1.358 7.528,-5.194 7.528,-9.726c0.018,-5.669 -4.921,-10.252 -10.99,-10.252z" fill="rgb(46, 54, 137)" fill-rule="evenodd"/>
                </g>
              </svg>      
            </Link>
        </div>
    </nav>
  )
}
