import React from 'react'
import { Container, Col, Row } from 'reactstrap'

const PageBriefings = (props) => (
    <div className='post'>
        <h4 className='subtitle'>{props.subtitle}</h4>
        <h3>{props.title}</h3>
        <p>{props.copy}</p>
    </div>
)

export default PageBriefings