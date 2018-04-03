import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import Reveal from 'react-reveal/Reveal'

const PageAltContent = (props) => (
    <section id='pageAltContent' className='rural-farmers'>
      <Container>
        <Col lg={{size: 8, offset: 2}} >
          <Reveal effect='fadeInUp'>
            <h1 className='text-center'><span>{props.title}</span></h1>
          </Reveal>
        </Col>
        <div className='rural-farmers-reasons'> 
          <Reveal effect='fadeInUp'>
            <Row>
              {props.children}
            </Row>
          </Reveal>
        </div>
      </Container>
    </section>
)

export default PageAltContent