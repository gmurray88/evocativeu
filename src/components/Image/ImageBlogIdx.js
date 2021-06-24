import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"


export const ImageBlogIdxS3 = ({ src, dName }) => {
    const { allS3Object } = useStaticQuery(
        graphql`
        query { 
          allS3Object {
         edges {
            node {
              Key
              localFile {
                childImageSharp {
                  gatsbyImageData (
                    placeholder: BLURRED
                )
                }
              }
            }
          }
        }
      }
   
              `,
      );

      const feimage = allS3Object.edges.find(
        edge => edge.node.Key.includes(src)
      );
    
      if (!feimage) {
        return null;
      }
    
      return (
             <GatsbyImage image={feimage.node.localFile.childImageSharp.gatsbyImageData} alt={src}  className={dName}/>
   
      )
};

ImageBlogIdxS3.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default ImageBlogIdxS3;