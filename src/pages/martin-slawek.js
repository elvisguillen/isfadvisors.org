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
            <img className='img-fluid' src='/images/team/Martin.jpg' />
        </Col>
        <Col className='text-left team-right' xs='12' lg={{size: 6, offset: 1}} xl={{size: 6}}>
            <h3>Martin Slawek</h3>
            <h4 className='subtitle'>Manager</h4>
            <p>Martin Slawek is a Manager for ISF based in Nairobi, Kenya. Martin is responsible for the structuring of innovative development finance solutions, along with investment pipeline generation. He has worked extensively with agriculture companies, agriculture startups, banks, governments, foundations, and impact investors.</p>
            <p>Martin earned a double major BA in International Relations and in Mandarin Chinese from Hobart College. He holds the Series 79 and 63 licenses.</p>
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
