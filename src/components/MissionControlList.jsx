import React from 'react';
import styled from 'react-emotion';
import { Container } from 'layouts';
import Img from 'gatsby-image';

const Wrapper = styled.article`
  margin: 0 3rem;
`;

const MissionControlList = ({ id, cover, title }) => (
  <Container>
    <Wrapper>
      <p>Id is: {id}</p>
      <h1>{title}</h1>
      <Img fluid={cover} />
    </Wrapper>
  </Container>
);

export default MissionControlList;
