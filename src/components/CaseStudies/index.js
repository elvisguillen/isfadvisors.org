import React, {Component} from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import Reveal from 'react-reveal/Reveal'
import CaseStudiesLeft from '../../components/CaseStudiesLeft'
import CaseStudiesRight from '../../components/CaseStudiesRight'
import CaseStudy from '../../components/CaseStudy'

import photo_case_studies from '../../images/photo_case_studies.jpg'
import photo_case_studies2 from '../../images/photo_case_studies2.jpg'
import photo_case_studies3 from '../../images/photo_case_studies3.jpg'
import photo_case_studies4 from '../../images/photo_case_studies4.jpg'
import photo_case_studies5 from '../../images/photo_case_studies5.jpg'
import photo_case_studies6 from '../../images/photo_case_studies6.jpg'

const CaseStudies = (props) => {
    return (
        <Reveal effect='fadeInUp'>
            <section className='case-studies d-none d-md-block' >
                <Row>
                    <CaseStudiesLeft>
                        <CaseStudy
                            title='Blended investment fund design and development' 
                            thumbnail={photo_case_studies2}
                            size='tall-height'
                            panel='right'
                            linkClassName='Blended investment fund design and development'>
                            <h2 className='bold uppercase'>Blended investment fund design and development</h2>
                            <h2 className='overlay-copy'>ISF advised a multi-lateral client on the design and development of a blended public and private debt investment fund focused on rural SMEs and smallholder producer organizations, with a supporting technical assistance facility to reduce investment risk.</h2>
                        </CaseStudy>
                        <CaseStudy
                            title='African coffee supply chain project' 
                            thumbnail={photo_case_studies5}
                            size='small-height'
                            location='left-contained'
                            panel='left'
                            linkClassName='African coffee supply chain project'>
                            <h2 className='bold uppercase'>African coffee supply chain project</h2>
                            <h2 className='overlay-copy'>ISF conducted a pre-feasibility study to explore pathways to smallholder coffee input finance in Tanzania and Uganda. ISF engaged with supply chain partners to identify key bottlenecks in the provision of pre-harvest credit, developed solutions to solve these bottlenecks, and offered insight into how industry partners and host government institutions can contribute to solutions.</h2>
                        </CaseStudy>
                        
                        
                    </CaseStudiesLeft>
                    <CaseStudiesRight>
                        <CaseStudy
                            title='West African Commodity Alliance' 
                            thumbnail={photo_case_studies}
                            size='tall-height'
                            panel='left'
                            linkClassName='West African Commodity Alliance'>
                            <h2 className='bold uppercase'>West African Commodity Alliance</h2>             
                            <h2 className='overlay-copy'>As a strategic financial services partner to a leading pre-competitive commodity alliance, ISF identified pre-competitive investment structures and activities that members can collectively execute to promote access to finance for rural enterprises in West Africa, such as new risk-sharing facilities, federated collection of shared farmer data, and financial service sector policy advocacy.</h2>
                        </CaseStudy>
                        <CaseStudy
                            title='Sustainable supply chain financing facility' 
                            thumbnail={photo_case_studies6}
                            location='right-contained'
                            size='small-height'
                            panel='left'
                            linkClassName='Sustainable supply chain financing facility'>
                            <h2 className='bold uppercase'>Sustainable supply chain financing facility</h2>             
                            <h2 className='overlay-copy'>Sponsored by a US charitable foundation, ISF designed a supply chain financing facility that incentivizes suppliers to meet sustainability standards of global cotton and apparel buyers through low-cost post-shipment financing. ISF is currently facilitating a group of partners working together to implement the model.</h2>
                        </CaseStudy>
                        {/* <CaseStudy
                            title='Sub-Saharan African MFI partner facilitation' 
                            thumbnail={photo_case_studies3}
                            location='left-contained'
                            size='small-height'
                            panel='right'
                            linkClassName='Sub-Saharan African MFI partner facilitation'>
                            <h2 className='bold uppercase'>Sub-Saharan African MFI partner facilitation</h2>             
                            <h2 className='overlay-copy'>Over a period of 12-16 months, ISF facilitated stakeholder engagement between a microfinance institution and its value chain partners in Uganda and Rwanda to strengthen partnerships that effectively deliver appropriate products that will increase productivity and income among smallholder farmers.</h2>
                        </CaseStudy> */}
                        {/* <CaseStudy
                            title='Global public-private partnership' 
                            thumbnail={photo_case_studies}
                            location='right-contained'
                            panel='right'
                            size='small-height'
                            linkClassName='Global public-private partnership'>             
                            <h2>ISF conducted a governance diagnostic of an alliance of public and private agricultural organizations who collectively seek to integrate over one million smallholders into structured offtake agreements. The diagnostic led to the establishment of a more formal management structure to grow the platform and ensure value addition for all involved parties.</h2>
                        </CaseStudy> */}
                    </CaseStudiesRight>
                </Row>
            </section>
        </Reveal>
    )
}

export default CaseStudies