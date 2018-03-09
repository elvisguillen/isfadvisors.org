import React from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import PageHero from '../components/PageHero'
import PageContent from '../components/PageContent'
import PageAltContent from '../components/PageAltContent'
import PageAltAreas from '../components/PageAltAreas'
import PageCTA from '../components/PageCTA'
import ResearchContent from '../components/ResearchContent'
import ResearchPost from '../components/ResearchPost'

const ResearchPage = ({transition}) => (
    <div style={transition && transition.style} className='research-page'>
        <PageHero>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </PageHero>

        <PageContent
            left={
                <div>
                    <Link to='/briefings'><button>Briefings</button></Link>
                    <Link to='/resources'><button className="border-top-none">Resources</button></Link>
                </div>
            }
            right={
                <div>
                    <h3>ISF’s role as an intermediary and advisory group that facilitates partnerships is informed by the landmark research published in Inflection Point. </h3>
                    <p>By understanding the broader ecosystem around smallholder finance and rural enterprises, ISF identifies specific roles and leverage points for stakeholders at all stages of growth and development throughout the smallholder ecosystem. </p>
                </div>
            } 
        />
        <PageAltContent title='Research by Category'>
            <ResearchContent>
                <ResearchPost linkClassName={'Capital Providers'} color='black' title='Capital Providers' copy='for the 2 billion dependant on agriculture for income'>
                    <div key={'Capital Providers'} className='team-feed'>
                        <PageContent
                            left={
                                <div>
                                    <h3 className='bold'>Capital Providers</h3>
                                    <p>Research focusing on smallholder finance markets.</p>
                                </div>
                            }
                            right={
                                <div>
                                    <a className='research-link' href='https://www.raflearning.org/post/climate-conundrum-financing-smallholder-productivity-and-resilience-age-climate-change' target='_blank'><h3 className='bold'>Climate finance: The climate conundrum </h3></a>
                                    <a className='research-link' href='https://www.raflearning.org/post/unlocking-local-currency-lending-foreign-exchange-risk-agricultural-finance' target='_blank'><h3 className='bold'>Foreign exchange risk: Unlocking local currency lending </h3></a>
                                    <a className='research-link' href='https://www.raflearning.org/post/investor-and-funder-guide-agricultural-social-lending-sector' target='_blank'><h3 className='bold'>Lending practices: Investor and funder guide to the agricultural social lending sector</h3></a>
                                    <a className='research-link' href='https://www.raflearning.org/post/the-fund-manager-perspective-moving-the-needle-on-inclusive-agribusiness-investment' target='_blank'><h3 className='bold'>The fund manager perspective: Moving the needle on inclusive agribusiness</h3></a>
                                </div>
                            } 
                        />
                    </div>
                </ResearchPost>
                <ResearchPost linkClassName={'Financial Service Providers'} color='brand-green' title='Financial Service Providers' copy='for the 2 billion dependant on agriculture for income'>
                    <div key={'Financial Service Providers'} className='team-feed'>
                        <PageContent
                            left={
                                <div>
                                    <h3 className='bold'>Financial Service Providers</h3>
                                    <p>Research focusing on smallholder finance markets.</p>
                                </div>
                            }
                            right={
                                <div>
                                    <a className='research-link' href='https://www.raflearning.org/post/rise-data-scientist-how-big-data-and-data-science-are-changing-smallholder-finance' target='_blank'><h3 className='bold'>Big data: The rise of the data scientist</h3></a>
                                    <a className='research-link' href='https://www.raflearning.org/post/learning-brief-1-business-case-for-digitally-enabled-smallholder-finance' target='_blank'><h3 className='bold'>Digital enablers: The business case for digitally-enabled smallholder finance</h3></a>
                                    <a className='research-link' href='https://www.raflearning.org/post/direct-farmer-finance-innovation-spaces-playbook' target='_blank'><h3 className='bold'>Direct-to-farmer lending: Finance innovation spaces playbook</h3></a>
                                    <a className='research-link' href='https://www.raflearning.org/post/lending-hand-how-direct-farmer-finance-providers-reach-smallholders' target='_blank'><h3 className='bold'>Direct-to-farmer lending: How direct-to-farmer finance providers reach smallholders</h3></a>
                                </div>
                            } 
                        />
                    </div>
                </ResearchPost>
                <ResearchPost linkClassName={'Smallholder Farmers'} color='green' title='Smallholder Farmers' copy='for the 2 billion dependant on agriculture for income'>
                    <div key={'Smallholder Farmers'} className='team-feed'>
                        <PageContent
                            left={
                                <div>
                                    <h3 className='bold'>Smallholder Farmers</h3>
                                    <p>Research focusing on smallholder finance markets.</p>
                                </div>
                            }
                            right={
                                <div>
                                    <a className='research-link' href='https://www.raflearning.org/post/2015-learning-rural-clients-workshop-presentations' target='_blank'><h3 className='bold'>Customer centricity: Client voice and customer centricity</h3></a>
                                    <a className='research-link' href='http://www.cgap.org/publications/segmentation-smallholder-households' target='_blank'><h3 className='bold'>Customer centricity: Segmentation of Smallholder Households (CGAP)</h3></a>
                                    <a className='research-link' href='https://www.raflearning.org/post/measuring-customer-satisfaction-key-happy-customers-lead-stronger-businesses' target='_blank'><h3 className='bold'>Customer insights: Measuring customer satisfaction</h3></a>
                                    <a className='research-link' href='https://www.raflearning.org/post/video-five-new-technologies-simplify-data-collection-smallholder-finance' target='_blank'><h3 className='bold'>Data collection: Five new technologies to simplify data collection in smallholder finance</h3></a>
                                </div>
                            } 
                        />
                    </div>
                </ResearchPost>
                <ResearchPost linkClassName={'Technical Assistance Providers'} color='green' title='Technical Assistance Providers' copy='for the 2 billion dependant on agriculture for income'>
                    <div key={'Technical Assistance Providers'} className='team-feed'>
                        <PageContent
                            left={
                                <div>
                                    <h3 className='bold'>Technical Assistance Providers</h3>
                                    <p>Research focusing on enabling environment.</p>
                                </div>
                            }
                            right={
                                <div>
                                    <a className='research-link' href='https://www.raflearning.org/post/case-study-return-on-investment-technoserve%E2%80%99s-coffee-initiative' target='_blank'><h3 className='bold'>Case study: The return on investment from TechnoServe’s coffee initiative</h3></a>
                                    <a className='research-link' href='https://www.raflearning.org/post/infographic-how-much-being-done-world%E2%80%99s-450-million-smallholder-farmers' target='_blank'><h3 className='bold'>Infographic: How much is being done for the world’s 450 million smallholder farmers? </h3></a>
                                    <a className='research-link' href='https://www.raflearning.org/post/technical-assistance-for-smallholder-farmers-anatomy-market' target='_blank'><h3 className='bold'>Market landscape: An anatomy of the market</h3></a>
                                    <a className='research-link' href='https://www.raflearning.org/post/rethinking-technical-assistance-unlock-smallholder-financing' target='_blank'><h3 className='bold'>Market structure: Rethinking technical assistance to unlock smallholder financing</h3></a>
                                </div>
                            } 
                        />
                    </div>
                </ResearchPost>
                <ResearchPost linkClassName={'Market and Research Platforms'} color='lighter-green' title='Market and Research Platforms' copy='for the 2 billion dependant on agriculture for income'>
                    <div key={'Market and Research Platforms'} className='team-feed'>
                        <PageContent
                            left={
                                <div>
                                    <h3 className='bold'>Market and Research Platforms</h3>
                                    <p>Research focusing on senabling environment.</p>
                                </div>
                            }
                            right={
                                <div>
                                    <a className='research-link' href='http://dalberg.com/documents/Catalyzing_Smallholder_Ag_Finance.pdf' target='_blank'><h3 className='bold'>2012 State of the sector: Catalyzing smallholder agricultural finance</h3></a>
                                    <a className='research-link' href='https://www.raflearning.org/post/inflection-point-unlocking-growth-era-farmer-finance' target='_blank'><h3 className='bold'>2016 State of the sector: Inflection Point </h3></a>
                                    <a className='research-link' href='https://data.raflearning.org/#/dataset' target='_blank'><h3 className='bold'>Open data platform: Smallholder financial solutions database</h3></a>
                                    <a className='research-link' href='https://www.raflearning.org/post/financial-inclusion-fit-size-customizing-digital-credit-for-smallholder-farmers-tanzania' target='_blank'><h3 className='bold'>Product design: Customizing digital credit for smallholders in Tanzania</h3></a>
                                    <a className='research-link' href='https://www.raflearning.org/post/smallholder-impact-and-risk-metrics-labyrinth-opportunity-1' target='_blank'><h3 className='bold'>Smallholder impact: Metrics and smallholder finance theory of change</h3></a>
                                </div>
                            } 
                        />
                    </div>
                </ResearchPost>
                <ResearchPost linkClassName={'Policy Makers'} color='brand-green' title='Policy Makers' copy='for the 2 billion dependant on agriculture for income'>
                    <div key={'Policy Makers'} className='team-feed'>
                        <PageContent
                            left={
                                <div>
                                    <h3 className='bold'>Policy Makers</h3>
                                    <p>Research focusing on enabling environment.</p>
                                </div>
                            }
                            right={
                                <div>
                                    <a className='research-link' href='https://www.raflearning.org/post/role-government-developing-agricultural-finance-look-history-germany-us-and-south-korea' target='_blank'><h3 className='bold'>Role of government: A look at the history of Germany, the US, and South Korea</h3></a>
                                </div>
                            } 
                        />
                    </div>
                </ResearchPost>
            </ResearchContent>
        </PageAltContent>
        <PageCTA>
            <p>Check out our <Link to='/'>case studies</Link> & industry-leading <Link to=''>research.</Link></p>
            <p>You can also contact us or sign up for our newsletter.</p>
        </PageCTA>
    </div>
    
)

export default ResearchPage