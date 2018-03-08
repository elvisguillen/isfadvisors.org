import React from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import PageHero from '../components/PageHero'
import PageContent from '../components/PageContent'
import PageAltContent from '../components/PageAltContent'
import PageAltAreas from '../components/PageAltAreas'
import PageCTA from '../components/PageCTA'

const ServicesPage = ({transition}) => (
  <div style={transition && transition.style}>
    <PageHero>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </PageHero>

    <PageContent 
      left={
        <Link to='/portfolio'><button>Portfolio</button></Link>
      } 
      right={
        <div>
        <h3>In our experience, financial institutions working alone are rarely able to address the financial service needs of rural enterprises and farmers in emerging economies.</h3>
        <p>Serving this market requires multiple organizations working together to deliver a suite of services that mitigate risk and reduce the cost of delivery. However, market actors frequently lack the capacity, dedicated resources, or incentive to focus on the development of these structures until there is a refined business concept, an engaged set of investors, and complementary partners interested in moving forward. Moreover, even with the right set of partners engaged, rural finance is inherently risky and complex, which means investors tend to focus on larger or easier deals in sectors such as manufacturing, infrastructure, and housing. Wider adoption of blended finance models – the use of grant and concessional funding to mobilize private capital and make investments more financially viable – is essential to responding to the funding needs of rural enterprises.</p>
        </div>
      } />
    
    <PageAltContent title='Areas of Expertise' className='text-center'>
      <Row>
        <PageAltAreas title='Market Assessment and Feasibility' />
        <PageAltAreas title='Financial Sector Advisory Services' />
        <PageAltAreas title='Investment Advisory and Structuring' />
      </Row>
      <Row>
        <PageAltAreas title='Partnership Development and Governance' />
        <PageAltAreas title='Product and Service Delivery Model Development' />
        <PageAltAreas title='Enterprise Growth Strategy' />
      </Row>
    </PageAltContent>

    <PageContent
      right={
        <div>
          <h3>ISF’s primary role is to act as a design catalyst. The emphasis is on mobilizing additional financing for rural enterprises and seeding replication of innovative models. </h3>
          <p>ISF works with public and private investors to develop new financial and partnership structures that can drive capital to rural clients and transform their economies. This typically includes a combination of partnership development and enterprise growth strategy while layering in financial inclusion and investment structuring expertise. ISF’s team includes management consultants from leading strategy firms and financial experts from investment banking and impact investing backgrounds. Armed with industry leading research on rural financial inclusion, ISF is uniquely positioned to respond to the specific needs of rural enterprises and financial institutions in order to build more profitable, equitable, and sustainable rural economies.</p>
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

export default ServicesPage
