import React from 'react'
import { Container, Col, Row } from 'reactstrap'

const PageHero = (props) => (
    <section className='page-cta'>
      <Container>
        <Row>
          <Col xs='12' md='2' lg='2'>
            <img className='img-fluid' src='/images/footer-icon.png' />
          </Col>
          <Col xs='12' md='10' lg={{size: 9}}>
            {props.children}
          </Col>
        </Row>
      </Container>
    </section>
)

export default PageHero