import React from 'react';
import { graphql } from 'gatsby';

// boostrap stuff
import { Col, Container, Row } from 'react-bootstrap';
import { StaticImage } from "gatsby-plugin-image"
import { Layout, SEO } from '../components';


import * as classes from './Home.module.css'

class IndexPage extends React.Component {
  render() {

    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

        <Container fluid className={classes.about}>
        <Row>
            <Col>

            </Col>
          </Row>
          <Row>
            <Col >
              <h2>ee-vok'-uh-tiv</h2>
              <p>
                Bringing strong images, memories, or feelings to mind
            </p>
              <p>
                Art For Art's Sake
            </p>
            </Col>
          </Row>

          <Row>
            <Col>

              <StaticImage src="../images/SohoNeon.jpg" alt="Soho Neon" />
            </Col>
          </Row>

        </Container>

      </Layout>
    )
  }
}

export default IndexPage;
