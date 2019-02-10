import React from 'react';
import { Link } from 'gatsby';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Layout, Container } from 'layouts';
import { Header } from 'components';
import config from '../../config/site';

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.white.light};
  padding: 5px 10px;
  border: solid 1px #fff;
  border-radius: 20px;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  &:hover {
    color: ${props => props.theme.colors.black.blue};
    background: ${props => props.theme.colors.white.light};
  }
`;

const Information = styled.div`
  text-align: center;
  font-family: ${props => props.theme.fontFamily.body};
  h1 {
    font-size: 2rem;
    margin-bottom: 1.25rem;
  }
`;

const PostLink = styled.h3`
  display: table;
  font-weight: normal;
  :hover {
    font-weight: bold;
  }
`;

const Tag = ({ pageContext }) => {
  console.log(pageContext);
  const { posts, tagName } = pageContext;
  const upperTag = tagName.charAt(0).toUpperCase() + tagName.slice(1);
  return (
    <Layout>
      <Helmet title={`${tagName} | ${config.siteTitle}`} />
      <Header title={upperTag}>
        <StyledLink to="/tags">All Tags</StyledLink>
      </Header>
      <Container>
        <Information>
          {posts.map((post, index) => (
            <Link key={index} to={post.frontmatter.path}>
              <PostLink>{post.frontmatter.title}</PostLink>
            </Link>
          ))}
        </Information>
      </Container>
    </Layout>
  );
};

export default Tag;

Tag.propTypes = {
  pageContext: PropTypes.shape({
    posts: PropTypes.array,
    tagname: PropTypes.string,
  }),
};
