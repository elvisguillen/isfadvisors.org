import React from 'react'
import Link from 'gatsby-link'
import { Container, Col, Row } from 'reactstrap'
import PropTypes from 'prop-types';

const CaseStudy = (props) => {
    return (
        <Col className={`case-study ${props.panel} ${props.location} ${props.size} ${props.linkClassName} ${props.isActive ? 'active' : ''} `} xs={{size: 12}} 
            onClick={(event) => {
                event.preventDefault();
                props.onClick(props.tabIndex);
            }}>
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
}

CaseStudy.propTypes = {
    onClick      : PropTypes.func,
    tabIndex     : PropTypes.number,
    isActive     : PropTypes.bool,
    linkClassName: PropTypes.string.isRequired
};

export default CaseStudy
