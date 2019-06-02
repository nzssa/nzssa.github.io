import React from 'react';
import styled from 'react-emotion';
import { Container } from 'layouts';
import Img from 'gatsby-image';
import theme from '../../config/theme';
import { HomeHeader, Header, PostList } from 'components';
import { Link } from 'gatsby';

const Wrapper = styled.article`
  margin: 0 3rem;
`;

const Card = styled.div`
  box-shadow: ${theme.shadow.navbar};
`;

const HeadingName = styled.h2`
  text-align: center;
  padding-top: 30px;
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  margin: 10px;
  font-family: 'Open Sans', sans-serif;
  transition: all ${props => props.theme.transitions.default.duration};
  &:hover {
    color: ${props => props.theme.colors.primary.base};
  }
`;

const HeadingPosition = styled.h4`
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
  color: #fff !important;
`;

const Information = styled.div`
  h1 {
    font-size: 2rem;
    display: inline-block;
    color: ${props => props.theme.colors.white.base};
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

const TeamList = ({ key, pic, title, name, excerpt, link }) => (
  <Card>
    <Img
      css={{
        height: '200px',
        width: '200px',
        borderRadius: '50%',
        align: 'center',
        left: '100px',
      }}
      fluid={pic}
    />
    <a href={link}>
      <HeadingName css={{ fontWeight: 'bold' }}>{name}</HeadingName>
    </a>
    <HeadingPosition>{title}</HeadingPosition>
  </Card>
);

export default TeamList;
