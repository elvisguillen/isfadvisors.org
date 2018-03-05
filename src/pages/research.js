import React from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import PageHero from '../components/PageHero'
import PageContent from '../components/PageContent'
import PageAltContent from '../components/PageAltContent'
import PageAltAreas from '../components/PageAltAreas'
import PageCTA from '../components/PageCTA'

const ResearchPage = ({transition}) => (
    <div style={transition && transition.style}>
        <PageHero>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </PageHero>

        <PageContent
            left={
                <div>
                    <Link to='/briefings'><button>Briefings</button></Link>
                    <Link to='/resources'><button>Resources</button></Link>
                </div>
            }
            right={
                <div>
                    <h3>ISF’s role as an intermediary and advisory group that facilitates partnerships is informed by the landmark research published in Inflection Point. </h3>
                    <p>By understanding the broader ecosystem around smallholder finance and rural enterprises, ISF identifies specific roles and leverage points for stakeholders at all stages of growth and development throughout the smallholder ecosystem. </p>
                </div>
            } 
        />
        <PageAltContent title='Research by Category' />
        <PageCTA>
            <p>Check out our <Link to='/'>case studies</Link>, industry-leading <Link to=''>research.</Link></p>
            <p>You can also contact us or sign up for our newsletter.</p>
        </PageCTA>
    </div>
    
)

export default ResearchPage