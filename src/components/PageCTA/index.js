import React from 'react'
import { Container, Col, Row } from 'reactstrap'

const PageHero = (props) => (
    <section className='page-cta'>
      <Container>
        {props.children}
      </Container>
    </section>
)

export default PageHero