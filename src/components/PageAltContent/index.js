import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import Fade from 'react-reveal/Fade'

const PageAltContent = (props) => (
    <section className='rural-farmers'>
      <Container>
        <Col lg={{size: 6, offset: 3}} >
          <Fade bottom>
            <h1 className='text-center'><span>{props.title}</span></h1>
          </Fade>
        </Col>
        <div className='rural-farmers-reasons'> 
          <Fade bottom>
            <Row>
              {props.children}
            </Row>
          </Fade>
        </div>
      </Container>
    </section>
)

export default PageAltContent