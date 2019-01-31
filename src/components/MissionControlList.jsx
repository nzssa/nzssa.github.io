import React from 'react';
import styled from 'react-emotion';
import { Container } from 'layouts';
import Img from 'gatsby-image';
import theme from '../../config/theme';

const Wrapper = styled.article`
  margin: 0 3rem;
`;


const Card = styled.div`
  border: 2px solid blue;
  box-shadow: ${theme.shadow.navbar};
`;

const HeadingName = styled.h2`
  text-align: center;
  padding-top: 30px;
  padding-left: 0px;
  padding-right: 0px;
`

const MissionControlList = ({ key, pic, title }) => (
  <Card>
    <Img css={{border: '2px solid yellow', height: '200px', width: '200px', borderRadius: '50%', align: 'center', left: '50px'}} fluid={pic} />
    <HeadingName>{title}</HeadingName>
  </Card>
);

export default MissionControlList;

