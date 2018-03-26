// import React, { Component } from 'react'
// import Link from 'gatsby-link'
// import { Container, Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
// import chunk from "lodash/chunk"
// import PageHero from '../components/PageHero'
// import PageContent from '../components/PageContent'
// import PageAltContent from '../components/PageAltContent'
// import PageAltAreas from '../components/PageAltAreas'
// import PageCTA from '../components/PageCTA'
// import ResearchContent from '../components/ResearchContent'
// import ResearchPost from '../components/ResearchPost'
// import ResearchBriefing from '../components/ResearchBriefing'
// import Reveal from 'react-reveal/Reveal'

// import InfiniteScroll from 'react-infinite-scroller';

// import hero_page from '../images/hero_page_2.jpg'

// const researchData = [
//     {
//         id: '15',
//         category: 'Capital Providers',
//         link: '/',
//         title: 'The fund manager perspective: Moving the needle on inclusive agribusiness investment',
//         copy: 'This briefing note interrogate how different impact-oriented agribusiness funds combine public and private capital to build a more inclusive agricultural market.'
//     },
//     {
//         id: '14',
//         category: 'Financial Service Providers',
//         link: '/',
//         title: 'Financial inclusion fit to size: Customizing digital credit for smallholders in Tanzania',
//         copy: 'This briefing note explores the causes of low uptake in digital credit for smallholders to better understand how we can develop concrete product solutions to jump-start adoption of digital credit products by them.'    },
//     {
//         id: '13',
//         category: 'Capital Providers',
//         link: '/',
//         title: 'The Climate Conundrum: Financing smallholder productivity and resilience in the age of climate change',
//         copy: 'This briefing note explores the latest practices from the climate finance community and the agricultural finance community to understand how new combined models can boost returns and attract new investors.'
//     },
//     {
//         id: '12',
//         category: 'Capital Providers',
//         link: '/',
//         title: 'The fund manager perspective: Moving the needle on inclusive agribusiness investment',
//         copy: 'This briefing note interrogate how different impact-oriented agribusiness funds combine public and private capital to build a more inclusive agricultural market.'
//     },
//     {
//         id: '11',
//         category: 'Capital Providers',
//         link: '/',
//         title: 'The fund manager perspective: Moving the needle on inclusive agribusiness investment',
//         copy: 'This briefing note interrogate how different impact-oriented agribusiness funds combine public and private capital to build a more inclusive agricultural market.'
//     },
//     {
//         id: '10',
//         category: 'Capital Providers',
//         link: '/',
//         title: 'The fund manager perspective: Moving the needle on inclusive agribusiness investment',
//         copy: 'This briefing note interrogate how different impact-oriented agribusiness funds combine public and private capital to build a more inclusive agricultural market.'
//     },
//     {
//         id: '9',
//         category: 'Capital Providers',
//         link: '/',
//         title: 'The fund manager perspective: Moving the needle on inclusive agribusiness investment',
//         copy: 'This briefing note interrogate how different impact-oriented agribusiness funds combine public and private capital to build a more inclusive agricultural market.'
//     },
//     {
//         id: '8',
//         category: 'Capital Providers',
//         link: '/',
//         title: 'The fund manager perspective: Moving the needle on inclusive agribusiness investment',
//         copy: 'This briefing note interrogate how different impact-oriented agribusiness funds combine public and private capital to build a more inclusive agricultural market.'
//     },
//     {
//         id: '7',
//         category: 'Capital Providers',
//         link: '/',
//         title: 'The fund manager perspective: Moving the needle on inclusive agribusiness investment',
//         copy: 'This briefing note interrogate how different impact-oriented agribusiness funds combine public and private capital to build a more inclusive agricultural market.'
//     },
//     {
//         id: '6',
//         category: 'Capital Providers',
//         link: '/',
//         title: 'The fund manager perspective: Moving the needle on inclusive agribusiness investment',
//         copy: 'This briefing note interrogate how different impact-oriented agribusiness funds combine public and private capital to build a more inclusive agricultural market.'
//     },
//     {
//         id: '5',
//         category: 'Capital Providers',
//         link: '/',
//         title: 'The fund manager perspective: Moving the needle on inclusive agribusiness investment',
//         copy: 'This briefing note interrogate how different impact-oriented agribusiness funds combine public and private capital to build a more inclusive agricultural market.'
//     },
//     {
//         id: '4',
//         category: 'Capital Providers',
//         link: '/',
//         title: 'The fund manager perspective: Moving the needle on inclusive agribusiness investment',
//         copy: 'This briefing note interrogate how different impact-oriented agribusiness funds combine public and private capital to build a more inclusive agricultural market.'
//     },
//     {
//         id: '3',
//         category: 'Capital Providers',
//         link: '/',
//         title: 'The fund manager perspective: Moving the needle on inclusive agribusiness investment',
//         copy: 'This briefing note interrogate how different impact-oriented agribusiness funds combine public and private capital to build a more inclusive agricultural market.'
//     },
//     {
//         id: '2',
//         category: 'Capital Providers',
//         link: '/',
//         title: 'The fund manager perspective: Moving the needle on inclusive agribusiness investment',
//         copy: 'This briefing note interrogate how different impact-oriented agribusiness funds combine public and private capital to build a more inclusive agricultural market.'
//     },
//     {
//         id: '1',
//         category: 'Capital Providers',
//         link: '/',
//         title: 'The fund manager perspective: Moving the needle on inclusive agribusiness investment',
//         copy: 'This briefing note interrogate how different impact-oriented agribusiness funds combine public and private capital to build a more inclusive agricultural market.'
//     }
// ]



// class ResearchPage extends Component {

//     constructor(props) {
//         super(props)
//         let postsToShow = 5
//         if (typeof window != `undefined`) {
//             postsToShow = window.postsToShow
//         }
//         this.state = {
//             showingMore: postsToShow > 5,
//             postsToShow: 5,
//         }
//     }

//     update() {
//         if (typeof window !== `undefined`) {
//             const distanceToBottom = document.documentElement.offsetHeight - (window.scrollY + window.innerHeight)
//             if (this.state.showingMore && distanceToBottom < 500) {
//                 this.setState({loading: true})
//                 setTimeout(function() {
//                     this.setState({ 
//                         postsToShow: this.state.postsToShow + 5, 
//                         loading: false 
//                     })
//                 }.bind(this), 800)
//             }
//         }
        
//         this.ticking = false
//     }

//     handleLoad = () => {
//         this.setState({loading: true, showingMore: true})
//         setTimeout(function() {
//             this.setState({
//                 postsToShow: this.state.postsToShow + 5,
//                 loading: false
//             })
//         }.bind(this), 800)
        
//     }

//     handleScroll = () => {
//         if (!this.ticking && this.state.postsToShow < researchData.length) {
//             this.ticking = true
//             requestAnimationFrame(() => this.update())
//         }
//     }

//     componentDidMount() {
//         document.addEventListener(`scroll`, this.handleScroll)
//         console.log(this.state.postsToShow)
//     }

//     componentWillUnmount() {
//         document.removeEventListener(`scroll`, this.handleScroll)
//         document.postsToShow = this.state.postsToShow
        
//     }
    
//     componentDidUpdate(researchData) {
//         console.log(this.state.postsToShow)
        
//     }
//     render () {
//         let props = this.props;

//         return (
            
            
//             <div style={props.transition && props.transition.style} className='research-page'>
                
//                 <PageHero heroImage={hero_page}>
//                     Our research and deep sector understanding informs our advisory and implementation work.
//                 </PageHero>

//                 <PageContent
//                     left={
//                         <div>
//                             <Link to='/resources'><button>Resources</button></Link>
//                         </div>
//                     }
//                     right={
//                         <div>
//                             <h3>ISF’s role as an intermediary and advisory group that facilitates partnerships is informed by the landmark research published in Inflection Point. </h3>
//                             <p>By understanding the broader ecosystem around smallholder finance and rural enterprises, ISF identifies specific roles and leverage points for stakeholders at all stages of growth and development throughout the smallholder ecosystem. </p>
//                         </div>
//                     } 
//                 />
//                 <PageAltContent title='Our Research'>
                    
//                         {chunk(researchData.slice(0, this.state.postsToShow), 5).map((chunk, i) =>  {
//                             return (
//                                 <div key={i} id={`chunk-${i}`}>
//                                     {chunk.map(research => (
//                                         <Reveal key={research.id} effect='fadeInUp'>
//                                             <ResearchBriefing 
//                                                 id={research.id}
//                                                 category={research.category}
//                                                 title={research.title}
//                                                 copy={research.copy}
//                                                 link={research.link}
//                                             />
//                                         </Reveal>
//                                     ))}
                                    
//                                 </div>
//                             )
//                         })}

//                         {!this.state.showingMore && (
//                             <button className='load-more' onClick={this.handleLoad}>
//                                 Load More
//                             </button>
//                         )}

//                         {this.state.postsToShow === researchData.length ? (
//                                 ''
//                             ) : (
//                                 this.state.loading ? (
//                                     // <h3 className='text-center'>Loading...</h3>
//                                     <div className="spinner">
//                                         <div className="bounce1"></div>
//                                         <div className="bounce2"></div>
//                                         <div className="bounce3"></div>
//                                     </div>
//                                 ) : ('')
//                         )}
                        
                    
                    
//                 </PageAltContent>
//                 <PageCTA>
//                     <p>Want to learn more?</p>
//                     <p><Link to='/contact'>Contact us</Link> or sign up for our <Link to='/contact'>newsletter.</Link></p>
                    
//                 </PageCTA>
//             </div>
//         )
//     }
// }

// export default ResearchPage