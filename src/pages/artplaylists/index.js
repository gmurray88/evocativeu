import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { StaticImage } from "gatsby-plugin-image"
import { Layout } from '../../components';
import * as classes from './ArtPlaylistsPage.module.css';

const ArtPlaylistsPage = () => (
  <Layout>
    <div className={classes.container}>
      <Container>
      <h1>Art Playlists</h1>
              <p>
                Create your own playlists of paintings from throughout the internet.
                Organize playlists by artists or themes. Choose from pre-compiled
                playlists. Share your playlists with others.
            </p>
              <p>
                View your playlists in virtual reality. Make your own museums.
                Bring every Picasso, Van Gogh or Caravaggio into a single exhibition hall.
            </p>
            <h6>
                Coming soon!
            </h6>
              <StaticImage src="../../images/artplaylists/ArtComposite.jpg" alt="Art Playlists" />
      

      </Container>
    </div>
  </Layout>
);

export default ArtPlaylistsPage;
