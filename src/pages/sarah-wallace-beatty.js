
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
            <img className='img-fluid' src='/images/team/Sarah.jpg' />
            <Link to='/team'><button>Back</button></Link>
        </Col>
        <Col className='text-left team-right' xs='12' lg={{size: 6, offset: 1}} xl={{size: 6}}>
            <h3>Sara Wallace Beatty</h3>
            <h4 className='subtitle'>Communications Manager</h4>
            <p>Sara Wallace Beatty is Communications Manager for the Global Development Incubator, which houses ISF. She leads communications efforts for GDI and the initiatives and social enterprises across GDI’s focus areas. Sara oversees the publication of ISF's briefing notes and liaises with partners and stakeholders.</p>
            <p>Before joining GDI, Sara supported communications at Dalberg. Sara has also worked at journalism outlets including Media Matters for America, Philadelphia Magazine, and the Olive Press in Andalucía, Spain.</p>
            <p>She holds a BA in Sociology from Princeton University.</p>
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
