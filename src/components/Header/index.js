import React from 'react'
import Link from 'gatsby-link'
import { Container, Col, Row } from 'reactstrap'
import isf_logo from './isf_logo.png'

const Header = (logo) => (
  <header className='main-header'>
    <Container>
      <Row>
        <Col lg='4' className='brand'>
          <Link to='/'><img src={isf_logo} className='logo img-fluid'/></Link>
        </Col>

        <Col lg='8' className='d-none d-lg-block main-nav'>
        
            <div className='nav-item float-lg-left'>
              <Link to='/about'>About</Link>
            </div>

            <div className='nav-item float-lg-left'>
              <Link to='/services'>Services</Link>
            </div>

            <div className='nav-item float-lg-left'>
              <Link to='/research'>Research</Link>
            </div>

            <div className='nav-item float-lg-left'>
              <Link to='/contact'>Contact</Link>
            </div>
        </Col>
      </Row>
    </Container>
  </header>
)

export default Header
