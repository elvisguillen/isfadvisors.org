import React from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import PageHero from '../components/PageHero'
import PageContent from '../components/PageContent'
import PageAltContent from '../components/PageAltContent'
import MediaCoverage from '../components/MediaCoverage'
import PageCTA from '../components/PageCTA'

import hero_page from '../images/hero_page_2.jpg'

const CareerPage = ({transition}) => (
  <div style={transition && transition.style}>
    <PageHero heroImage={hero_page}>
      Like what you see? Join our team to help us transform rural economies
    </PageHero>

    <PageContent
      right={
        <div>
          <h3>We are always looking for committed candidates with the right experience to help us achieve our vision. If you don't see the job opening you're looking for, reach out to us at jobs@ISFadvisors.org and we can chat.</h3>
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
