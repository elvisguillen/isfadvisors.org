import React from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import PageHero from '../components/PageHero'
import PageContent from '../components/PageContent'
import PageBriefings from '../components/PageBriefings'
import PageAltContent from '../components/PageAltContent'
import PageCTA from '../components/PageCTA'

import Reveal from 'react-reveal/Reveal'


import hero_page from '../images/hero_page_2.jpg'

const CareerPage = ({transition}) => (
  <div style={transition && transition.style}>
    <PageHero heroImage={hero_page}>
      <span className='background-span-blue'>Like what you see? Join our team to help us transform rural economies</span>
    </PageHero>

    <PageContent
      left={
        <Link to='/contact'><button>Back</button></Link>
      }
      right={
        <div>
          <h3>We are always looking for committed candidates with the right experience to help us achieve our vision. If you don't see the job opening you're looking for, reach out to us at jobs@ISFadvisors.org.</h3>
          <Reveal effect='fadeInUp'>
            <Col xs='12' style={{marginTop: '100px', paddingLeft: '0px', paddingRight: '0px'}} className='post research-briefing'>
                
                <h4 className='subtitle'>New York</h4>
                
                <h2>
                    <a href="/files/ISF_Associate_Position_2018.pdf" target='_blank'  className='post-title'>
                        Associate
                    </a>
                </h2>
                <p>The Associate role is a unique opportunity to work closely with financial sector innovators, agriculture supply chain experts and entrepreneurs who seek to advance financial inclusion for 500 million smallholder farmers and associated rural enterprises around the world.</p>
            </Col>
          </Reveal>
        </div>
      } />

    <PageCTA>
      <div>
        <p>Check out our <Link to='/'>case studies</Link> & industry-leading <Link to='/'>research.</Link></p>
        <p>You can also <Link to='/'>contact us</Link> or sign up for our <Link to='/'>newsletter.</Link></p>
      </div>
    </PageCTA>
  </div>
)

export default CareerPage
