import React from 'react';
import { graphql, Link } from 'gatsby';

// boostrap stuff
import { Col, Container, Row } from 'react-bootstrap';
import { Layout, SEO, Image} from '../components';

import * as classes from './Home.module.css'

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`evocativeu`, `gatsby`, `application`, `react`]} />
        <Container fluid className={classes.about}>
         <Row>
            <Col>
              <Image src="SohoNeon" alt="Soho Neon" />
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default IndexPage;
