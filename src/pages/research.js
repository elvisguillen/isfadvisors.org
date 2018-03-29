import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import chunk from "lodash/chunk"
import PageHero from '../components/PageHero'
import PageContent from '../components/PageContent'
import PageAltContent from '../components/PageAltContent'
import PageAltAreas from '../components/PageAltAreas'
import PageCTA from '../components/PageCTA'
import ResearchContent from '../components/ResearchContent'
import ResearchPost from '../components/ResearchPost'
import ResearchBriefing from '../components/ResearchBriefing'
import Reveal from 'react-reveal/Reveal'


import hero_page from '../images/hero_page_2.jpg'

const researchData = [
    {
        id: '16',
        category: 'Capital Advisors',
        link: 'https://www.raflearning.org/post/getting-smarter-on-subsidy-the-role-grant-funding-smallholder-finance',
        title: 'Getting smarter on subsidy: The role of grant funding in smallholder finance',
        copy: 'This briefing note aims to assess the role of grant funding in smallholder finance and understand how it can be used to unlock financing for millions of smallholders.'
    },
    {
        id: '15',
        category: 'Capital Providers',
        link: 'https://www.raflearning.org/post/fund-management-and-inclusive-agribusiness-global-perspective',
        title: 'The fund manager perspective: Moving the needle on inclusive agribusiness investment',
        copy: 'This briefing note interrogate how different impact-oriented agribusiness funds combine public and private capital to build a more inclusive agricultural market.'
    },
    {
        id: '14',
        category: 'Financial Service Providers',
        link: 'https://www.raflearning.org/post/financial-inclusion-fit-size-customizing-digital-credit-for-smallholder-farmers-tanzania',
        title: 'Financial inclusion fit to size: Customizing digital credit for smallholders in Tanzania',
        copy: 'This briefing note explores the causes of low uptake in digital credit for smallholders to better understand how we can develop concrete product solutions to jump-start adoption of digital credit products by them.'    },
    {
        id: '13',
        category: 'Capital Providers',
        link: 'https://www.raflearning.org/post/climate-conundrum-financing-smallholder-productivity-and-resilience-age-climate-change',
        title: 'The Climate Conundrum: Financing smallholder productivity and resilience in the age of climate change',
        copy: 'This briefing note explores the latest practices from the climate finance community and the agricultural finance community to understand how new combined models can boost returns and attract new investors.'
    },
    {
        id: '12',
        category: 'Capital Providers',
        link: 'https://www.raflearning.org/post/unlocking-local-currency-lending-foreign-exchange-risk-agricultural-finance',
        title: 'Unlocking Local Currency Lending: Foreign Exchange Risk in Agricultural Finance ',
        copy: 'This briefing note details how philanthropic investment can play an influential role in mitigating foreign exchange risk.'
    },
    {
        id: '11',
        category: 'Financial Service Providers',
        link: 'https://www.raflearning.org/post/rise-data-scientist-how-big-data-and-data-science-are-changing-smallholder-finance',
        title: 'How Big Data and Data Science Are Changing Smallholder Finance',
        copy: 'This briefing note explores how innovative lenders are using new data sources and analytics to assess the creditworthiness of borrowers.'
    },
    {
        id: '10',
        category: 'Financial Service Providers',
        link: 'https://www.raflearning.org/post/value-chain-financing-how-agro-enterprises-can-serve-alternate-aggregation-points-for',
        title: 'Value Chain Financing: How Agro-Enterprises Can Serve as Alternate Aggregation Points',
        copy: 'This briefing note explores three channels through which value chain financing models can be delivered and identifies how these models can group “enablers” to best serve smallholders.'
    },
    {
        id: '9',
        category: 'Technical Assistance Providers',
        link: 'https://www.raflearning.org/post/case-study-return-on-investment-technoserve%E2%80%99s-coffee-initiative',
        title: "Case Study: The Return on Investment from Technoserve's Coffee Initiative",
        copy: 'As a case study of a TechnoServe project aiming to increase incomes of smallholder coffee farmers in East Africa, this briefing note focuses in particular on the value of technical assistance to increase access to finance, crowd-in the private sector, achieve scale, and generate value for an industry.'
    },
    {
        id: '8',
        category: 'Technical Assistance Providers',
        link: 'https://www.raflearning.org/post/rethinking-technical-assistance-unlock-smallholder-financing',
        title: 'Rethinking Technical Assistance to Unlock Smallholder Financing',
        copy: 'This briefing note discusses how agricultural technical assistance in the developing world maps to addressing various specific financing constraints for smallholder farmers.'
    },
    {
        id: '7',
        category: 'Technical Assistance Providers',
        link: 'http://www.initiativeforsmallholderfinance.org/s/Technical-Assistance-for-Smallholder-Farmers-An-Anatomy-of-the-Market-1-z87m.pdf',
        title: 'Technical Assistance for Smallholder Farmers: An Anatomy of the Market',
        copy: 'This briefing note categorizes and characterizes the different kinds of agricultural technical assistance in operation in developing countries around the world.'
    },
    {
        id: '6',
        category: 'Financial Service Providers',
        link: 'https://www.raflearning.org/post/lending-hand-how-direct-farmer-finance-providers-reach-smallholders-0',
        title: 'Lending a Hand: How Direct-to-Farmer Finance Providers Reach Smallholder',
        copy: 'This briefing note features an overview of how 150+ finance providers currently offer direct-to-farmer finance, using a range of approaches to address core challenges associated with lending directly to these smallholders.'
    },
    {
        id: '5',
        category: 'Capital Providers',
        link: 'https://www.raflearning.org/post/investor-and-funder-guide-agricultural-social-lending-sector',
        title: 'Investor and Funder Guide to the Agricultural Social Lending Sector',
        copy: 'Drawing on groundbreaking aggregate analysis of leading social lenders’ lending portfolios and metrics, this briefing note examines current lending practices among social lenders, considers the future trajectory of the sector, and highlights opportunities for investors and funders to support the sector’s future growth.'
    },
    {
        id: '4',
        category: 'Policy Makers',
        link: 'https://www.raflearning.org/post/role-government-developing-agricultural-finance-look-history-germany-us-and-south-korea',
        title: 'The Role of Government in Developing Agricultural Finance',
        copy: 'This briefing note reflects on the role of capital markets within the context of historical agricultural sector development by considering the role of government policy in enhancing rather than replacing credit provided by private actors.'
    },
    {
        id: '3',
        category: 'Market & Research Platforms',
        link: 'https://www.raflearning.org/post/smallholder-impact-and-risk-metrics-labyrinth-opportunity-1',
        title: 'Smallholder Impact and Risk Metrics: A Labyrinth of Opportunity',
        copy: 'This briefing note takes stock of the existing landscape of smallholder impact and risk measurement and devises tools and suggestions to align these efforts for greater future impact.'
    },
    {
        id: '2',
        category: 'Financial Service Providers',
        link: 'https://www.raflearning.org/post/roadmap-for-growth-positioning-local-banks-for-success-smallholder-finance',
        title: 'A Roadmap for Growth – Positioning Local Banks for Success in Smallholder Finance',
        copy: 'This briefing note explores what is required for a healthy, competitive smallholder banking sector, and identifies investment opportunities for public and commercial funders seeking to support smallholders.'
    },
    {
        id: '1',
        category: 'Financial Service Providers',
        link: 'https://www.raflearning.org/post/local-bank-financing-for-smallholder-farmers-9-billion-drop-ocean',
        title: 'Local Bank Financing for Smallholder Famers – A $9 Billion Drop in the Ocean',
        copy: 'This briefing note provides an overview of the market size and scope of local bank lending to smallholder farmers.'
    }
]



class ResearchPage extends Component {

    constructor(props) {
        super(props)
        let postsToShow = 5
        if (typeof window != `undefined`) {
            postsToShow = window.postsToShow
        }
        this.state = {
            showingMore: postsToShow > 5,
            postsToShow: 5,
        }
    }

    update() {
        if (typeof window !== `undefined`) {
            const distanceToBottom = document.documentElement.offsetHeight - (window.scrollY + window.innerHeight)
            if (this.state.showingMore && distanceToBottom < 500) {
                this.setState({loading: true})
                setTimeout(function() {
                    this.setState({ 
                        postsToShow: this.state.postsToShow + 5, 
                        loading: false 
                    })
                }.bind(this), 800)
            }
        }
        
        this.ticking = false
    }

    handleLoad = () => {
        this.setState({loading: true, showingMore: true})
        setTimeout(function() {
            this.setState({
                postsToShow: this.state.postsToShow + 5,
                loading: false
            })
        }.bind(this), 800)
        
    }

    handleScroll = () => {
        if (!this.ticking && this.state.postsToShow < researchData.length) {
            this.ticking = true
            requestAnimationFrame(() => this.update())
        }
    }

    componentDidMount() {
        document.addEventListener(`scroll`, this.handleScroll)
        console.log(this.state.postsToShow)
    }

    componentWillUnmount() {
        document.removeEventListener(`scroll`, this.handleScroll)
        document.postsToShow = this.state.postsToShow
        
    }
    
    componentDidUpdate(researchData) {
        console.log(this.state.postsToShow)
        
    }
    render () {
        let props = this.props;

        return (
            
            
            <div style={props.transition && props.transition.style} className='research-page'>
                
                <PageHero heroImage={hero_page}>
                    Our research and deep sector understanding informs our advisory and implementation work.
                </PageHero>

                <PageContent
                    left={
                        <div>
                            <Link to='/resources'><button>Resources</button></Link>
                        </div>
                    }
                    right={
                        <div>
                            <h3>ISF’s role as an intermediary and advisory group that facilitates partnerships is informed by the landmark research published in <a className='underline' href='https://www.raflearning.org/post/inflection-point-unlocking-growth-era-farmer-finance'>Inflection Point</a>. </h3>
                            <p>By understanding the broader ecosystem around smallholder finance and rural enterprises, ISF identifies specific roles and leverage points for stakeholders at all stages of growth and development throughout the smallholder ecosystem. </p>
                        </div>
                    } 
                />
                <PageAltContent title='Our Research'>
                    <Col xs='12' className='post research-briefing'>
            
                        <h4 className='subtitle'>State of the Sector</h4>
                        
                        <h2>
                            <a href="https://www.raflearning.org/post/inflection-point-unlocking-growth-era-farmer-finance" target='_blank'  className='post-title'>
                                Inflection Point: Unlocking growth in the era of farmer finance
                            </a>
                        </h2>
                        <p>Inflection Point suggests that while current activities to expand financial inclusion are not sufficient to meet smallholder demand, concerted efforts around customer centricity, progressive partnerships, and smart subsidy have the potential to change the sector’s growth trajectory to better serve the world’s smallholder farmers.</p>
                    </Col>
                        {chunk(researchData.slice(0, this.state.postsToShow), 5).map((chunk, i) =>  {
                            return (
                                <div key={i} id={`chunk-${i}`}>
                                    {chunk.map(research => (
                                        <Reveal key={research.id} effect='fadeInUp'>
                                            <ResearchBriefing 
                                                id={research.id}
                                                category={research.category}
                                                title={research.title}
                                                copy={research.copy}
                                                link={research.link}
                                            />
                                        </Reveal>
                                    ))}
                                    
                                </div>
                            )
                        })}

                        {!this.state.showingMore && (
                            <button className='load-more' onClick={this.handleLoad}>
                                Load More
                            </button>
                        )}

                        {this.state.postsToShow === researchData.length ? (
                                ''
                            ) : (
                                this.state.loading ? (
                                    // <h3 className='text-center'>Loading...</h3>
                                    <div className="spinner">
                                        <div className="bounce1"></div>
                                        <div className="bounce2"></div>
                                        <div className="bounce3"></div>
                                    </div>
                                ) : ('')
                        )}
                        
                    
                    
                </PageAltContent>
                <PageCTA>
                    <p>Want to learn more?</p>
                    <p><Link to='/contact'>Contact us</Link> or sign up for our <Link to='/contact'>newsletter.</Link></p>
                    
                </PageCTA>
            </div>
        )
    }
}

export default ResearchPage