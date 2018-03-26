import React, {Component} from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import Reveal from 'react-reveal/Reveal'
import PropTypes from 'prop-types'

export default class CaseStudiesLeft extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeTabIndex: this.props.defaultActiveTabIndex,
            isRightOpen: false,
            isLeftOpen: false
        }
        this.handleLeftClick = this.handleLeftClick.bind(this)
        this.handleCloseClick = this.handleCloseClick.bind(this)
    }

    handleLeftClick(tabIndex) {
        this.setState({
            activeTabIndex: tabIndex === this.state.activeTabIndex ? this.props.defaultActiveTabIndex : tabIndex,
            isLeftOpen: true
        });
    }

    handleCloseClick() {
        this.setState({
            isLeftOpen: false,
            isRightOpen: false
        });
    }

    renderChildrenWithTabsApiAsProps() {
        return React.Children.map(this.props.children, (child, index) => {
            return React.cloneElement(child, {
                onClick: this.handleLeftClick,
                tabIndex: index,
                isActive: index === this.state.activeTabIndex
            })
        })
    }

    renderActiveTabContent() {
        const {children} = this.props;
        const {activeTabIndex} = this.state;
        if (children[activeTabIndex]) {
            return children[activeTabIndex].props.children;
        }
    }

    render() {

        return (
            <Col className={this.state.isLeftOpen ? 'open case-study-left' : 'case-study-left'} xs={{size: 12}} lg={{size: 6}}>   
                <div className={ 
                    this.state.isLeftOpen ? 'open-right overlay overlay-right' : 'overlay overlay-right'
                    }>
                        <a onClick={this.handleCloseClick} className='close'>X</a>
                        <h1>Featured Case Study:</h1>
                        {this.renderActiveTabContent()}
                </div>
                <Row>
                    {this.renderChildrenWithTabsApiAsProps()}
                </Row>
            </Col>
        )
    }
}

CaseStudiesLeft.propTypes = {
    defaultActiveTabIndex: PropTypes.number
};
  
CaseStudiesLeft.defaultProps = {
    defaultActiveTabIndex: 2
};