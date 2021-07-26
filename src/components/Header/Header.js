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
        <Col xs={12} sm={12} md={6} lg={6} xl={7} xxl={8}>
  
            <h2 className={classes.logo}>
            <Link to="/" className={classes.link}>
               Evocative U
               </Link>
            </h2>
            <p>
                (ee-vok'-uh-tiv) Bringing strong images, memories, or feelings to mind
            </p> 
      
            </Col>      
<Col Col xs={12} sm={12} md={6} lg={6} xl={5} xxl={4}>

          <Bio />
          </Col>  
    
      </Row>
      <Row>
        <Col>
        <nav className={classes.navbar}>

<Link to="/blog" className={classes.link}>
  Blog
</Link>
<Link to="/artplaylists" className={classes.link}>
  Art Playlists
</Link>
</nav>
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
