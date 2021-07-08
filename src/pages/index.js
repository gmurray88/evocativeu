import React from 'react';
import { graphql, Link } from 'gatsby';

// boostrap stuff
import { Col, Container, Row } from 'react-bootstrap';
import { StaticImage } from "gatsby-plugin-image"
import { Layout, SEO, Image } from '../components';



import * as classes from './Home.module.css'

class IndexPage extends React.Component {
  render() {

    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

        <Container fluid className={classes.about}>
          <Row>
   
            <Col >
              <h2></h2>
              <p>
                (ee-vok'-uh-tiv) Bringing strong images, memories, or feelings to mind
            </p>
              <p>
                Art For Art's Sake
            </p>
            </Col>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>  
            <Link to="/community" >
            <StaticImage
        style={{ marginLeft: "auto", marginRight: "auto", Height: "70px", Width: "70px", borderRadius: "50%" }}
        layout="fixed"
        src="../images/IMG_2992.JPG"
        width={70}
        height={70}
        quality={95}
        alt="Glenn Murray"
      />
              </Link>
              </Col>
          </Row>

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
