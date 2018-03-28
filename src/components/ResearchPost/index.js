import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import PropTypes from 'prop-types';

const ResearchPost = (props) => {
    return (
        <Col className={`research-post ${props.color}`} xs='12' md='6' lg='4'>
            <a className={`tab-link ${props.linkClassName} ${props.isActive ? 'active' : ''} `}
                onClick={(event) => {
                    event.preventDefault();
                    props.onClick(props.tabIndex);
                }}>
                <h3>{props.linkClassName}</h3>
                <p>{props.copy}</p>
            </a>
        </Col>
    )
}

ResearchPost.propTypes = {
    onClick      : PropTypes.func,
    tabIndex     : PropTypes.number,
    isActive     : PropTypes.bool,
    linkClassName: PropTypes.string.isRequired
};

export default ResearchPost