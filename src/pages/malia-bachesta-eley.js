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
            <img className='img-fluid' src='/images/team/Malia.jpg' />
            <Link to='/team'><button>Back</button></Link>
        </Col>
        <Col className='text-left team-right' xs='12' lg={{size: 6, offset: 1}} xl={{size: 6}}>
            <h3>Malia Bachesta Eley</h3>
            <h4 className='subtitle'>Communications Associate</h4>
            <p>Malia Bachesta Eley is a Communications Associate leading the AgEnterprise focus area for the Global Development Incubator (GDI), which host ISF. In her role for the ISF she manages event coordination and the publishing process for briefing notes, blogs, and press.</p>
            <p>Prior to joining GDI, Malia was a member of Root Capital’s communications team where she led projects for systems improvements and helped track/analyze their performance for online messaging. She has worked on issues such as smallholder finance, energy poverty, and corporate responsibility.</p>
            <p>Malia holds a B.A. from Northeastern University in Communication Studies with a focus on International Affairs and Social Entrepreneurship.</p>
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
