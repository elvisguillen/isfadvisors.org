import React, {Component} from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import PageHero from '../components/PageHero'
import PageContent from '../components/PageContent'
import PageAltContent from '../components/PageAltContent'
import PageCTA from '../components/PageCTA'
import TeamMember from '../components/TeamMember'

import team_matt from '../images/Matthew_Shakhovsky.jpg'

import hero_page from '../images/hero_page.jpg'

// const Team = [
//     {
//         name: 'Matt Shakhovskoy',
//         title: 'Executive Director',
//         img: '/images/team/Matt.jpg'
//     },
//     {
//         name: 'Dan Zook',
//         title: 'Director of Investments',
//         img: '/images/team/Dan.jpg'
//     },
//     {
//         name: 'Tom Carroll',
//         title: 'Senior Advisor and Founder',
//         img: '/images/team/Tom.jpg'
//     },
//     {
//         name: 'Craig Courtney',
//         title: 'Senior Advisor',
//         img: '/images/team/Craig.jpg'
//     },
//     {
//         name: 'Elizabeth Lara',
//         title: 'Senior Manager',
//         img: '/images/team/Liz.jpg'
//     },
//     {
//         name: 'Martin Slawek',
//         title: 'Manager',
//         img: '/images/team/Martin.jpg'
//     },
//     {
//         name: 'Romit Mehta',
//         title: 'Manager',
//         img: '/images/team/Placeholder.jpg'
//     },
//     {
//         name: 'Malia Bachesta Eley',
//         title: 'Communications Associate',
//         img: '/images/team/Malia.jpg'
//     },
// ]

class TeamPage extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const page = this.props.data.wordpressPage
        const Team = this.props.data.allWordpressWpTeam
        
        return(
            <div style={this.transition && this.transition.style}>
                <PageHero heroImage={hero_page}>
                    <span className='background-span-blue' dangerouslySetInnerHTML={{ __html: page.acf.page_header_copy}} />
                </PageHero>

                <PageContent
                left={
                    <Link to='/about'><button>Back</button></Link>
                }
                right={
                    <div dangerouslySetInnerHTML={{__html: page.content}}/>
                } />

                <PageAltContent title='Team'>
                    <Row>
                        {Team.edges.map(({node: member}, i) => {
                            return (    
                                <TeamMember 
                                    key={i}
                                    thumbnail={
                                        <img className='img-fluid' src={member.featured_media.localFile.childImageSharp.resolutions.src} />
                                    }
                                    link={member.title.replace(/\s+/g, '-').toLowerCase()}
                                    name={member.title}
                                    title={member.acf.job_title} />
                            )
                        })}
                    </Row>
                    
                    
                </PageAltContent>

                <PageCTA>
                <div>
                    <p>Check out our <Link to='/'>case studies</Link> & industry-leading <Link to='/'>research.</Link></p>
                    <p>You can also <Link to='/'>contact us</Link> or sign up for our <Link to='/'>newsletter.</Link></p>
                </div>
                </PageCTA>
            </div>
        )
    }
}

export default TeamPage

export const teamPageQuery = graphql`
  query TeamPageQuery {
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
    
    allWordpressWpTeam(sort: { order: ASC, fields: [date] },) {
        edges {
            node{
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
        }
    } 
  }
`