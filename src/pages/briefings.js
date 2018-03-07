import React from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import PageHero from '../components/PageHero'
import PageContent from '../components/PageContent'
import PageAltContent from '../components/PageAltContent'
import PageCTA from '../components/PageCTA'
import PageBriefings from '../components/PageBriefings';
import Reveal from 'react-reveal/Reveal'

const BriefingsPage = ({transition}) => (
  <div style={transition && transition.style}>
    <PageHero>
      Briefings
    </PageHero>

    <PageContent
        left={
            <Link to='/resources'><button>Resources</button></Link>
            
        }
        right={
        <div>
            <Reveal effect='fadeInUp'>
                <PageBriefings
                    subtitle='Briefing 15'
                    title='The fund manager perspective: Moving the needle on inclusive agribusiness investment'
                    copy='This briefing note interrogate how different impact-oriented agribusiness funds combine public and private capital to build a more inclusive agricultural market.'
                />
            </Reveal>
            <Reveal effect='fadeInUp'>
                <PageBriefings 
                    subtitle='Briefing 14'
                    title='Financial inclusion fit to size: Customizing digital credit for smallholders in Tanzania'
                    copy='This briefing note explores the causes of low uptake in digital credit for smallholders to better understand how we can develop concrete product solutions to jump-start adoption of digital credit products by them.'
                />
            </Reveal>
            <Reveal effect='fadeInUp'>
                <PageBriefings 
                    subtitle='Briefing 13'
                    title='The Climate Conundrum: Financing smallholder productivity and resilience in the age of climate change'
                    copy='This briefing note explores the latest practices from the climate finance community and the agricultural finance community to understand how new combined models can boost returns and attract new investors.'
                />
            </Reveal>
        </div>
        } />

    <PageCTA>
      <div>
        <p>Check out our <Link to='/'>case studies</Link>, industry-leading <Link to='/'>research.</Link></p>
        <p>You can also <Link to='/'>contact us</Link> or sign up for our <Link to='/'>newsletter.</Link></p>
      </div>
    </PageCTA>
  </div>
)

export default BriefingsPage
