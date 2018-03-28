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
            <img className='img-fluid' src='/images/team/Liz.jpg' />
            <Link to='/team'><button>Back</button></Link>
        </Col>
        <Col className='text-left team-right' xs='12' lg={{size: 6, offset: 1}} xl={{size: 6}}>
            <h3>Elizabeth Lara</h3>
            <h4 className='subtitle'>Senior Manager</h4>
            <p>Elizabeth is a Senior Manager based in New York where she is responsible for transaction development and deal execution. Elizabeth joins ISF with 12 years of principal investing, financial advisory, and development experience across emerging markets.</p>
            <p>Prior to ISF, Elizabeth was a principal at Wolfensohn Fund Management, an emerging markets private equity fund focused on impact minority investments in financial services and low-carbon energy. Before that, she served as an associate at Rhone Capital, an LBO fund specializing in control acquisitions of industrial and manufacturing companies with multi-national operations. Previously, Elizabeth was an investment associate at the International Finance Corporation's Oil & Gas Division. She began her career at Morgan Stanley as an analyst in the Latin America Investment Banking Division. Throughout her experiences, she has been responsible for pipeline development, relationship building, detailed due diligence execution, complex valuation, financial structuring, market analyses, transaction documentation and portfolio investment management.</p>
            <p>Elizabeth earned an MBA from Harvard Business School and a BA from New York University. She is a native Spanish speaker, and fluent in Portuguese and French.</p>
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
