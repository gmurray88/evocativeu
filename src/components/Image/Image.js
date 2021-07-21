import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage} from "gatsby-plugin-image"

import * as classes from './Image.module.css';

const Image = ({ src }) => {
  const { allImageSharp } = useStaticQuery(
    graphql`
    query {
      allImageSharp {
        edges {
          node {
            original {
              src
            }
            gatsbyImageData (
              placeholder: BLURRED
            )

          }
         }
        }
      }

    `,
  );


  const feimage = allImageSharp.edges.find(
    edge => edge.node.original.src.includes(src)
  );

  if (!feimage) {
    return null;
  }

  return (
    <div className={classes.container}>
           <GatsbyImage image={feimage.node.gatsbyImageData} alt={src}  style={{ marginLeft: "auto", marginRight: "auto", display: "block", maxHeight: "80vh", maxWidth: `calc(80vh * ((${feimage.node.gatsbyImageData.width}) / (${feimage.node.gatsbyImageData.height})))`  }}/>
     </div>
  )
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,

};

export default Image;
