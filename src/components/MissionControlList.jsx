import React from 'react';
import styled from 'react-emotion';
import { Container } from 'layouts';
import Img from 'gatsby-image';

const Wrapper = styled.article`
  margin: 0 3rem;
`;

const MissionControlList = ({ key, pic, title }) => (
  <Container>
    <Wrapper>
      <h1>{title}</h1>
      <Img fluid={pic} />
    </Wrapper>
  </Container>
);

export default MissionControlList;
