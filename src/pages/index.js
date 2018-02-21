import React from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'

import intro_photo from '../images/intro_photo.jpg'
import photo_case_studies from '../images/photo_case_studies.jpg'

const IndexPage = () => (
  <div>
    <section className='hero'>
      <h1 className='text-center'><span>We transform rural economies by delivering partnerships and investment structures that promote financial inclusion for rural enterprises and smallholder farmers.</span></h1>
    </section>

    <section className='intro'>
      <Container>
        <Row>
          <Col xs={{size: 12}}>
            <p>Combining industry leading research with hands-on technical expertise, ISF develops practical, profitable, and sustainable financial solutions.</p>
            <button>Services</button>
          </Col>
          <Col xs={{size: 12}} className='intro_photo'>
            
          </Col>
        </Row>
      </Container>
    </section>
    <img className='img-fluid' src={intro_photo} />
    <section className='rural-farmers'>
      <Container>
        <h1 className='text-center'><span>Why rural enterprise and smallholder farmers?</span></h1>
        <div className='rural-farmers-reasons'> 
          <div className='reason'>
            <h2>Food Security</h2>
            <p>for a world population of xx billion by 2050</p>
          </div>
          <div className='reason'>
            <h2>Poverty Alleviation</h2>
            <p>for the 2 billion dependant on agriculturefor income</p>
          </div>
          <div className='reason'>
            <h2>Land Preservation</h2>
            <p>for the protection of natural resources</p>
          </div>
        </div>
      </Container>
    </section>

    <section className='case-studies'>
        <Row>
          <Col className='case-study' xs={{size: 12}} >
            <div className='case-study-image'>
              <img className='img-fluid' src={photo_case_studies} />
            </div>
            <div className='case-study-copy'>
              <Container>
                <h3>Case Study:</h3>
                <h4>Blended investment fund design and development</h4>
                <button className='white'>Expand</button>
              </Container>
            </div>
          </Col>
        </Row>
    </section>
    
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
