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

const Image = styled.img`
  vertical-align: bottom
`


const MissionControlList = ({ key, pic, title }) => (
  <Card>
    <h1>{title}</h1>
    <Img fluid={pic} css={{border: '2px blue'}}/>
  </Card>
);

export default MissionControlList;
