import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle, Form, FormGroup, Input } from 'reactstrap'
import PageHero from '../components/PageHero'
import PageContent from '../components/PageContent'
import PageAltContent from '../components/PageAltContent'
import PageCTA from '../components/PageCTA'
import PageBriefings from '../components/PageBriefings'
// import ReactMapGL, {Marker} from 'react-map-gl'
// import 'mapbox-gl/dist/mapbox-gl.css'

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

import hero_page from '../images/hero_page_2.jpg'
const mapStyling = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dadada"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#c9c9c9"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    }
  ]

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={2}
    defaultCenter={{ lat: 15.523703, lng: -32.957323 }}
    defaultOptions={{ styles: mapStyling }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 38.900981 , lng: -77.042613 }} />}
    {props.isMarkerShown && <Marker position={{ lat: -1.291003, lng: 36.783546 }} />}
    {props.isMarkerShown && <Marker position={{ lat: 40.744696, lng: -73.984908 }} />}
  </GoogleMap>
))

export default class ContactPage extends Component {

    state = {
        viewport: {
            width: 500,
            height: 600,
            latitude: 25.48802,
            longitude: -42.82354,
            zoom: 2,
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

        const page = this.props.data.wordpressPage

        return (
        
            <div style={this.props.transition && this.props.transition.style} className='contact-page'>
                <PageHero heroImage={hero_page}>
                  <span className='background-span-blue' dangerouslySetInnerHTML={{ __html: page.acf.page_header_copy}} />
                </PageHero>

                <PageContent
                    left={
                        <div>
                          <Link to='/careers'><button>Careers</button></Link>
                          <Link to='/contact-form'><button className='border-top-none'>Contact</button></Link>
                        </div>
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
                                    <Input type='text' name='subject' id='inputSubject' placeholder='Organization' />
                                </FormGroup>
                                
                                <Row>
                                    <Col xs='12' md='6'>
                                        <FormGroup>
                                            <Input type='text' name='subject' id='inputSubject' placeholder='Job Title' />
                                        </FormGroup>
                                    </Col>
                                    <Col xs='12' md='6'>
                                        <FormGroup>
                                            <Input type='text' name='subject' id='inputSubject' placeholder='Country' />
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <FormGroup>
                                    <Input type='text' name='subject' id='inputSubject' placeholder='Type of Organization' />
                                </FormGroup>

                                <FormGroup>
                                    <Input type='text' name='subject' id='inputSubject' placeholder='How Did You Hear About ISF?' />
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

                <PageAltContent title='Get In Touch'>
                    <Col className='d-none d-md-block' xs='12' lg={{size: 6}} xl={{size: 6}}>
                        {/* <ReactMapGL
                            {...this.state.viewport}
                            scrollZoom={true}
                            mapboxApiAccessToken={'pk.eyJ1IjoiZWx2aXNndWlsbGVuIiwiYSI6ImNqYTA1NGhpeTZkZTcycXBnZ3d1dWNpeXcifQ.n0kMRqsxDE7t89k4qGuLxg'}
                            onViewportChange={(viewport) => this.setState({viewport})} >
                            { locations.map(this._renderMarker) }
                            { mainLocation.map(this._renderBrandMarker) }
                        </ReactMapGL> */}
                        <MyMapComponent
                            isMarkerShown
                            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAoS-eQ29giI8OO_1vvcLet-FYc2e2feVw&v=3.exp&libraries=geometry,drawing,places"
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `600px` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                        />
                        
                    </Col>
                    <Col className='text-left' xs='12' lg={{size: 5, offset: 1}}>
                        <h3>Questions? <Link className='underline' to='/contact-form'>Contact Us.</Link></h3>
                        
                        {page.acf.locations.map((post, i) => (
                          <PageBriefings
                          key={i}
                          subtitle={post.location}
                          copy={
                              <div dangerouslySetInnerHTML={{ __html: post.address}}/>
                          } />
                        ))}


                        {/* <PageBriefings
                            subtitle='Nairobi'
                            copy={
                                <div>
                                    <p>6th Floor, Galana Plaza<br />
                                    Galana Road, Kilimani (office), <br />
                                    P.O. Box 100657<br />
                                    Nairobi 00101 (postal)<br />
                                    Kenya</p>
                                </div>
                            } />
                        
                        <PageBriefings
                            subtitle='Washington D.C.'
                            copy={
                                <div>
                                    <p>1401 K Street NW Suite 900, <br />
                                      Washington DC<br />
                                    
                                    </p>
                                </div>
                            } />
                        
                        <PageBriefings
                            subtitle='New York'
                            copy={
                                <div>
                                     <p>99 Madison Avenue,<br />
                                    New York, NY 10016<br />
                                    </p>
                                </div>
                            } /> */}
                    </Col>
                </PageAltContent>

                <PageCTA>
                    <div>
                        <p>Want to learn more?</p>
                        <p>Check out our <Link to='/portfolio'>case studies</Link> & industry-leading <Link to='/research'>research.</Link></p>
                    </div>
                </PageCTA>
            </div>
        )
    }
}

export const contactPageQuery = graphql`
  query ContactPageQuery {
    wordpressPage(slug: { eq: "contact" }) {
      id
      slug
      title
      content
      excerpt
      date
      modified
      acf {
          page_header_copy
          locations {
            location
            address
          }
      }
    }
  }
`