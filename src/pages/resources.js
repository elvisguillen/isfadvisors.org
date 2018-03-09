import React from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import PageHero from '../components/PageHero'
import PageContent from '../components/PageContent'
import PageAltContent from '../components/PageAltContent'
import PageCTA from '../components/PageCTA'
import PageBriefings from '../components/PageBriefings';
import Reveal from 'react-reveal/Reveal'

const ResourcesPage = ({transition}) => (
  <div style={transition && transition.style}>
    <PageHero>
      Resources
    </PageHero>

    <PageContent
        left={
            <Link to='/briefings'><button>Briefings</button></Link>
        }
        right={
        <div>
            <Reveal effect='fadeInUp'>
                <PageBriefings 
                    title='Direct-to-Farmer Finance Innovation Spaces Playbook'
                    copy='An interactive playbook from ISF discusses how innovation can help direct-to-farmer finance providers better serve farmers by addressing the challenges associated with direct-to-farmer lending.'
                />
            </Reveal>
            <Reveal effect='fadeInUp'>
                <PageBriefings 
                    title='Infographic: How Much is Being Done for the World’s 450 Million Smallholder Farmers'
                    copy='Learn more about technical assistance for smallholder farmers — and what can be done to make it more effective — in this infographic.'
                />
            </Reveal>
            <Reveal effect='fadeInUp'>
                <PageBriefings 
                    title='Webinar Recording: Five New Technologies to Simplify Data Collection in Smallholder Finance'
                    copy='A number of new technologies have emerged to help investors with data collection, which is an integral factor in assessing risk and understanding how to provide for smallholder agricultural markets.'
                />
            </Reveal>
            <Reveal effect='fadeInUp'>
                <PageBriefings 
                    title='Webinar Recording: Local Bank Financing for Smallholder Farmers'
                    copy='An overview of the market size and scope of local bank lending to smallholder farmers, along with an exploration of what is required for a healthy, competitive smallholder banking sector.'
                />
            </Reveal>
            <Reveal effect='fadeInUp'>
                <PageBriefings 
                    title='Resource Hub: Impact and Risk Metrics in Smallholder Finance'
                    copy='Various tools to make sense of the current landscape of smallholder finance impact and risk metrics, which is crowded with multiple units of analysis, target users, and objectives.'
                />
            </Reveal>
        </div>
        } />

    <PageCTA>
      <div>
      <p>Check out our <Link to='/portfolio'>case studies</Link> & industry-leading <Link to='/research'>research.</Link></p>
        <p>You can also <Link to='/contact'>contact us</Link> or sign up for our <Link to='/contact'>newsletter.</Link></p>
      </div>
    </PageCTA>
  </div>
)

export default ResourcesPage
