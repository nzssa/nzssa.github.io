import React from 'react';
import styled from 'react-emotion';
import { Link } from 'gatsby';
import { Container } from 'layouts';

const Wrapper = styled.article`
  margin: 0 3rem;
`;
const Title = styled.h1`
  margin: 0;
`;
const Excerpt = styled.p`
margin: 0;
`


const SingleEvent = ({ key, title, date, excerpt }) => (
  <Container>
    <Wrapper>
      <Title>{title}</Title>
      <Excerpt>{excerpt}</Excerpt>
    </Wrapper>
  </Container>
);

export default SingleEvent;
