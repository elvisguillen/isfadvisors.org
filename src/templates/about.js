import React, {Component} from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import PageHero from '../components/PageHero'
import PageContent from '../components/PageContent'
import PageAltContent from '../components/PageAltContent'
import MediaCoverage from '../components/MediaCoverage'
import PageCTA from '../components/PageCTA'

import hero_page from '../images/hero_page.jpg'

class AboutPage extends Component {
  render() {
    const page = this.props.data.wordpressPage
        return(
            <div style={this.props.transition && this.props.transition.style}>
                <PageHero heroImage={hero_page}>
                    <span className='background-span-blue' dangerouslySetInnerHTML={{ __html: page.acf.page_header_copy}} />
                </PageHero>

                <PageContent
                left={
                <Link to='/team'><button>Team</button></Link>
                }
                right={
                <div>
                    <h3 dangerouslySetInnerHTML={{__html: page.acf.intro_copy}} />
                    <p dangerouslySetInnerHTML={{__html: page.acf.main_copy}} />
                </div>
                } />

                {/* <PageAltContent title='Media Coverage'>

                    <MediaCoverage/>
                
                </PageAltContent> */}

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

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPageQuery {
    wordpressPage(slug: { eq: "about" }) {
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