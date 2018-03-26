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
            
            <div className='main-nav-wrapper'>
              <Link to='/about' className='nav-item float-lg-left' activeClassName="active">About</Link>
              <Link id='team' to='/team' className='sub-nav-item float-lg-left' activeClassName="active">Team</Link>
            </div>

            <div className='main-nav-wrapper'>
              <Link to='/services' className='nav-item float-lg-left' activeClassName="active">Services</Link>
              <Link id='portfolio' to='/portfolio' className='sub-nav-item float-lg-left' activeClassName="active">Portfolio</Link>
            </div>

            <div className='main-nav-wrapper'>
              <Link to='/research' className='nav-item float-lg-left'activeClassName="active">Research</Link>
              <Link id='briefings' to='/resources' className='sub-nav-item float-lg-left' activeClassName="active">Resources</Link>
            </div>

            <div className='main-nav-wrapper'>
              <Link to='/contact' className='nav-item float-lg-left' activeClassName="active">Contact</Link>
              <Link id='careers' to='/careers' className='sub-nav-item float-lg-left' activeClassName="active">Careers</Link>
            </div>
            
        </Col>
      </Row>
    </Container>
  </header>
)

export default Header
