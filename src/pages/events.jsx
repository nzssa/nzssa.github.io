import React from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { Header, SingleEvent } from 'components';
import { Layout, Container } from 'layouts';
import { graphql } from 'gatsby';

const Text = styled.div`
  margin: 2rem 10rem;
`;

const HeaderTitle = styled.h1`
  margin: 0;
`;

const Events = ({ data }) => {
  console.log(data);
  const { edges } = data.allMarkdownRemark;
  console.log(edges);
  console.log(edges[0]);
  return (
    <Layout>
      <Helmet title={'Events'} />
      <Header title="Events"></Header>
      <Container>
        <HeaderTitle>Upcoming</HeaderTitle>
        {edges.map(({ node }) => (
          <SingleEvent
            key={node.id}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            excerpt={node.excerpt}
            colour={node.frontmatter.colour}
          />
        ))}
      </Container>
    </Layout>
  );
};

export default Events;

Events.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string,
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              colour: PropTypes.string.isRequired,
              tags: PropTypes.array,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

Container.propTypes = {
  center: PropTypes.object,
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(/content/events)/.*\\.md$/" } }
      sort: { order: ASC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
        excerpt(pruneLength: 200)
          frontmatter {
            title
            slug
            date
            colour
            published
            _PARENT
          }
        }
      }
    }
  }
`;
