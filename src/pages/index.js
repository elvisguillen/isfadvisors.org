import React from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import Fade from 'react-reveal/Fade'
import CaseStudies from '../components/CaseStudies'

import intro_photo from '../images/intro_photo.jpg'

const IndexPage = ({transition}) => (
  <div style={transition && transition.style}>
    <section className='hero'>
      <Container>
        <h1 className='text-center'><span>We transform rural economies by delivering partnerships and investment structures that promote financial inclusion for rural enterprises and smallholder farmers.</span></h1>
      </Container>
    </section>

    <section className='intro'>
      <Container>
        <Row>
          <Col xs='12' lg={{size: 4, offset: 1}} >
            <Fade bottom>
              <p>Combining industry leading research with hands-on technical expertise, ISF develops practical, profitable, and sustainable financial solutions.</p>
              <Link to='/services'><button>Services</button></Link>
            </Fade>
          </Col>
          <Col xs='12' lg={{size: 6, offset: 1}} xl={{size: 5, offset: 1}} className='intro_photo'>
            <Fade bottom>
              <img className='img-fluid d-none d-lg-block' src={intro_photo} />
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
    <img className='img-fluid d-lg-none' src={intro_photo} />
    <section className='rural-farmers text-center'>
      <Container>
        <Fade bottom>
        <Col lg={{size: 6, offset: 3}} >
          <h1 className='text-center'><span>Why rural enterprise and smallholder farmers?</span></h1>
        </Col>
        </Fade>
        <div className='rural-farmers-reasons'> 
          
        <Fade bottom>
          <Row>
              <Col xs='12' lg='4' className='reason'>
                <h2>Food Security</h2>
                <p>for a world population of xx billion by 2050</p>
              </Col>
              <Col xs='12' lg='4' className='reason'>
                <h2>Poverty Alleviation</h2>
                <p>for the 2 billion dependant on agriculturefor income</p>
              </Col>
              <Col xs='12' lg='4' className='reason'>
                <h2>Land Preservation</h2>
                <p>for the protection of natural resources</p>
              </Col>
          </Row>
        </Fade>
        </div>
      </Container>
    </section>

    <CaseStudies />
    
    <section className='cta'>
      <Container>
      <p>
        Learn more about our <Link to='/'>areas of expertise</Link>, industry-leading <Link to='/'>research</Link> or current <Link to='/'>job openings.</Link>
      </p>
      <p>
        You can also <Link to='/'>contact us</Link> or sign up for our <Link to='/'>newsletter.</Link>
      </p>
      </Container>
    </section>
    
  </div>
)

export default IndexPage
