import React, {Component} from 'react'
import PropTypes from "prop-types"
import Link from 'gatsby-link'
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import PageHero from '../components/PageHero'
import PageContent from '../components/PageContent'
import PageAltContent from '../components/PageAltContent'
import PageCTA from '../components/PageCTA'

import team_matt from '../images/Matthew_Shakhovsky.jpg'

import hero_page from '../images/hero_page.jpg'

class SingleTeamPage extends Component {
  render() {
    const page = this.props.data.wordpressWpTeam
    const pageContent = this.props.data.wordpressPage

    return (
      <div style={this.props.transition && this.props.transition.style} className='team-member-page'>
        <PageHero heroImage={hero_page}>
          <span className='background-span-blue' dangerouslySetInnerHTML={{ __html: pageContent.acf.page_header_copy}} />
        </PageHero>

        <PageAltContent title='Team'>
            <Col xs='12' md='6' lg='4'>
                <img className='img-fluid' src={page.featured_media.localFile.childImageSharp.resolutions.src} />
                <Link to='/team'><button>Back</button></Link>
            </Col>
            <Col className='text-left team-right' xs='12' lg={{size: 6, offset: 1}} xl={{size: 6}}>
                <h3>{page.title}</h3>
                <h4 className='subtitle'>{page.acf.job_title}</h4>
                <div dangerouslySetInnerHTML={{ __html: page.content}} />
            </Col>
        </PageAltContent>

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

export default SingleTeamPage

SingleTeamPage.propTypes = {
  data: PropTypes.object.isRequired
}

export const singleTeamPageQuery = graphql`
  query SingleTeamPageQuery($slug: String!) {

    

    wordpressWpTeam(slug: { eq: $slug }) {
      id
      slug
      title
      content
      date
      modified
      featured_media {
        localFile {
          childImageSharp {
            resolutions(width: 600, height: 600) {
              src
            }
          }
        }
      }
      acf {
       job_title 
      }
    }

    wordpressPage(slug: { eq: "team" }) {
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