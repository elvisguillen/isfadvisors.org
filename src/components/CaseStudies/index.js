import React, {Component} from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import Reveal from 'react-reveal/Reveal'

import photo_case_studies from '../../images/photo_case_studies.jpg'
import photo_case_studies2 from '../../images/photo_case_studies2.jpg'
import photo_case_studies3 from '../../images/photo_case_studies3.jpg'
import photo_case_studies4 from '../../images/photo_case_studies4.jpg'
import photo_case_studies5 from '../../images/photo_case_studies5.jpg'
import photo_case_studies6 from '../../images/photo_case_studies6.jpg'

export default class CaseStudies extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isRightOpen: false,
            isLeftOpen: false
        }
        this.handleLeftClick = this.handleLeftClick.bind(this)
        this.handleRightClick = this.handleRightClick.bind(this)
        this.handleCloseClick = this.handleCloseClick.bind(this)
    }

    handleLeftClick() {
        this.setState({
            isLeftOpen: true
        });
    }
    
    handleRightClick = (id) => {
        const newState = {
            isRightOpen: true
        }
        this.setState(newState)
        console.log(id)
    }

    handleCloseClick() {
        this.setState({
            isLeftOpen: false,
            isRightOpen: false
        });
    }

    render() {

        const caseStudies = [
            {
                id: 1,
                title: 'African coffee supply chain project',
                copy: 'ISF conducted a pre-feasibility study to explore pathways to smallholder coffee input finance in Tanzania and Uganda. ISF engaged with supply chain partners to identify key bottlenecks in the provision of pre-harvest credit, developed solutions to solve these bottlenecks, and offered insight into how industry partners and host government institutions can contribute to solutions.'
            },
            {
                id: 2,
                title: 'Sustainable supply chain financing facility',
                copy: 'Sponsored by a US charitable foundation, ISF designed a supply chain financing facility that incentivizes suppliers to meet sustainability standards of global cotton and apparel buyers through low-cost post-shipment financing. ISF is currently facilitating a group of partners working together to implement the model.'
            },
            {
                id: 3,
                title: 'West African Commodity Alliance',
                copy: 'ISF conducted a pre-feasibility study to explore pathways to smallholder coffee input finance in Tanzania and Uganda. ISF engaged with supply chain partners to identify key bottlenecks in the provision of pre-harvest credit, developed solutions to solve these bottlenecks, and offered insight into how industry partners and host government institutions can contribute to solutions.'
            },
            {
                id: 4,
                title: 'Blended investment fund design and development',
                copy: 'ISF is advising a multi-lateral client on the design and development of a blended public and private debt investment fund focused on rural SMEs and smallholder producer organizations, with a supporting technical assistance facility to reduce investment risk.'
            },
            {
                id: 5,
                title: 'Sub-Saharan African MFI partner facilitation',
                copy: 'Over a period of 12-16 months, ISF facilitated stakeholder engagement between a microfinance institution and its value chain partners in Uganda and Rwanda to strengthen partnerships that effectively deliver appropriate products that will increase productivity and income among smallholder farmers.'
            },
            {
                id: 6,
                title: 'Global public-private partnership',
                copy: 'ISF conducted a governance diagnostic of an alliance of public and private agricultural organizations who collectively seek to integrate over one million smallholders into structured offtake agreements. The diagnostic led to the establishment of a more formal management structure to grow the platform and ensure value addition for all involved parties.'
            }
        ]

        const { curPanel } = this.state;

        return (
            <Reveal effect='fadeInUp'>
                <section className='case-studies'>
                            <div className={ 
                                this.state.isLeftOpen ? 'open-right overlay' : 'overlay' &&
                                this.state.isRightOpen ? 'open-left overlay' : 'overlay' 
                                }>
                                    <a onClick={this.handleCloseClick} className='close'>X</a>
                                    <h3>ISF conducted a pre-feasibility study to explore pathways to smallholder coffee input finance in Tanzania and Uganda. ISF engaged with supply chain partners to identify key bottlenecks in the provision of pre-harvest credit, developed solutions to solve these bottlenecks, and offered insight into how industry partners and host government institutions can contribute to solutions.</h3>
                            </div>     
                        

                        
                        <Row>
                            <Col className={this.state.isLeftOpen ? 'open case-study-left' : 'case-study-left'} xs={{size: 12}} lg={{size: 6}}>
                                <Row>
                                    <Col className='case-study left left-contained small-height' onClick={this.handleLeftClick} xs={{size: 12}} lg={{size: 5}} id='1' >
                                        <div className='case-study-image'>
                                        <img className='img-fluid' src={photo_case_studies5} />
                                        </div>
                                        <div className='case-study-copy'>
                                            <Container>
                                                <h3>Case Study:</h3>
                                                <h4>Blended investment fund design and development</h4>
                                                <button className='white'>Expand</button>
                                            </Container>
                                        </div>
                                    </Col>
                                    <Col className='case-study left right-contained small-height' onClick={this.handleLeftClick} xs={{size: 12}} lg={{size:7}} id='2'>
                                        <div className='case-study-image'>
                                        <img className='img-fluid' src={photo_case_studies6} />
                                        </div>
                                        <div className='case-study-copy'>
                                            <Container>
                                                <h3>Case Study:</h3>
                                                <h4>Blended investment fund design and development</h4>
                                                <button className='white'>Expand</button>
                                            </Container>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='case-study left tall-height' onClick={this.handleLeftClick} xs={{size: 12}} lg={{size: 12}} id='3'>
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
                                </Row>
                            </Col>
                            <Col className={this.state.isRightOpen ? 'open case-study-right' : 'case-study-right'} xs={{size: 12}} lg={{size: 6}} >
                                <Row>
                                    <Col className='case-study right tall-height' onClick={this.handleRightClick.bind(this, 4)} xs={{size: 12}} lg={{size: 12}} id='4'>
                                        <div className='case-study-image'>
                                        <img className='img-fluid' src={photo_case_studies2} />
                                        </div>
                                        <div className='case-study-copy'>
                                            <Container>
                                                <h3>Case Study:</h3>
                                                <h4>Blended investment fund design and development</h4>
                                                <button className='white'>Expand</button>
                                            </Container>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='case-study right left-contained small-height' onClick={this.handleRightClick.bind(this, 5)} xs={{size: 12}} lg={{size: 5}} id='5'>
                                        <div className='case-study-image'>
                                        <img className='img-fluid' src={photo_case_studies3} />
                                        </div>
                                        <div className='case-study-copy'>
                                            <Container>
                                                <h3>Case Study:</h3>
                                                <h4>Blended investment fund design and development</h4>
                                                <button className='white'>Expand</button>
                                            </Container>
                                        </div>
                                    </Col>
                                    <Col className='case-study right right-contained small-height' onClick={this.handleRightClick.bind(this, 6)} onMouseEnter={this.handleHover} xs={{size: 12}} lg={{size:7}} id='6'>
                                        <div className='case-study-image'>
                                        <img className='img-fluid' src={photo_case_studies4} />
                                        </div>
                                        <div className='case-study-copy'>
                                            <Container>
                                                <h3>Case Study:</h3>
                                                <h4>Blended investment fund design and development</h4>
                                                <button className='white'>Expand</button>
                                            </Container>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                </section>
            </Reveal>
        )
    }
}