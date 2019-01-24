import React from 'react';
import styled from 'react-emotion';
import { Link } from 'gatsby';
import { Container } from 'layouts';

const Wrapper = styled.article`
  margin: 0 1rem;
`;
const Title = styled.h2`
  margin: 0;
`;
const Excerpt = styled.p`
margin: 0;
`
const Date = styled.p`
margin: 0;
font-weight: bold;
`


const SingleEvent = ({ key, title, date, excerpt }) => (
  <Container>
    <Wrapper>
      <Title>{title}</Title>
      <Date>{date}</Date>
      <Excerpt>{excerpt}</Excerpt>
    </Wrapper>
  </Container>
);

export default SingleEvent;
