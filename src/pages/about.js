import React from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import PageHero from '../components/PageHero'
import PageContent from '../components/PageContent'
import PageAltContent from '../components/PageAltContent'
import PageCTA from '../components/PageCTA'

const AboutPage = ({transition}) => (
  <div style={transition && transition.style}>
    <PageHero>
      We're on a mission to transform rural economies.
    </PageHero>

    <PageContent
    left={
      <Link to='/team'><button>Team</button></Link>
    }
    right={
      <div>
        <h3>ISF is housed within the Global Development Incubator (GDI) and shares GDI’s commitment to building effective partnerships that make a significant and lasting impact. GDI is an organization that builds startups, incubates partnerships, and strengthens existing organizations for social impact around the world.</h3>
        <p>
          ISF’s advisory committee consists of leading funders and practitioners in the rural financial inclusion space, specifically ANDE, Bill and Melinda Gates Foundation, Business Fights Poverty, CGAP, Citi Foundation, Ford Foundation, IDH, MasterCard Foundation, One Acre Fund, Root Capital, Skoll Foundation, Small Foundation, TechnoServe, and USAID. 
        </p>
        <p>
          ISF has completed projects with a wide variety of public and private sector partners, including Airtel, Bill and Melinda Gates Foundation, Council on Smallholder Agricultural Finance, Dalberg Global Development Advisors, Esoko, IDH Sustainable Trade Initiative, International Fund for Agricultural Development (IFAD), KfW/DEG, Komaza, MIX Market, Opportunity International, Partners in Food Solutions, Rabobank, Rockefeller Foundation, TechnoServe, USAID, Vodacom, World Cocoa Foundation, and World Food Programme. 
        </p>
        <p>
          ISF regularly co-sponsors research and publishes insights with the Rural and Agricultural Finance Learning Lab.
        </p>
      </div>
    } />

    <PageAltContent title='Media Coverage'>
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
