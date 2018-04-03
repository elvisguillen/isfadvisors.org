import React, {Component} from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import Reveal from 'react-reveal/Reveal'
import PropTypes from 'prop-types'

export default class CaseStudiesRight extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeTabIndex: this.props.defaultActiveTabIndex,
            isRightOpen: false,
            isLeftOpen: false
        }
        this.handleRightClick = this.handleRightClick.bind(this)
        this.handleCloseClick = this.handleCloseClick.bind(this)
    }

    handleRightClick(tabIndex) {
        this.setState({
            activeTabIndex: tabIndex === this.state.activeTabIndex ? this.props.defaultActiveTabIndex : tabIndex,
            isRightOpen: true
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
                onClick: this.handleRightClick,
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
                
                <Col className={this.state.isRightOpen ? 'open case-study-right' : 'case-study-right'} xs={{size: 12}} lg={{size: 6}}> 
                    <div className={ 
                        this.state.isRightOpen ? 'open-left overlay overlay-left' : 'overlay overlay-left'
                        }>
                            <div className='overlay-inner'>
                                <a onClick={this.handleCloseClick} className='close'>X</a>
                                <h1>Featured Case Study:</h1>
                                {this.renderActiveTabContent()}
                            </div>
                    </div>  
                    <Row>
                        {this.renderChildrenWithTabsApiAsProps()}
                    </Row>
                </Col>
        )
    }
}

CaseStudiesRight.propTypes = {
    defaultActiveTabIndex: PropTypes.number
};
  
CaseStudiesRight.defaultProps = {
    defaultActiveTabIndex: 2
};