import React from 'react';
import styled from 'react-emotion';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { Container } from 'layouts';

const Wrapper = styled.article`
  margin: 0 3rem;
`;

const WellingtonList = ({ key, pic, title }) => (
  <Container>
    <Wrapper>
      <h1>{title}</h1>
      <Img fluid={pic} />
    </Wrapper>
  </Container>
);

export default WellingtonList;
