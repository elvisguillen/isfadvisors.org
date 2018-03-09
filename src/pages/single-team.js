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
            <img className='img-fluid' src={team_matt} />
        </Col>
        <Col className='text-left team-right' xs='12' lg={{size: 6, offset: 1}} xl={{size: 6}}>
            <h3>Matt Shakhovskoy</h3>
            <h4 className='subtitle'>Executive Director</h4>
            <p>Matt Shakhovskoy is the Executive Director of the Initiative for Smallholder Finance, a multi-donor effort designed to demonstrate how specific products and services can expand the reach of financing for smallholder farmers. Over the past ten years Matt has worked in the areas of private equity and development advisory for a number of leading organizations including Agis Investments, Dalberg, and Deloitte. Over this time Matt has been involved in over 60 projects in 25 countries working with partners such as the Gates Foundation, the World Bank, USAID, MTN, and the G8.</p>
            <p>Matt holds a MSc in Sustainable Development from the University of London and Bachelors of Business and Economics from the University of Queensland.</p>
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
