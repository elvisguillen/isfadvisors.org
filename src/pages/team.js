import React from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import PageHero from '../components/PageHero'
import PageContent from '../components/PageContent'
import PageAltContent from '../components/PageAltContent'
import PageCTA from '../components/PageCTA'
import TeamMember from '../components/TeamMember'

import team_matt from '../images/Matthew_Shakhovsky.jpg'

import hero_page from '../images/hero_page.jpg'

const Team = [
    {
        name: 'Matt Shakhovskoy',
        title: 'Executive Director',
        img: '/images/team/Matt.jpg'
    },
    {
        name: 'Dan Zook',
        title: 'Director of Investments',
        img: '/images/team/Dan.jpg'
    },
    {
        name: 'Tom Carroll',
        title: 'Senior Advisor and Founder',
        img: '/images/team/Tom.jpg'
    },
    {
        name: 'Craig Courtney',
        title: 'Senior Advisor',
        img: '/images/team/Craig.jpg'
    },
    {
        name: 'Elizabeth Lara',
        title: 'Senior Manager',
        img: '/images/team/Liz.jpg'
    },
    {
        name: 'Martin Slawek',
        title: 'Manager',
        img: '/images/team/Martin.jpg'
    },
    {
        name: 'Romit Mehta',
        title: 'Manager',
        img: '/images/team/Placeholder.jpg'
    },
    {
        name: 'Sarah Wallace Beatty',
        title: 'Communications Manager',
        img: '/images/team/Sarah.jpg'
    },
    {
        name: 'Malia Bachesta Eley',
        title: 'Communications Associate',
        img: '/images/team/Malia.jpg'
    },
]

const TeamPage = ({transition}) => (
  <div style={transition && transition.style}>
    <PageHero heroImage={hero_page}>
        We're a team committed to transforming ideas into action.
    </PageHero>

    <PageContent
    left={
        <Link to='/about'><button>Back</button></Link>
    }
    right={
      <div>
        <h3>ISF’s team is a unique combination of professionals with backgrounds in strategy consulting, investment banking, impact investing, and rural economic development. </h3>
      </div>
    } />

    <PageAltContent title='Team'>
        <Row>
            {Team.map((member, i) => {
                return (    
                    <TeamMember 
                        key={i}
                        thumbnail={
                            <img className='img-fluid' src={member.img} />
                        }
                        link={member.name.replace(/\s+/g, '-').toLowerCase()}
                        name={member.name}
                        title={member.title} />
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

export default TeamPage
