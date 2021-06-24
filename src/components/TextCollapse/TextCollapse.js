
import React from 'react';
import ReactTextCollapse from 'react-text-collapse';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import * as classes from './TextCollapse.module.css';

const TextCollapse = ({ src }) => {

  const TEXT_COLLAPSE_OPTIONS = {
    collapse: false,
    collapseText: '... show more',
    expandText: 'show less',
    minHeight: 70,
    maxHeight: 180,
    textStyle: {
      color: 'black',
      fontSize: '14px'
    }
  };

  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            original {
              src
            }
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
  `);
  const image = allImageSharp.edges.find(
    edge => edge.node.original.src.includes(src)
  );
  const desc = image.node.fields.exif.raw.image.ImageDescription.toString();
  if (desc.length > 500) {
    return (
      <div className={classes.container}>
        <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}>
          <p>
            {desc}
          </p>
        </ReactTextCollapse>
      </div>
    );
  } else {
    return (
      <div className={classes.container}>
        <p>
          {desc}
        </p>
      </div>
    );

  }

};

TextCollapse.propTypes = {
  src: PropTypes.string,
};

export default TextCollapse;

