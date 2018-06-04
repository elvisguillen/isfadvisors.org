import React from 'react'
import { Container, Col, Row } from 'reactstrap'

const PageHero = (props) => {
  var heroStyle = {
    backgroundImage: 'url(' + props.heroImage + ')'
  }  
  return ( 
    <section style={heroStyle} className='page-hero'>
      <Col xs='12' lg={{size: 8}}>
        <h1 className='text-center'>{props.children}</h1>
      </Col>
    </section>
    )
}

export default PageHero