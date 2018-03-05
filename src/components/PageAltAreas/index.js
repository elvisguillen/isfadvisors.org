import React from 'react'
import { Container, Col, Row } from 'reactstrap'

const PageAltAreas = (props) => (
    <Col xs='12' lg='4' className='reason text-center'>
        <h2>{props.title}</h2>
        <p>{props.copy}</p>
    </Col>
)

export default PageAltAreas