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
            <img className='img-fluid' src='/images/team/Tom.jpg' />
            <Link to='/team'><button>Back</button></Link>
        </Col>
        <Col className='text-left team-right' xs='12' lg={{size: 6, offset: 1}} xl={{size: 6}}>
            <h3>Tom Carroll</h3>
            <h4 className='subtitle'>Senior Advisor and Founder</h4>
            <p>Tom Carroll is a Senior Advisor of ISF based in Washington DC and Director of the AgEnterprise portfolio at the Global Development Incubator (GDI), which hosts ISF. In his role, leading GDI’s AgEnterprise portfolio, Tom oversees GDI’s support for several incubated efforts, including ISF and the Mastercard Foundation Rural and Agricultural Finance Learning Lab. The portfolio’s aim is to make the economics of environmentally sound, community-led agriculture sustainable. The AgEnterprise portfolio supports multi-stakeholder initiatives and social enterprises that focus on the development and application of products and services for small agricultural enterprises, including finance, digital technology, and education.</p>
            <p>Previously, Tom was a Partner at Dalberg Global Development Advisors where he led a strategy consulting portfolio that included efforts such as comprehensive investment/market entry analyses of global and regional commodity markets; the development of public-private partnerships across a host of those markets; the commercialization of agriculture technologies; and the design of innovative financing mechanisms in frontier markets.</p>
            <p>Tom holds an MBA from Yale School of Management and a BA in government from the University of Notre Dame.</p>
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
