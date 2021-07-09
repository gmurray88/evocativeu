import * as React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from 'gatsby'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../../styles/carousel.css';

const MilanWorldFairTree2015SlideShow = () => {
  const { allFile } = useStaticQuery(
    graphql`
    query {
        allFile(
            filter: {relativeDirectory: {eq: "slideshows/milan-world-fair-tree-2015"}}
            sort: {fields: name, order: ASC}
            ) {
              edges {
                node {
                  childImageSharp {
                    gatsbyImageData (
                      placeholder: BLURRED
                   ) 
                    fields {
                      exif {
                        raw {
                        image {
                          ImageDescription
                        }
                       }
                     }
                    }
                  }
              }
            }
          }
        }
      `,
  )
  return (
    <div>
      <Carousel
        showArrows={true}
        showThumbs={false}
      >
        {allFile.edges.map(({ node }) => (
    
          <div>
             <GatsbyImage image={node.childImageSharp.gatsbyImageData} alt=""   style={{ marginLeft: "auto", marginRight: "auto", maxHeight: "80vh", maxWidth: `calc(80vh * ((${node.childImageSharp.gatsbyImageData.width}) / (${node.childImageSharp.gatsbyImageData.height})))`  }}/>
                 <p>
              {node.childImageSharp.fields.exif.raw.image.ImageDescription}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  )
}
export default MilanWorldFairTree2015SlideShow;
