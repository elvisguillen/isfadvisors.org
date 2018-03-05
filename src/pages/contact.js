import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle, Form, FormGroup, Input } from 'reactstrap'
import PageHero from '../components/PageHero'
import PageContent from '../components/PageContent'
import PageAltContent from '../components/PageAltContent'
import PageCTA from '../components/PageCTA'
import PageBriefings from '../components/PageBriefings'
import ReactMapGL, {Marker} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

export default class ContactPage extends Component {

    state = {
        viewport: {
            width: 500,
            height: 600,
            latitude: 25.48802,
            longitude: -42.82354,
            zoom: 1,
        }
    };

    _renderMarker(station, i) {
        const {name, coordinates} = station;

        return (
            <Marker key={i} longitude={coordinates[0]} latitude={coordinates[1]} >
                <div className="marker"></div>
            </Marker>
        );
    }

    render () {

        const locations = [
            {"name":"Lafayette (LAFY)","coordinates":[-77.042613,38.900981]},
            {"name":"Lafayette (LAFY)","coordinates":[-1.29207,36.82195]},
        ]

        return (
        
            <div style={this.props.transition && this.props.transition.style}>
                <PageHero>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </PageHero>

                <PageContent
                    left={
                        <Link to='/careers'><button>Careers</button></Link>
                    } 
                    right={
                        <div>
                            <h3>Sign up for our Newsletter</h3>

                            <form name='contact' method='post' className='form' data-netlify='true' data-netlify-honeypot="bot-field" action='thank-you'>

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
                                    <Input type='number' name='phone' id='inputPhone' placeholder='Phone Number' />
                                </FormGroup>

                                <FormGroup>
                                    <Input type='text' name='subject' id='inputSubject' placeholder='Subject' />
                                </FormGroup>

                                <FormGroup>
                                    <Input type='textarea' name='text' id='inputComment' placeholder='How can we help?' />
                                </FormGroup>
                                <FormGroup>
                                    <button type='submit'>Submit ›</button>
                                </FormGroup>

                            </form>
                        </div>
                    } />

                <PageAltContent title='Get In Touch'>
                    <Col xs='12' lg={{size: 6}} xl={{size: 6}}>
                        <ReactMapGL
                            {...this.state.viewport}
                            scrollZoom={false}
                            zoom={1}
                            mapboxApiAccessToken={'pk.eyJ1IjoiZWx2aXNndWlsbGVuIiwiYSI6ImNqYTA1NGhpeTZkZTcycXBnZ3d1dWNpeXcifQ.n0kMRqsxDE7t89k4qGuLxg'}
                            onViewportChange={(viewport) => this.setState({viewport})} >
                            { locations.map(this._renderMarker) }
                            {/* { mainLocation.map(this._renderBrandMarker) } */}
                        </ReactMapGL>
                        
                    </Col>
                    <Col className='text-left' xs='12' lg={{size: 4, offset: 1}}>
                        <PageBriefings
                            subtitle='Nairobi'
                            copy={
                                <div>
                                    <p>1000 F Street NW Unit 890
                                    Washington, D.C.
                                    202.202.2002</p>
                                </div>
                            } />
                        
                        <PageBriefings
                            subtitle='Washington D.C.'
                            copy={
                                <div>
                                    <p>1000 F Street NW Unit 890
                                    Washington, D.C. 
                                    202.202.2002</p>
                                </div>
                            } />
                        
                        <PageBriefings
                            subtitle='New York'
                            copy={
                                <div>
                                    <p>1000 3rd Street
                                    Unit 890 New York, NY 121212 
                                    202.202.2002</p>
                                </div>
                            } />
                    </Col>
                </PageAltContent>

                <PageCTA>
                <div>
                    <p>Check out our <Link to='/'>case studies</Link>, industry-leading <Link to='/'>research.</Link></p>
                    <p>You can also <Link to='/'>contact us</Link> or sign up for our <Link to='/'>newsletter.</Link></p>
                </div>
                </PageCTA>
            </div>
        )
    }
}
