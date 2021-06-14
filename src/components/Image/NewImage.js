import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as classes from './Image.module.css';

const NewImage = ({ src, ...rest }) => {
  const { allFile } = useStaticQuery(
    graphql`
    query {
        allFile (
          filter: {relativeDirectory: {eq: "posts"}}
          ){
              edges {
                node {
                  childImageSharp {
                      fluid {
                        originalName
                      }
                      gatsbyImageData (
                        layout: CONSTRAINED
                    )
                    
                    }
                  }
                }
              }
            }
          `,
  );
  const feimage = allFile.edges.find(
    edge => edge.node.childImageSharp.fluid.originalName === src

  );
  if (!feimage) {
    return null;
  }

  return (
    <div className={classes.container}>
         <GatsbyImage image={feimage.node.childImageSharp.gatsbyImageData} alt=""  style={{ marginLeft: "auto", marginRight: "auto", maxHeight: "80vh", maxWidth: `calc(80vh * ((${feimage.node.childImageSharp.gatsbyImageData.width}) / (${feimage.node.childImageSharp.gatsbyImageData.height})))`  }}/>
       
    </div>
  )
};

NewImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,

};

export default NewImage;
