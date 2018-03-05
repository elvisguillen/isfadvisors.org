import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import Fade from 'react-reveal/Fade'

const PageContent = (props) => (
    <section className='page-content'>
      <Container>
        <Row>
            <Col className='page-content-left' xs='12' lg={{size: 3, offset: 1}}>
                <Fade bottom>
                    {props.left}
                </Fade>
            </Col>
            <Col className='page-content-right' xs='12' lg={{size: 6, offset: 1}} xl={{size: 6}}>
                <Fade bottom>
                    {props.right}
                </Fade>
            </Col>
        </Row>
      </Container>   
    </section>
)

export default PageContent