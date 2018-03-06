import React from 'react'
import Link from 'gatsby-link'
import { Container, Col, Row } from 'reactstrap'

const TeamMember = (props) => (
    <Col xs='12' md='6' lg='4' className='team-member'>
        <div className='member-thumbnail'>
            {props.thumbnail}
        </div>
        <div className='member-copy'>
            <Link to='/single-team'><h3>{props.name}</h3></Link>
            <h4 className='subtitle'>{props.title}</h4>
        </div>
    </Col>
)

export default TeamMember