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
const TextLink = styled.text`
  text-align: center;
`


const MissionControlList = ({ key, pic, title, name, excerpt }) => (
  <Card>
    <Img css={{height: '200px', width: '200px', borderRadius: '50%', align: 'center', left: '100px'}} fluid={pic} />
    <HeadingName  css={{fontWeight: 'bold'}}>{name}</HeadingName>
    <HeadingPosition>{title}</HeadingPosition>
    <TextLink>
      <a css={{align: 'center'}} href={excerpt}>LinkedIn</a>
    </TextLink>
  </Card>
);

export default MissionControlList;

