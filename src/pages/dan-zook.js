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
      We're a team committed to transforming ideas into action.
    </PageHero>

    <PageAltContent title='Team'>
        <Col xs='12' md='6' lg='4'>
            <img className='img-fluid' src='/images/team/Dan.jpg' />
        </Col>
        <Col className='text-left team-right' xs='12' lg={{size: 6, offset: 1}} xl={{size: 6}}>
            <h3>Dan Zook</h3>
            <h4 className='subtitle'>Director of Investments </h4>
            <p>Dan Zook is the Director of Investments for ISF, based in New York. Dan supports ISF’s investment pipeline development, targeted market research, and multi-stakeholder facilitation in the smallholder finance sector. Dan joined ISF from Dalberg where he was a senior project manager specializing in agriculture and access to finance. Previously, he worked for Booz & Company, Standard Chartered Bank, and Plan International.</p>
            <p>Dan holds an MBA with honors from Cornell’s Johnson Business School and a BA from Princeton University in neuroscience. He has lived and worked in Southeast Asia, the Middle East, and sub-Saharan Africa.</p>
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
