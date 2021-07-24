import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'gatsby';

import { OutboundLink } from 'gatsby-plugin-google-analytics';

import * as classes from './Footer.module.css';

import { GitHubIcon, TwitterIcon, RssIcon } from '../icons';

const Footer = () => (
  <footer className={classes.footer}>
    <Container>
      <Row>
        <Col lg={2}>
          <div className={classes.subtitle}>Contents</div>
          <ul className={classes.linkList}>
          <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/artplaylists">Art Playlists</Link>
            </li>
          </ul>
        </Col>
        <Col lg={3}>
          <div className={classes.subtitle}>Source Code</div>
          <ul className={classes.linkList}>
            <li>
              <GitHubIcon />{' '}
              <OutboundLink
                href="https://github.com/gmurray88/evocativeu"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </OutboundLink>
            </li>

          </ul>
        </Col>
        <Col lg={{ span: 3, offset: 3 }}>
          <ul className={classes.linkList}>
            <li>
              © {new Date().getFullYear()}
              {` EvocativeU`}
            </li>
            <li>
              {`Built with`}
              &nbsp;
              <OutboundLink
                href="https://www.gatsbyjs.org"
                target="_blank"
                rel="noreferrer noopener"
              >
                Gatsby
              </OutboundLink>
            </li>


          </ul>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
