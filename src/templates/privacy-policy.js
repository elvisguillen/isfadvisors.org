import React from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import PageHero from '../components/PageHero'
import PageContent from '../components/PageContent'
import PageAltContent from '../components/PageAltContent'
import PageCTA from '../components/PageCTA'
import PageBriefings from '../components/PageBriefings';
import Reveal from 'react-reveal/Reveal'

import hero_page from '../images/hero_page_2.jpg'

const ResourcesPage = ({transition, data}) => (
  <div style={transition && transition.style}>
    <PageHero heroImage={hero_page}>
      <span className='background-span-blue' dangerouslySetInnerHTML={{ __html: data.wordpressPage.acf.page_header_copy}} />
    </PageHero>

    <PageContent
        left={
            <div>
                <Link to='/portfolio'><button>Portfolio</button></Link>
                <Link to='/research'><button className='border-top-none'>Research</button></Link>
                <Link to='/research'><button className='border-top-none'>Briefings</button></Link>
            </div>
        }
        right={
          <div dangerouslySetInnerHTML={{__html: data.wordpressPage.content}} />
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

export const privacyPageQuery = graphql`
  query PrivacyPageQuery {
    wordpressPage(slug: { eq: "privacy-policy" }) {
        id
        slug
        title
        content
        excerpt
        date
        modified
        acf {
            intro_copy
            main_copy
            page_header_copy
        }
    }
   
  }
`