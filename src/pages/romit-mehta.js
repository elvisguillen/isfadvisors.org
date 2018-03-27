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
            <img className='img-fluid' src='/images/team/Placeholder.jpg' />
        </Col>
        <Col className='text-left team-right' xs='12' lg={{size: 6, offset: 1}} xl={{size: 6}}>
            <h3>Romit Mehta</h3>
            <h4 className='subtitle'> Manager</h4>
            <p>Romit is a Manager for ISF, based in Bangalore, India. He brings together experience in market landscaping, facilitating multi-stakeholder dialogue, assessing business operational and financial requirements, complex financial and statistical modeling. At ISF, Romit is responsible for leading and managing client projects that involve ISF team members and external partners to implement innovative financial structures and complex partnerships to advance ISF’s impact objectives.</p>
            <p>Romit has extensive Management Consulting and business strategy experience with Dalberg Advisors in Asia and Africa where he advised donors, governments, social enterprises, and foundations in agriculture, water and sanitation, and renewable energy. Previously, he was an advisor to the government of Ethiopia on their agriculture transformation strategy. Romit worked in an organization chaired by the Prime Minister to advise the government on accelerating food exports and created a medium-term strategy for commercial agriculture storage for the country.</p>
            <p>Romit holds a Masters in Economics from the University of Cambridge, where he was a Cambridge Commonwealth Scholar. He also writes for leading business publications on issues of food security.</p>
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
