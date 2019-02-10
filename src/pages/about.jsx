import React from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const Text = styled.div`
    margin: 2rem 10rem;
`;

const DesignText = styled.text`
  font-family: 'Rubik', sans-serif;
  font-weight: bold;
  font-size: 64px;
`;

const EmphasisBlue = styled.text`
  font-family: 'Rubik', sans-serif;
  font-weight: bold;
  font-size: 30px;
  color: #69BACC;
`;

const EmphasisYellow = styled.text`
  font-family: 'Rubik', sans-serif;
  font-weight: bold;
  font-size: 30px;
  color: #F8E074;
`;

const About = center => (
  <Layout>
    <Helmet title={'About Page'} />
    <Header title="About Page">Gatsby Tutorial Starter</Header>
    <Container center={center}>
        <DesignText>
          OUR PURPOSE
        </DesignText>
        <br />
        <h3>
          To <EmphasisBlue>empower</EmphasisBlue> and <EmphasisBlue>inspire</EmphasisBlue> students to realise their potential to contribute to the future of the space industry.
        </h3>
        <br />
        <h3>
          This involves keeping their <EmphasisYellow>passion</EmphasisYellow> for all things space related alive, connecting them with industry professionals, and surrounding them with positive, like-minded people who challenge each other to explore their abilities in space related subjects.
        </h3>
    </Container>
  </Layout>
);

export default About;

Container.propTypes = {
  center: PropTypes.object,
};
