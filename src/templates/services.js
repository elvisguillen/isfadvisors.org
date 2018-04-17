import React, {Component} from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import PageHero from '../components/PageHero'
import PageContent from '../components/PageContent'
import PageAltContent from '../components/PageAltContent'
import PageAltAreas from '../components/PageAltAreas'
import PageCTA from '../components/PageCTA'

import hero_page from '../images/hero_page.jpg'

class ServicesPage extends Component {
  render() {
    const page = this.props.data.wordpressPage
    return(
      <div style={this.props.transition && this.props.transition.style}>
        <PageHero heroImage={hero_page}>
          <span className='background-span-blue' dangerouslySetInnerHTML={{__html: page.acf.page_header_copy}} />
        </PageHero>

        <PageContent 
          left={
            <Link to='/portfolio'><button>Portfolio</button></Link>
          } 
          right={
            <div dangerouslySetInnerHTML={{__html: page.content}}/>
          } />
        
        <PageAltContent title='Areas of Expertise' className='text-center'>
          <Row>
            {page.acf.areas_of_expertise.slice(0, 3).map((area, i) => (
              <PageAltAreas key={i} title={area.areas}/>
            ))}
          </Row>
          <Row>
            {page.acf.areas_of_expertise.slice(3, 6).map((area, i) => (
              <PageAltAreas key={i} title={area.areas}/>
            ))}
          </Row>
        </PageAltContent>

        <PageContent id='no-left-content'
          right={
            <div>
              <p dangerouslySetInnerHTML={{ __html: page.acf.bottom_copy }}/>
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
  }
}

export default ServicesPage

export const servicesPageQuery = graphql`
  query ServicesPageQuery {
    wordpressPage(slug: { eq: "services" }) {
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
            areas_of_expertise {
              areas
            }
            bottom_copy
        }
    }  
  }
`