import React from 'react'
import Link from 'gatsby-link'
import { Container, Col, Row } from 'reactstrap'

const PageBriefings = (props) => (
    <div className='post'>
        {props.image ? (
            <div className='post-thumbnail'>
                <img className='img-fluid post-image' src={props.image} />
            </div>
        ) : (
            ''
        )}
        {props.subtitle ? (
            <h4 className='subtitle'>{props.subtitle}</h4>
        ) : ('')}
        {props.title ? (
            <h3 className='bold'> 
                {props.isLink === true ? (
                    <a href={props.link} target='_blank' className='post-title'>
                        {props.title}
                    </a>
                ) : (
                    `${props.title}`
                )}
            </h3>
        ) : ('')}
        <p>{props.copy}</p>
    </div>
)

export default PageBriefings