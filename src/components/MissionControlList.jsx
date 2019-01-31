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

const heading = styled.text`
  position: center;
  padding: 50px;
`


const MissionControlList = ({ key, pic, title }) => (
  <Card>
    <Img css={{border: '2px solid yellow', height: '200px', width: '200px', borderRadius: '50%', align: 'center', left: '50px'}} fluid={pic} />
    <heading>{title}</heading>
  </Card>
);

export default MissionControlList;

