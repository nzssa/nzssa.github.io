import React from 'react';
import styled from 'react-emotion';
import { Container } from 'layouts';
import Img from 'gatsby-image';
import theme from '../../config/theme';
import { HomeHeader, Header, PostList } from 'components';

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
`

const HeadingPosition = styled.h4`
  text-align: center;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
`



const WellingtonList = ({ key, pic, title, name, excerpt, link }) => (
  <Card>
    <Img css={{height: '200px', width: '200px', borderRadius: '50%', align: 'center', left: '100px'}} fluid={pic} />
    <HeadingName  css={{fontWeight: 'bold'}}><a css={{color: 'black'}} href={link}>{name}</a></HeadingName>
    <HeadingPosition>{title}</HeadingPosition>
  </Card>
);

export default WellingtonList;

