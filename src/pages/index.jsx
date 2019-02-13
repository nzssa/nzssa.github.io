import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import { HomeHeader, Header, PostList } from 'components';
import { Layout } from 'layouts';
import backpackGirl from '../../static/backpackGirl.svg';
import stars from '../../static/stars.svg';

const PostWrapper = styled.div`
  top: 600px;
  background: ${props => props.theme.colors.black.base};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  place-content: space-between space-evenly;
  margin: 4rem 4rem 1rem 4rem;
  @media (max-width: 1000px) {
    margin: 4rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 4rem 1rem 1rem 1rem;
  }
`;

const Image = styled.img`
  position: absolute;
  left: 500px;
  top: -140px;
  z-index: 3;
  background-repeat: repeat-x;
  background-image: url('../../static/stars.svg');
`;

const Index = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Image
        src={stars}
        styles={'background-color: #000000'}
        alt={'stars'}
        height={'400px'}
        width={'400px'}
        vspace="0"
      />
      <img
        src={backpackGirl}
        styles={'background-color: #ffffff'}
        alt={'backpackGirl'}
        height={'600px'}
        align="left"
      />
      <Helmet title={'Home Page'} />
      <HomeHeader title="New Zealand Students' Space Association">
        Be bold. Have fun. Build a better world.
      </HomeHeader>
      <PostWrapper>
        {edges.map(({ node }) => (
          <PostList
            key={node.id}
            cover={node.frontmatter.cover.childImageSharp.fluid}
            path={node.frontmatter.path}
            title={node.frontmatter.title}
            author={node.frontmatter.author}
            date={node.frontmatter.date}
            excerpt={node.excerpt}
          />
        ))}
      </PostWrapper>
    </Layout>
  );
};

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string,
            frontmatter: PropTypes.shape({
              cover: PropTypes.object.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              tags: PropTypes.array,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 6
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/(/content/events)/.*\\.md$/" } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 75)
          frontmatter {
            title
            author
            path
            tags
            date(formatString: "MM.DD.YYYY")
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  quality: 90
                  traceSVG: { color: "#2B2B2F" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
