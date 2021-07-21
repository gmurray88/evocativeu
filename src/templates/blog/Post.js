import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Location } from '@reach/router';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Container, Col, Row } from 'react-bootstrap';
import { HeroImage } from '../../components/Image';
import {
  Colophon,
  Layout,
  SEO,
} from '../../components';
import * as classes from './Post.module.css';

const Post = ({ data, pageContext }) => {
  const { post, coverImageUrl } = data;

  const { coverImage, title, subtitle, date } = post.frontmatter;
  const dateDisplay = date && (
    <span className={classes.date}>
      {moment(new Date(date)).format('MMM D, YYYY')}
    </span>
  );
  return (
    <Location>
      {({ location }) => {
        // get the base URL for this page from reach router, or fall back to
        // netlify provided URLs if that's missing
        // see docs for more info: https://www.netlify.com/docs/continuous-deployment/#environment-variables
        // or fall way the heck back to a hardcoded value
        const siteURLBase =
          location.origin ||
          process.env.DEPLOY_PRIME_URL ||
          process.env.DEPLOY_URL ||
          process.env.URL ||
          'https://evocativeu.com';

        return (
          <Layout>
           
 
              <Container fluid className={classes.coverImageContainer}>
                <Row noGutters>
                  <Col>
                    <HeroImage
                      src={coverImage}
                      dName={classes.coverImage}
                    />
                  </Col>
                </Row>
              </Container>
 
            <Container fluid className={classes.post}>
              <Row>
                <Col
                >
                  <div className={classes.metadata}>
                    <h2 className={classes.postTitle}>
                      {post.frontmatter.title}
                    </h2>
                    <p> {dateDisplay}</p>
                  </div>
                  <MDXRenderer>{post.body}</MDXRenderer>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Colophon />
                </Col>
              </Row>
            </Container>
          </Layout>
        );
      }}
    </Location>
  );
};

Post.propTypes = {
  data: PropTypes.shape({}),
  pageContext: PropTypes.shape({}),
};

export const query = graphql`
  query($id: String!) {
    post: mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        subtitle
        date
        coverImage
      }
    }

     }
`;

export default Post;
