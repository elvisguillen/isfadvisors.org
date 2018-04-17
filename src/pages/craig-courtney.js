import React from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import PageHero from '../components/PageHero'
import PageContent from '../components/PageContent'
import PageAltContent from '../components/PageAltContent'
import PageCTA from '../components/PageCTA'

import team_matt from '../images/Matthew_Shakhovsky.jpg'

import hero_page from '../images/hero_page.jpg'

const SingleTeamPage = ({transition}) => (
  <div style={transition && transition.style} className='team-member-page'>
    <PageHero heroImage={hero_page}>
      <span className='background-span-blue'>We're a team committed to transforming ideas into action.</span>
    </PageHero>

    <PageAltContent title='Team'>
        <Col xs='12' md='6' lg='4'>
            <img className='img-fluid' src='/images/team/Craig.jpg' />
            <Link to='/team'><button>Back</button></Link>
        </Col>
        <Col className='text-left team-right' xs='12' lg={{size: 6, offset: 1}} xl={{size: 6}}>
            <h3>Craig Courtney</h3>
            <h4 className='subtitle'>Senior Advisor</h4>
            <p>Craig Courtney is a Senior Advisor to ISF, specializing in innovative solutions for international development finance.</p>
            <p>Previously, he was Director, External Relations at the Global Alliance for Improved Nutrition (GAIN), where his duties included overseeing all resource mobilization matters, strategic communications/advocacy, and private sector partnerships. Prior to his development finance work, he acquired extensive experience raising capital and providing strategic advice to governments and corporations while working for over 20 years in investment banking in Asia and Europe.</p>
            <p>Craig holds a MBA from Cornell University and a BA in Economics and Viticulture/Enology from the University of California, Davis.</p>
        </Col>
    </PageAltContent>

    <PageCTA>
      <div>
        <p>Check out our <Link to='/portfolio'>case studies</Link> & industry-leading <Link to='/research'>research.</Link></p>
        <p>You can also <Link to='/contact'>contact us</Link> or sign up for our <Link to='/contact'>newsletter.</Link></p>
      </div>
    </PageCTA>
  </div>
)

export default SingleTeamPage
