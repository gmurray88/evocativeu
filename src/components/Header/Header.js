import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Bio } from '../Bio';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import * as classes from './Header.module.css';

const Header = ({ siteTitle }) => (
  <div className={classes.background}>
    <Container fluid >
      <Row>
        <Col>
          <header className={classes.header}>
            <h1 className={classes.logo}>
              <Link to="/">
                  Evocative U
              </Link>
          </h1>
            <p>
                (ee-vok'-uh-tiv) Bringing strong images, memories, or feelings to mind
            </p> 
      
             <nav className={classes.navbar}>
              <Link to="/blog" className={classes.link}>
                Blog
              </Link>
              <Link to="/artplaylists" className={classes.link}>
                Art Playlists
              </Link>
            </nav>
          </header>
        </Col>
        <Col  xs={4} sm={4} md={4} lg={4} xl={4}>  
            <Bio />
          </Col>
    
      </Row>
    </Container>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
