import React from 'react'
import Link from 'gatsby-link'
import { Container, Col, Row } from 'reactstrap'

const CaseStudy = (props) => (
    <Col className={'case-study left left-contained' + props.size} onClick={this.handleLeftClick} xs={{size: 12}} lg={{size: 5}} id='1' >
        <div className='case-study-image'>
            <img className='img-fluid' src={props.thumbnail} />
        </div>
        <div className='case-study-copy'>
            <Container>
                <h3>Case Study:</h3>
                <h2>{props.title}</h2>
                <button className='white'>Expand</button>
            </Container>
        </div>
    </Col>
)

export default CaseStudy
