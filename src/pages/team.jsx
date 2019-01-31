import React from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import theme from '../../config/theme';
import { graphql } from 'gatsby';
import MissionControlList from '../components/MissionControlList';
import LaunchTeamList from '../components/LaunchTeamList';
import ChristchurchList from '../components/ChristchurchList';
import WellingtonList from '../components/WellingtonList';

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

const Team = () => {
  const { edges } = console.log({missionControl: {}, wellington: {}});
  return (
    <Layout>
      <Helmet title={'Team Page'}/>
      <Header title="Our Team">Gatsby Tutorial Starter</Header>
      {edges.map(({ node }) => (
        <MissionControlList
          key={node.id}
          title={node.frontmatter.title}
          cover={node.frontmatter.cover.childImageSharp.fluid}
        />
      ))}
      {edges.map(({ node }) => (
        <LaunchTeamList
          key={node.id}
          cover={node.frontmatter.cover.childImageSharp.fluid}
        />
      ))}
      {edges.map(({ node }) => (
        <ChristchurchList
          key={node.id}
          cover={node.frontmatter.cover.childImageSharp.fluid}
        />
      ))}
      {edges.map(({ node }) => (
        <WellingtonList
          key={node.id}
          cover={node.frontmatter.cover.childImageSharp.fluid}
        />
      ))}

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
};

export default Team;

Container.propTypes = {
  center: PropTypes.object,
};

export const query = graphql`

query teams {
  missionControl: allMarkdownRemark(filter: {fileAbsolutePath: { regex: "/(/content/members/missionControl)/.*\\\\.md$/" }}) {
    edges {
      node {
            ...memberFields
      }
    }
  }
  wellington: allMarkdownRemark(filter: {fileAbsolutePath: { regex: "/(/content/members/wellington)/.*\\\\.md$/" }}) {
    edges {
      node {
            ...memberFields
      }
    }
  }
}


fragment memberFields on MarkdownRemark {
  id
  frontmatter {
    title
    cover {
      childImageSharp {
        fluid(
          maxWidth: 1000
          quality: 90
          traceSVG: { color: "#2B2B2F" }
        ) {
          base64
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
          presentationWidth
          presentationHeight
        }
      }
    }
  }
} 
`;
