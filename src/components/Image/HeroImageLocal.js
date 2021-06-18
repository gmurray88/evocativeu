import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"


export const HeroImageLocal = ({ src, dName }) => {
    const { allImageSharp } = useStaticQuery(
        graphql`
        query {
          allImageSharp {
            edges {
              node {
                gatsbyImageData (
                  layout: CONSTRAINED
                )
                fluid{
                  originalName
                }
              }
             }
            }
          }

        `,
      );

      const feimage = allImageSharp.edges.find(
        edge => edge.node.fluid.originalName === src
      );
    
   return(
      <GatsbyImage image={feimage.node.gatsbyImageData} alt="" className={dName} />
   )
    };
    
HeroImageLocal.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default HeroImageLocal;
