import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as classes from './Image.module.css';

const ImageS3 = ({ src, ...rest }) => {
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
                layout: CONSTRAINED
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
    edge => edge.node.Key === src
  );

  if (!feimage) {
    return null;
  }

  return (
    <div className={classes.container}>
         <GatsbyImage image={feimage.node.localFile.childImageSharp.gatsbyImageData} alt=""  style={{ marginLeft: "auto", marginRight: "auto", maxHeight: "80vh", maxWidth: `calc(80vh * ((${feimage.node.localFile.childImageSharp.gatsbyImageData.width}) / (${feimage.node.localFile.childImageSharp.gatsbyImageData.height})))`  }}/>
       
    </div>
  )
};

ImageS3.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,

};

export default ImageS3;
