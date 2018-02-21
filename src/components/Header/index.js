import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'reactstrap'
import isf_logo from './isf_logo.png'

const Header = (logo) => (
  <header className='main-header'>
    <Container>
      <div className='brand'>
        <img src={isf_logo} className='logo img-fluid'/>
      </div>
    </Container>
  </header>
)

export default Header
