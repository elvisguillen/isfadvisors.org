import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import Reveal from 'react-reveal/Reveal'

const PageContent = (props) => (
    <section id={props.id} className='page-content'>
      <Container>
        <Row>
            <Col className='page-content-left' xs='12' lg={{size: 4, offset: 0}}>
                <Reveal effect='fadeInUp'>
                    {props.left}
                </Reveal>
            </Col>
            <Col className='page-content-right' xs='12' lg={{size: 6, offset: 1}} xl={{size: 6}}>
                <Reveal effect='fadeInUp'>
                    {props.right}
                </Reveal>
            </Col>
        </Row>
      </Container>   
    </section>
)

export default PageContent