import React from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import PageHero from '../components/PageHero'
import PageContent from '../components/PageContent'
import PageAltContent from '../components/PageAltContent'
import PageCTA from '../components/PageCTA'
import PageBriefings from '../components/PageBriefings';
import Reveal from 'react-reveal/Reveal'

import photo_case_studies from '../images/case_studies/image_case_study_1.jpg'
import photo_case_studies2 from '../images/case_studies/image_case_study_2.jpg'
import photo_case_studies3 from '../images/case_studies/image_case_study_3.jpg'
import photo_case_studies4 from '../images/case_studies/image_case_study_4.jpg'
import photo_case_studies5 from '../images/case_studies/image_case_study_5.jpg'
import photo_case_studies6 from '../images/case_studies/image_case_study_6.jpg'
import photo_case_studies7 from '../images/case_studies/image_case_study_7.jpg'
import photo_case_studies8 from '../images/case_studies/image_case_study_8.jpg'

import hero_page from '../images/hero_page_2.jpg'

const PortfolioPage = ({transition}) => (
  <div style={transition && transition.style}>
    <PageHero heroImage={hero_page}>
        Whether facilitating partnerships or building financial structures, our work takes many forms.
    </PageHero>

    <PageContent
        left={
            <Link to='/services'><button>Back</button></Link>
        }
        right={
        <div>
            <Reveal effect='fadeInUp'>
                <PageBriefings 
                    image={photo_case_studies2}
                    isLink={false}
                    title='Blended investment fund design and development'
                    copy='ISF advised a multi-lateral client on the design and development of a blended public and private debt investment fund focused on rural SMEs and smallholder producer organizations, with a supporting technical assistance facility to reduce investment risk.'
                />
            </Reveal>
            <Reveal effect='fadeInUp'>
                <PageBriefings 
                    image={photo_case_studies7}
                    isLink={false}
                    title='Sustainable supply chain financing facility'
                    copy='Sponsored by a US charitable foundation, ISF designed a supply chain financing facility that incentivizes suppliers to meet sustainability standards of global cotton and apparel buyers through low-cost post-shipment financing. ISF is currently facilitating a group of partners working together to implement the model.'
                />
            </Reveal>
            <Reveal effect='fadeInUp'>
                <PageBriefings 
                    image={photo_case_studies3}
                    isLink={false}
                    title='West African Commodity Alliance'
                    copy='ISF conducted a pre-feasibility study to explore pathways to smallholder coffee input finance in Tanzania and Uganda. ISF engaged with supply chain partners to identify key bottlenecks in the provision of pre-harvest credit, developed solutions to solve these bottlenecks, and offered insight into how industry partners and host government institutions can contribute to solutions.'
                />
            </Reveal>
            
            <Reveal effect='fadeInUp'>
                <PageBriefings
                    image={photo_case_studies4}
                    isLink={false} 
                    title='Sub-Saharan African MFI partner facilitation'
                    copy='Over a period of 12-16 months, ISF facilitated stakeholder engagement between a microfinance institution and its value chain partners in Uganda and Rwanda to strengthen partnerships that effectively deliver appropriate products that will increase productivity and income among smallholder farmers.'
                />
            </Reveal>
            <Reveal effect='fadeInUp'>
                <PageBriefings
                    image={photo_case_studies5} 
                    isLink={false}
                    title='Global public-private partnership'
                    copy='ISF conducted a governance diagnostic of an alliance of public and private agricultural organizations who collectively seek to integrate over one million smallholders into structured offtake agreements. The diagnostic led to the establishment of a more formal management structure to grow the platform and ensure value addition for all involved parties.'
                />
            </Reveal>
            <Reveal effect='fadeInUp'>
                <PageBriefings
                    image={photo_case_studies8} 
                    isLink={false}
                    title='Southeast Asia blended finance facility'
                    copy='As an advisor to a Tropical Landscape Financing Facility (TLFF), ISF is identifying relevant rural finance investment pipeline and advising on an associated technical assistance grant facility. This blended finance facility provides 10-15 year debt to landscape rehabilitation projects, smallholder productivity, low carbon growth, and sustainable energy in Southeast Asia.'
                />
            </Reveal>
            <Reveal effect='fadeInUp'>
                <PageBriefings 
                    image={photo_case_studies6}
                    isLink={false}
                    title='African coffee supply chain project'
                    copy='ISF conducted a pre-feasibility study to explore pathways to smallholder coffee input finance in Tanzania and Uganda. ISF engaged with supply chain partners to identify key bottlenecks in the provision of pre-harvest credit, developed solutions to solve these bottlenecks, and offered insight into how industry partners and host government institutions can contribute to solutions.'
                />
            </Reveal>
            <Reveal effect='fadeInUp'>
                <PageBriefings
                    image={photo_case_studies} 
                    isLink={false}
                    title='Southeast Asian social enterprise growth plan'
                    copy="ISF is advising a leading Southeast Asian social enterprise that provides farm advisory services, finance, and irrigation products to smallholder farmers as the institution positions itself for the next phase of growth. ISF's adivsory work includes setting a strategic growth framework, defining product and service integration, and charting a roadmap that incorporates a capital raise."
                />
            </Reveal>
        </div>
        } />

    <PageCTA>
      <div>
        <p>Want to learn more?</p>
        <p><Link to='/contact'>Contact us</Link> or sign up for our <Link to='/contact'>newsletter.</Link></p>
      </div>
    </PageCTA>
  </div>
)

export default PortfolioPage
