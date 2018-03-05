import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Container, Col, Row } from 'reactstrap'
import { slide as Menu } from 'react-burger-menu'

import Header from '../components/Header'
import '../styles/index.scss'

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
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        
        <Menu isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)} right width={ '100%' } >
          <Container>
          <Row>
            <Col xs={{size: 12}}>
              <Link onClick={() => this.closeMenu()} className='menu-item' to='/'>Home</Link>
              <Link onClick={() => this.closeMenu()} className='menu-item' to='/about'>About Us</Link>
              <Link onClick={() => this.closeMenu()} className='menu-item' to='/services'>Services</Link>
              <Link onClick={() => this.closeMenu()} className='menu-item' to='/research'>Research</Link>
              <Link onClick={() => this.closeMenu()} className='menu-item' to='/contact'>Contact</Link>
            </Col>
          </Row>
          </Container>
        </Menu>

        <Header />

        <div>
          {this.props.children()}
        </div>

        <footer>
          <p className='text-center'>© 2018 Initiative for Smallholder Finance. <Link to='/'>Privacy Policy</Link>.</p>
        </footer>
      </div>
    )
  }
}