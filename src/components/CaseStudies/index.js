import React, {Component} from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import Fade from 'react-reveal/Fade'

import photo_case_studies from '../../images/photo_case_studies.jpg'
import photo_case_studies2 from '../../images/photo_case_studies2.jpg'
import photo_case_studies3 from '../../images/photo_case_studies3.jpg'
import photo_case_studies4 from '../../images/photo_case_studies4.jpg'

const CaseStudies = () => (
    <Fade bottom>
        <section className='case-studies'>
                <Row>
                    <Col className='case-study full-height' xs={{size: 12}} lg={{size: 6}} >
                        <div className='case-study-image'>
                        <img className='img-fluid' src={photo_case_studies} />
                        </div>
                        <div className='case-study-copy'>
                        <Container>
                            <h3>Case Study:</h3>
                            <h4>Blended investment fund design and development</h4>
                            <button className='white'>Expand</button>
                        </Container>
                        </div>
                    </Col>

                    <Col className='case-study' xs={{size: 12}} lg={{size: 6}}>
                        <Row>
                            <Col className='case-study tall-height' xs={{size: 12}} lg={{size: 12}}>
                                <div className='case-study-image'>
                                <img className='img-fluid' src={photo_case_studies2} />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='case-study small-height' xs={{size: 12}} lg={{size: 5}} >
                                <div className='case-study-image'>
                                <img className='img-fluid' src={photo_case_studies3} />
                                </div>
                            </Col>
                            <Col className='case-study small-height' xs={{size: 12}} lg={{size:7}} >
                                <div className='case-study-image'>
                                <img className='img-fluid' src={photo_case_studies4} />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
        </section>
    </Fade>
)

export default CaseStudies