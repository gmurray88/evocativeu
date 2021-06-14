import * as React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from 'gatsby'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../../styles/carousel.css';


const NewMiami2019SlideShow = () => {
  const { allS3Object } = useStaticQuery(
    graphql`
    query {
      allS3Object(
            filter: {Key: {glob: "miami-2019/*"}}
            sort: {fields: Key, order: ASC}
            ) {
              edges {
                node {
                  Key
                  localFile {
                  childImageSharp {
                    gatsbyImageData (
                      layout: CONSTRAINED
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
            }
          `,
  )
  return (
    <div >
      <Carousel
        showArrows={true}
        showThumbs={false}
      >

        {allS3Object.edges.map(({ node }) => (
          <div >
            <GatsbyImage image={node.localFile.childImageSharp.gatsbyImageData} alt="" style={{ marginLeft: "auto", marginRight: "auto", maxHeight: "80vh", maxWidth: `calc(80vh * ((${node.localFile.childImageSharp.gatsbyImageData.width}) / (${node.localFile.childImageSharp.gatsbyImageData.height})))`  }}/>
            <p>
              {node.localFile.childImageSharp.fields.exif.raw.image.ImageDescription}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  )
}
export default NewMiami2019SlideShow;

