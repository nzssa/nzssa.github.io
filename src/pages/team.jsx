import React from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import theme from '../../config/theme';
import { graphql } from 'gatsby';

const Text = styled.div`
    margin: 2rem 10rem;
`;

const GridWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 300px 300px 300px;
  grid-template-rows: 400px 400px;
  grid-row-gap: 20px;
  border: 2px solid red;
  width: 75%;
  justify-content: space-around;
  align-content: space-around;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 90%;
    grid: 400px 400px 400px/ 300px 300px;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 95%;
    grid: repeat(6, 400px) / 300px;
  }
  max-width: ${props => props.theme.layout[props.type]};
  height: 100%;
`

const Card = styled.div`
  border: 2px solid blue;
  box-shadow: ${theme.shadow.navbar};
`

const Team = center => (
  <Layout>
    <Helmet title={'Team Page'} />
    <Header title="Our Team">Gatsby Tutorial Starter</Header>
    {/*<Container center={center}>*/}
      {/*<Text>*/}
        {/*<h3>*/}
          {/*If you would like to build this site completely from scratch, you go*/}
          {/*can go read the guide{' '}*/}
          {/*<a href="https://justinformentin.com/gatsby-v2-guide">here.</a>*/}
        {/*</h3>*/}
        {/*<br />*/}
        {/*<h3>*/}
          {/*Or you can watch the video{' '}*/}
          {/*<a href="https://youtube.com/#">on Youtube.</a>*/}
        {/*</h3>*/}
      {/*</Text>*/}
    {/*</Container>*/}
    <GridWrapper>
      <Card>
        
      </Card>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </GridWrapper>
  </Layout>
);

export default Team;

Container.propTypes = {
  center: PropTypes.object,
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {fileAbsolutePath: { regex: "/(/content/members)/.*\\.md$/" }}
    ) {
      edges {
        node {
          id
        }
      }
    }
  }
`;
