import React from 'react'
const { Component } = React
import Link from 'gatsby-link'
import { Container, Col, Row } from 'reactstrap'

// const TeamMember = (props) => (
//     <Col xs='12' md='6' lg='4' className='team-member'>
//         <div className='member-thumbnail'>
//             {props.thumbnail}
//         </div>
//         <div className='member-copy'>
//             <Link to='/single-team'><h3>{props.name}</h3></Link>
//             <h4 className='subtitle'>{props.title}</h4>
//         </div>
//     </Col>
// )



var media = [
    {
        imgURL: "../static/images/quartz-logo.png",
        quote: "New research from ISF suggests that achieving zero poverty, improving food security, and combating climate change can only be made possible with substantial efforts to help smallholder farmers adapt to climate change and reduce their emissions."
    },
    {
        imgURL: "../static/images/isf_logo.png",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    },
    {
        imgURL: "../static/images/hero.jpg",
        quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        imgURL: "../static/images/photo_case_studies3.jpg",
        quote: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
]



class MediaCoverage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0,
            nextSlide: 1,
            ifClicked: false,
            refreshing: true,
            refreshInterval: 5000
        }
        this.switchSlide = this.switchSlide.bind(this);
        this.refresh = this.refresh.bind(this);
    }

    switchSlide = (val) => {
        this.setState({
            currentSlide: val,
            ifClicked: true,
            refreshing: false
        });
    }

    refresh = () => {
        // setTimeout(() => {
        //     this.setState(prevState => ({
        //         nextSlide: prevState.nextSlide + 1,
        //         currentSlide: prevState.nextSlide
        //     }))
        // }, 2000);

        if (this.state.ifClicked === false) {

        setInterval(() => {

            if (this.state.ifClicked === false) {

                if (this.state.nextSlide >= media.length) {
                    this.setState({
                        currentSlide: 0,
                        nextSlide: 1
                    })
                } else if (this.state.currentSlide <= (media.length - 1)) {
                    this.setState(prevState => ({
                        nextSlide: prevState.nextSlide + 1,
                        currentSlide: prevState.nextSlide
                    }))
                }
                console.log(this.state.nextSlide)
                

            }

            }, this.state.refreshInterval);
        }
    }
    
    componentDidMount() {
        this.refresh();
    }

    componentDidUpdate() {
        // this.refresh();
    }

    render() {

        // this.refresh();

    return (
        <Row xs='12' className="media-coverage">

        <Col xs='12' className={`slider-content ${(this.state.refreshing === true ? `refreshing` : ``)}`}>
            <Col xs='12' md='4' lg='5' className="img-block" style={{backgroundImage: `url(${media[this.state.currentSlide].imgURL})`}}>
            </Col>
            <Col xs='12' md='8' lg='7' className="quote">
            <p>"{media[this.state.currentSlide].quote}"</p>
            </Col>
        </Col>

        <Col xs='12' className="slider-location">
            <div className="dots">
                {
                    media.map(item => {
                        return (
                            <div onClick={() => this.switchSlide(media.indexOf(item))} className={`indicator-dot ${(this.state.currentSlide === media.indexOf(item) ? `current` : ``)}`}></div>
                        )
                    })
                }
            </div>
        </Col>
        

        </Row>
    )
    }
}

export default MediaCoverage