import React from 'react'
import Link from 'gatsby-link'
import { Container, Col, Row } from 'reactstrap'

const ResearchBriefing = (props) => (
    <Col xs='12' className='post research-briefing'>
        
        <h4 className='subtitle'>Briefing {props.id} - Category: {props.category}</h4>
        
        {props.title ? (
            <h2>
                <a href={props.link} className='post-title'>
                    {props.title}
                </a>
            </h2>
        ) : ('')}
        <p>{props.copy}</p>
    </Col>
)

export default ResearchBriefing