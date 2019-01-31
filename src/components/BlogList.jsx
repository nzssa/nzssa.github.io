import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { TagsBlock } from 'components';
import { Container } from 'layouts';

const Wrapper = styled.article`
  margin: 0 3rem;
`;

const Image = styled.div`
  margin: auto;
  position: relative;
  box-shadow: ${props => props.theme.shadow.feature.small.default};
  transition: ${props => props.theme.transitions.boom.transition};
  border-radius: ${props => props.theme.borderRadius.default};
  min-height: 300px;
  img {
    border-radius: ${props => props.theme.borderRadius.default};
  }
  &:hover {
    box-shadow: ${props => props.theme.shadow.feature.small.hover};
    transform: scale(1.04);
  }
  a {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: ${props => props.theme.borderRadius.default};
    > div {
      position: static !important;
    }
    > div > div {
      position: static !important;
    }
    &:focus {
      outline: none;
      box-shadow: 0 0 0 5px ${props => props.theme.colors.primary.dark};
    }
  }
  flex-basis: 100%;
  max-width: 100%;
  width: 100%;
  @media (max-width: 800px) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 500px) {
    min-height: 200px;
  }
`;

const Information = styled.div`
  h1 {
    font-size: 2rem;
    display: inline-block;
    color: ${props => props.theme.colors.black.base};
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.primary.base};
    }
  }
  text-align: center;
  flex-basis: 100%;
  max-width: 100%;
  width: 100%;
  @media (max-width: 800px) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
  }
`;

const Date = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  color: ${props => props.theme.colors.black.lighter};
`;

const Byline = ({ author }) => (
  <p css={{ marginBottom: '0.5rem' }}>
    by <em>{author}</em>
  </p>
);

const Title = styled.h1`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

const BlogList = ({ path, cover, title, author, date, excerpt, tags }) => (
  <Container>
    <Wrapper>
      <Image>
        <Link to={path} title={title}>
          <Img fluid={cover} />
        </Link>
      </Image>
      <Information>
        <Link to={path}>
          <Title>{title}</Title>
        </Link>
        <Date>{date}</Date>
        <Byline author={author} />
        <p>{excerpt}</p>
        <TagsBlock list={tags} />
      </Information>
    </Wrapper>
  </Container>
);

export default BlogList;

Byline.propTypes = {
  author: PropTypes.string,
};

BlogList.propTypes = {
  cover: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  tags: PropTypes.array.isRequired,
};
