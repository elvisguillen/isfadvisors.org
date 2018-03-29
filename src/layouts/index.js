import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Container, Col, Row } from 'reactstrap'
import { slide as Menu } from 'react-burger-menu'

import Header from '../components/Header'
import '../styles/index.scss'
import isf_mt_icon from '../images/isf_mt_icon.png'

export default class TemplateWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange(state) {
    this.setState({menuOpen: state.isOpen})
  }

  closeMenu() {
    this.setState({menuOpen: false})
  }

  toggleMenu() {
    this.setState({menuOpen: !this.state.menuOpen})
  }

  render () {
    
    return (
      
      <div>
        <Helmet
          title="ISF Advisors"
          meta={[
            { name: 'description', content: 'ISF is an advisory group committed to transforming rural economies by delivering partnerships and investment structures that promote financial inclusion for rural enterprises and smallholder farmers.' },
            { name: 'keywords', content: 'ISF, Initiative for Smallholder Finance, Advisory, Smallholder Farmers, Financial Investment' },
          ]}
        />
        
        <Menu isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)} right width={ '100%' } >
          <Container>
            <Row>
              <Col xs={{size: 12}}>
                <div className='menu-item-wrapper'>
                  <Link onClick={() => this.closeMenu()} className='menu-item' to='/'>Home</Link>
                </div>
                
                <div className='menu-item-wrapper'>
                  <Link onClick={() => this.closeMenu()} className='menu-item' to='/about'>About Us</Link>
                  <Link onClick={() => this.closeMenu()} className='sub-menu-item' to='/team'>Team</Link>
                </div>

                <div className='menu-item-wrapper'>
                  <Link onClick={() => this.closeMenu()} className='menu-item' to='/services'>Services</Link>
                  <Link onClick={() => this.closeMenu()} className='sub-menu-item' to='/portfolio'>Portfolio</Link>
                </div>

                <div className='menu-item-wrapper'>
                  <Link onClick={() => this.closeMenu()} className='menu-item' to='/research'>Research</Link>
                  <Link onClick={() => this.closeMenu()} className='sub-menu-item' to='/resources'>Resources</Link>
                </div>

                <div className='menu-item-wrapper'>
                  <Link onClick={() => this.closeMenu()} className='menu-item' to='/contact'>Contact</Link>
                  <Link onClick={() => this.closeMenu()} className='sub-menu-item' to='/careers'>Careers</Link>
                </div>

              </Col>
            </Row>
          </Container>
        </Menu>

        <Header />

        <div>
          {this.props.children()}
        </div>

        <footer>
          <p className='text-center'>© 2018 ISF. <Link to='/'>Privacy Policy</Link>.</p>
        </footer>
      </div>
    )
  }
}