import React from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle, Form, FormGroup, Input } from 'reactstrap'
import PageHero from '../components/PageHero'
import PageContent from '../components/PageContent'
import PageAltContent from '../components/PageAltContent'
import PageCTA from '../components/PageCTA'

import hero_page from '../images/hero_page_2.jpg'

const ContactFormPage = ({transition}) => (
  <div style={transition && transition.style}>
    <PageHero heroImage={hero_page}>
        Interested in learning more? <br></br> Send us a note and we'll get in touch.
    </PageHero>

    <PageContent
      left={
        <Link to='/contact'><button>Back</button></Link>
      }
      right={
        <div>
          <h3>Feel free to contact us if you have any questions.</h3>

            <form name='contact-us' method='post' className='form' data-netlify='true' data-netlify-honeypot="bot-field" action='thank-you'>

                <input type="hidden" name="form-name" value="contact" />
                
                <FormGroup className='d-none'>
                    <Input name="bot-field" />
                </FormGroup>

                <FormGroup> 
                    <Input type='text' name='name' id='inputName' placeholder='Full Name' />
                </FormGroup>

                <FormGroup>
                    <Input type='email' name='email' id='inputEmail' placeholder='Email' />
                </FormGroup>

                <FormGroup>
                    <Input type='text' name='subject' id='inputSubject' placeholder='Organization' />
                </FormGroup>

                <FormGroup>
                    <Input type='text' name='subject' id='inputSubject' placeholder='Subject' />
                </FormGroup>

                <FormGroup>
                    <Input type='textarea' name='subject' id='inputSubject' placeholder='Message' />
                </FormGroup>

                {/* <FormGroup>
                    <Input type='select' name='subject' id='inputSubject' placeholder='How Did You Hear About ISF?'>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </FormGroup> */}

                <FormGroup>
                    <button className='float-right' type='submit'>Submit</button>
                </FormGroup>

            </form>

        </div>
      } />

    <PageCTA>
      <div>
        <p>Check out our <Link to='/'>case studies</Link> & industry-leading <Link to='/'>research.</Link></p>
        <p>You can also <Link to='/'>contact us</Link> or sign up for our <Link to='/'>newsletter.</Link></p>
      </div>
    </PageCTA>
  </div>
)

export default ContactFormPage
