import React from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import PageHero from '../components/PageHero'
import PageContent from '../components/PageContent'
import PageAltContent from '../components/PageAltContent'
import MediaCoverage from '../components/MediaCoverage'
import PageCTA from '../components/PageCTA'

import hero_page from '../images/hero_page.jpg'

const AboutPage = ({transition}) => (
  <div style={transition && transition.style}>
    <PageHero heroImage={hero_page}>
      We're on a mission to transform rural economies.
    </PageHero>

    <PageContent
    left={
      <Link to='/team'><button>Team</button></Link>
    }
    right={
      <div>
        <h3>ISF is an advisory group committed to transforming rural economies by delivering partnerships and investment structures that promote financial inclusion for rural enterprises and smallholder farmers. Combining industry-leading research with hands-on technical expertise, ISF develops practical, profitable, and sustainable financial solutions.</h3>
        <p>ISF is housed within the <a href='http://globaldevincubator.org' target='_blank' className='underline'>Global Development Incubator (GDI)</a> and shares GDI’s commitment to building effective partnerships that make a significant and lasting impact. GDI is an organization that builds startups, incubates partnerships, and strengthens existing organizations for social impact around the world.</p>
        <p>
          ISF’s advisory committee consists of leading funders and practitioners in the rural financial inclusion space, specifically the Bill and Melinda Gates Foundation, CGAP, Citi Foundation, Ford Foundation, IDH, Mastercard Foundation, One Acre Fund, Root Capital, Skoll Foundation, Small Foundation, Syngenta Foundation, TechnoServe, and USAID. 
        </p>
        <p>
          ISF regularly co-sponsors research and publishes insights with the <a href='http://www.raflearning.org' className='underline' target='_blank'>Mastercard Foundation Rural and Agricultural Finance Learning Lab</a>.
        </p>
      </div>
    } />

    <PageAltContent title='Media Coverage'>

        <MediaCoverage/>
      
    </PageAltContent>

    <PageCTA>
      <div>
        <p>Check out our <Link to='/portfolio'>case studies</Link> & industry-leading <Link to='/research'>research.</Link></p>
        <p>You can also <Link to='/contact'>contact us</Link> or sign up for our <Link to='/contact'>newsletter.</Link></p>
      </div>
    </PageCTA>
  </div>
)

export default AboutPage
