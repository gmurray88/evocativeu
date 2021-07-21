import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"

export const ImageBlogIdx = ({ src, dName }) => {
  const { allImageSharp } = useStaticQuery(graphql`
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
  `);
  
  const feimage = allImageSharp.edges.find(
    edge => edge.node.original.src.includes(src)
  );

  if (!feimage) {
    return null;
  }

  return (
  <GatsbyImage image={feimage.node.gatsbyImageData} alt={src}  className={dName} />
  )
};

ImageBlogIdx.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default ImageBlogIdx;
