import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import moment from 'moment';
import { Col, Row } from 'react-bootstrap';

import slugify from '../../utils/slugify';
import { ImageBlogIdx } from '../Image';

import * as classes from './BlogPostItem.module.css';

const BlogPostItem = ({ post, feature = false }) => {
  const { date, coverImage, subtitle, title } = post.frontmatter;
  const dateDisplay = date && (
    <span className={classes.date}>
      {moment(new Date(date)).format('MMM D, YYYY')}
    </span>
  );
  
  return (
    <Col xs={12} sm={12} md={feature ? 12 : 6} lg={feature ? 12 : 4}>
      <Link to={`/blog/${slugify(title)}`} className={classes.container}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={feature ? 8 : 12}>
          
            <ImageBlogIdx
              src={coverImage}
              dName={
                feature ? classes.featureImageContainer : classes.imageContainer
              }
            />
          </Col>
          <Col>
            <main>
              <h2 className={classes.title}>{title}</h2>
              <p className={classes.subtitle}>{subtitle}</p>
              <p> {dateDisplay}</p>
            </main>
          </Col>
        </Row>
      </Link>
    </Col>
  );
};

BlogPostItem.propTypes = {
  post: PropTypes.shape({}),
  feature: PropTypes.bool,
};

export default BlogPostItem;

