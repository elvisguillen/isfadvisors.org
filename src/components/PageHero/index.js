import React from 'react'
import { Container, Col, Row } from 'reactstrap'

const PageHero = (props) => (
    <section className='page-hero'>
      <Col xs='12' lg={{size: 6}}>
        <h1 className='text-center'><span className='background-span-blue'>{props.children}</span></h1>
      </Col>
    </section>
)

export default PageHero