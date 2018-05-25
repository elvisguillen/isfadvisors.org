import React, {Component} from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import Reveal from 'react-reveal/Reveal'
import CaseStudies from '../components/CaseStudies'
import { Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import intro_photo from '../images/intro_photo.jpg'
import iconScrollArrow from '../images/icon_scroll_arrow.png'

class IndexPage extends Component {
  
  constructor(props) {
    super(props)
    this.handleScrollClick = this.handleScrollClick.bind(this)
  }

  handleScrollClick(e) {
    scroll.scrollTo(800, {
      duration: 1000,
      smooth: "easeOutCubic"
    });
  }

  render() {
    return (
      <div style={this.props.transition && this.props.transition.style}>
        <section className='hero'>
          <Container>
            <h1 className='text-center'><span>We elevate rural enterprises by delivering partnerships and investment structures that promote financial inclusion for smallholders and rural economies.</span></h1>
            <div className='scroll-button' onClick={this.handleScrollClick}></div>
          </Container>
        </section>

        <Element name='Intro'>
          <section className='intro'>
            <Container>
              <Row>
                <Col xs='12' lg={{size: 6, offset: 0}} >
                  <Reveal effect='fadeInUp'>
                    <p>Combining industry leading research with hands-on technical expertise, ISF develops practical, profitable, and sustainable financial solutions.</p>
                    <Link to='/services'><button>Services</button></Link>
                  </Reveal>
                </Col>
                <Col xs='12' lg={{size: 6, offset: 0}} xl={{size: 5, offset: 1}} className='intro_photo'>
                  <Reveal effect='fadeInUp'>
                    <img className='img-fluid d-none d-lg-block' src={intro_photo} />
                  </Reveal>
                </Col>
              </Row>
            </Container>
          </section>
        </Element>
        <img className='img-fluid d-lg-none' src={intro_photo} />
        <section className='rural-farmers home text-center'>
          <Container>
            <Reveal effect='fadeInUp'>
            <Col lg={{size: 8, offset: 2}} >
              <h1 className='text-center'><span>Why rural enterprise and smallholder farmers?</span></h1>
            </Col>
            </Reveal>
            <div className='rural-farmers-reasons'> 
              
            <Reveal effect='fadeInUp'>
              <Row>
                  <Col xs='12' lg='4' className='reason'>
                    <h2>Food <br/>Security</h2>
                    <p>for a world population of 9 billion by 2050</p>
                  </Col>
                  <Col xs='12' lg='4' className='reason'>
                    <h2>Poverty Alleviation</h2>
                    <p>for the 2 billion dependant on agriculture for income</p>
                  </Col>
                  <Col xs='12' lg='4' className='reason'>
                    <h2>Land Preservation</h2>
                    <p>for the protection of natural resources</p>
                  </Col>
              </Row>
            </Reveal>
            </div>
          </Container>
        </section>

        <CaseStudies />
        
        <section className='cta text-center'>
          <Container>
            <Row>
              <Col xs='12' md='2' lg='2'>
                <img className='img-fluid' src='/images/footer-icon.png' />
              </Col>
              <Col xs='12' md='10' lg='9'>
                <p className='text-left'>
                  Learn more about our <Link to='/services#pageAltContent'>areas of expertise</Link> & industry-leading <Link to='/research'>research</Link> or current <Link to='/careers'>job openings.</Link> You can also <Link to='/contact'>contact us</Link> or sign up for our <Link to='/contact'>newsletter.</Link>
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        
      </div>
    )
  }
}

export default IndexPage
