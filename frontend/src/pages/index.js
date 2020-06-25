import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import SummitImage from '../components/summit-image'
import TeamPhoto1 from '../components/teamphoto1'
import TeamPhoto2 from '../components/teamphoto2'

function Byline(props) {
  if (props.byline) {
    // console.log('byline');
    return <h5>{props.byline}</h5>
  } else {
    return null
  }
}

const HomePage = ({ data }) => (
  <Layout>
      <div className="summit__backer shadow">

        {/* <div className="summit__backer--image--shadow"> */}
          <div className="summit__backer--image">
            <SummitImage />
              {/*
              Im not sure if I can do this with a single Image for small or if I need another one in the next grid down or can I place this in the right spot?
              for now I'll probably just do two seperate.
              */}
          </div>
        {/* </div> */}

        <section id="summit">

            <div className="summit__info"> {/* this has old naming and needs to be checked */}
                <h1>SPECIALIST WELDERS, SHEETMETAL ENGINEERS &amp; GENERAL FABRICATORS IN CHRISTCHURCH.</h1>
                <p>Our team of welders and engineers can tackle any welding or fabrication job. We specalise in TIG, MIG, ARC and resistance-Spot Welding. We can weld alloy, mild steel, stainless and much more. Our Fabricators can fold, stamp, punch, and cut to your requirements with our specialized machinery and experience.</p>
            </div>

            <div className="summit__about">
                <h2>We're Experienced Sheetmetal Engineers.</h2>
                <p>Priest Sheetmetal &amp; Plate Ltd is a family run business that has operated out of our 10 Barbour St address in Waltham, Christchurch for over 63 years. Let our experience guide you from design, manufacture, to assembly and installation of your fabrication project.</p>
                
                {/* small svg on top and bottom */}
                <svg title="summit__about__color--top" className="summit__about__color--top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 12" preserveAspectRatio="none">
                    <polygon fill="#D1D1D1" points="0,12 100,0 100,12"/>
                    {/* medium-gray fill */}
                </svg>

                <svg title="summit__about__color--bottom" className="summit__about__color--bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 12" preserveAspectRatio="none">
                    <polygon fill="#D1D1D1" points="0,0 100,0 0,12"/>
                </svg>

                {/* large svg on left and right */}
                <svg title="summit__about__color--left" className="summit__about__color--left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 100" preserveAspectRatio="none"> {/* guess and check numbers but this is quite right they should stretch to fill */}
                    <polygon fill="#D1D1D1" points="12,0 12,100 0,100"/>
                    {/* medium-gray fill */}
                </svg>

                <svg title="summit__about__color--right" className="summit__about__color--right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 100" preserveAspectRatio="none">
                    <polygon fill="#D1D1D1" points="0,0 0,100 12,0"/>
                </svg>
            </div>

            {/* Summit Videos */}
            <div className="summit__video"
                style={{
                    padding: '56.25% 0 0 0',
                    position: 'relative'
                }}>
                <iframe title="hero video 1" src={"https://player.vimeo.com/video/431997968?background=1"}style={{
                    position:'absolute',
                    top:'0',
                    left:'0',
                    width:'100%',
                    height:'100%',
                    // https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path
                    // guess and check on the numbers
                }} frameborder="0" allow="autoplay; fullscreen" allowfullscreen className="shadow"></iframe>
                {/* this will feel better with the box below once it gets the image behind */}
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
            {/* can this be compressed moved to the footer? */}
            
            <div className="summit__videobacker">
              <SummitImage /> {/* this is a secondary version of the image until I figure out some magic */}
            </div>

            <div className="summit__videobacker--color">{/* stay gold */}</div>


            {/* Im not sure if I can do this without multiloading images but seems like it should be possible if not tricky */}
            <div className="summit__team-photo_1"><TeamPhoto1 /></div>
            <div className="summit__team-photo_2"><TeamPhoto2 /></div>








            <div className="summit__contact">

                <div className="summit__contact--service summit__contact--phone"> {/* do I need phone? */}
                    <a href="tel:033669818" className="summit__contact--icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" title="phone" >
                            <path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z" />
                        </svg>
                    </a>

                    <a href="tel:033669818" className="summit__contact--text">
                        Call us today to discuss your project:&nbsp;<span className="summit__contact--text__underline">366 9818</span>
                    </a>
                    {/* purposley not using a <p> tag so I don't have the margins and this isn't really a paragraph */}
{/*                     <svg title="summit__about__color--bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 25">
                        <polygon fill="none" stroke="black" stroke-width="2" stroke-linecap="round" points="12,0 100,0 88,25 0,25"/>
                    </svg> */}
                    <div className="summit-contact--skew shadow">{/* stay gold */}</div>
                    {/* <div className="summit-contact--skew__border"> stay gold </div> */}
                </div>
            
                <div className="summit__contact--service summit__contact--email">
                    <a href="https://goo.gl/maps/EzF5epUkFxaEihtLA" className="summit__contact--icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" title="map" ><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" /><circle cx="12" cy="9" r="2.5" /></svg>
                    </a>

                    <a href="https://goo.gl/maps/EzF5epUkFxaEihtLA" className="summit__contact--text">
                        Find us at&nbsp;<span className="header-contact--text__underline">10 Barbour Street, Christchurch</span>
                    </a>
                    <div className="summit-contact--skew">{/* stay gold */}</div>
                    {/* <div className="summit-contact--skew__border"> stay gold </div> */}
                </div>{/* summit__contact--email */}
                
            </div>{/* summit__contact */}

        </section>
      </div>{/* .summit__backer */}
{/*
      This cant be outside as I want the image
<svg title="summit__about__color--bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 12">
          <polygon fill="#e6e6e6" points="0,0 100,0 0,12"/>
      </svg> */}

      {data.allStrapiService.edges.map(document => (
        <section className="tasks">
            <h4 className="tasks__title">
                <Link to={`/services/${document.node.slug}`}>
                    {document.node.title}
                </Link>
            </h4>
            
            <div className="tasks__background--upper shadow">{/* stay gold */}</div>

            <Link to={`/services/${document.node.slug}`} className="tasks__image shadow">
                <Img fluid={document.node.Cover.childImageSharp.fluid}  className="shadow"/>
                {/* alt={document.node.title} */}
            </Link>

            <div className="tasks__background--lower shadow">{/* stay gold */}</div>

            <div className="tasks__info">
                <Byline byline={document.node.byline} />
                <p>{document.node.Content}</p>
                <Link to={`/services/${document.node.slug}`}    className="tasks__more">
                    <span className="button hollow">More about {document.node.title}</span>
                </Link>
            </div>

            <hr className="tasks__divider" />
            <div className="tasks__divider--cross">{/* stay gold */}</div>

        </section>
      ))}

    <section id="map" className="">{/* bg-primary shadow-darker */}
      <div className="grid-container">
        <div className="grid-x">
          <div className="cell gp2-tb">
            <span className="iframe-100">
              <iframe title="google maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.9573440490253!2d172.6515813562169!3d-43.544931066056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d3189f0816bfbed%3A0xc483fb0bb523cec9!2s10+Barbour+St%2C+Waltham%2C+Christchurch+8011%2C+New+Zealand!5e0!3m2!1sen!2sus!4v1473280636797" width="1200" height="450" frameBorder="0" allowFullScreen className="lozad vimeo"></iframe>
            </span>
          </div>
        </div> {/* .grid-x */}
      </div> {/* .grid-container */}
    </section>

    <section id="testimonials">
      <div className="bg-light-gray">
        <h3>Testimonials</h3>
      </div>
      
      <div id="star"> {/* needed for grid */}
        <div className="bg-light-gray">{/* stay gold */}</div>
        <div className="bg-medium-gray">{/* stay gold */}</div>

        <div id="star-container">
          <svg title="star-1" className="star-1" viewBox="0 0 200 200"> {/* height="210" width="500" */}
            <polygon points="100,10 40,198 190,78 10,78 160,198"/> {/* width="100%" height="100%" */}
          </svg>

          <svg title="star-2" className="star-2" viewBox="0 0 200 200">
            <polygon points="100,10 40,198 190,78 10,78 160,198"  />
          </svg>
          <svg title="star-3" className="star-3" viewBox="0 0 200 200">
            <polygon points="100,10 40,198 190,78 10,78 160,198"  />
          </svg>
          <svg title="star-4" className="star-4" viewBox="0 0 200 200">
            <polygon points="100,10 40,198 190,78 10,78 160,198"  />
          </svg>
          <svg title="star-5" className="star-5" viewBox="0 0 200 200">
            <polygon points="100,10 40,198 190,78 10,78 160,198"  />
          </svg>

        </div> {/* #star-container */}
      </div> {/* #star */}


      <div id="quotes" className="bg-medium-gray">
        {data.allStrapiTestimonials.edges.map(document => (
            <blockquote id="quoted" className="bg-medium-gray">
              <p>{document.node.content}</p>
              <footer>{document.node.author}</footer>
            </blockquote>
        ))}
      </div>

    </section>

  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  query HomeQuery {
    allStrapiService (
      sort: {
        fields: [order]
        order: ASC
      } 
    ) {
      edges {
        node {
          id
          title
          byline
          Content
          Cover {
            childImageSharp {
              fluid(maxWidth: 960) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          slug
        }
      }
    }

    allStrapiSliderOnes {
      edges {
        node {
          id
          title
          sliderimage {
            childImageSharp {
              fluid(maxWidth: 960) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    
    allStrapiSliderTwos {
      edges {
        node {
          id
          title
          nextimage {
            childImageSharp {
              fluid(maxWidth: 960) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }

    allStrapiTestimonials {
      edges {
        node {
          stars
          content
          author
        }
      }
    }

  }
`