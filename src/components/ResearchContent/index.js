import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Link from 'gatsby-link'
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import Reveal from 'react-reveal/Reveal'


export default class ResearchContent extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            activeTabIndex: this.props.defaultActiveTabIndex
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleCloseClick = this.handleCloseClick.bind(this)
    }

    handleClick(tabIndex) {
        this.setState({
            activeTabIndex: tabIndex === this.state.activeTabIndex ? this.props.defaultActiveTabIndex : tabIndex,
            isOpen: true
        })
    }
    
    handleCloseClick() {
        this.setState({
            isOpen: false
        })
    }

    renderChildrenWithTabsApiAsProps() {
        return React.Children.map(this.props.children, (child, index) => {
            return React.cloneElement(child, {
                onClick: this.handleClick,
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
            <div>
                <div className={ this.state.isOpen ? 'modal-research open' : 'modal-research'}>
                    <a onClick={this.handleCloseClick} className='close-button'>+</a>
                    {this.renderActiveTabContent()}
                </div>
                <Row>
                    {this.renderChildrenWithTabsApiAsProps()}
                </Row>
            </div>
        )
    }
}


ResearchContent.propTypes = {
    defaultActiveTabIndex: PropTypes.number
};
  
ResearchContent.defaultProps = {
    defaultActiveTabIndex: 2
};