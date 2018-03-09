import React from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import PageHero from '../components/PageHero'
import PageContent from '../components/PageContent'
import PageAltContent from '../components/PageAltContent'
import PageCTA from '../components/PageCTA'
import TeamMember from '../components/TeamMember'

import team_matt from '../images/Matthew_Shakhovsky.jpg'

const TeamPage = ({transition}) => (
  <div style={transition && transition.style}>
    <PageHero>
        We're a team committed to transforming ideas into action.
    </PageHero>

    <PageContent
    right={
      <div>
        <h3>ISF’s team is a unique combination of professionals with backgrounds in strategy consulting, investment banking, impact investing, and rural economic development. </h3>
      </div>
    } />

    <PageAltContent title='Team'>
        <Row>
            <TeamMember 
                thumbnail={
                    <img className='img-fluid' src={team_matt} />
                }
                name='Matt Shakhovskoy'
                title='Executive Director' />
            
            <TeamMember 
                thumbnail={
                    <img className='img-fluid' src={team_matt} />
                }
                name='Matt Shakhovskoy'
                title='Executive Director' />
            
            <TeamMember 
                thumbnail={
                    <img className='img-fluid' src={team_matt} />
                }
                name='Matt Shakhovskoy'
                title='Executive Director' />
            
            <TeamMember 
                thumbnail={
                    <img className='img-fluid' src={team_matt} />
                }
                name='Matt Shakhovskoy'
                title='Executive Director' />
            
            <TeamMember 
                thumbnail={
                    <img className='img-fluid' src={team_matt} />
                }
                name='Matt Shakhovskoy'
                title='Executive Director' />
            
            <TeamMember 
                thumbnail={
                    <img className='img-fluid' src={team_matt} />
                }
                name='Matt Shakhovskoy'
                title='Executive Director' />
            
            <TeamMember 
                thumbnail={
                    <img className='img-fluid' src={team_matt} />
                }
                name='Matt Shakhovskoy'
                title='Executive Director' />
            
            <TeamMember 
                thumbnail={
                    <img className='img-fluid' src={team_matt} />
                }
                name='Matt Shakhovskoy'
                title='Executive Director' />
            
            <TeamMember 
                thumbnail={
                    <img className='img-fluid' src={team_matt} />
                }
                name='Matt Shakhovskoy'
                title='Executive Director' />
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
