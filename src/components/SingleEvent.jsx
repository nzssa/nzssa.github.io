import React from 'react';
import styled from 'react-emotion';
import { Link } from 'gatsby';
import { Container } from 'layouts';
import PropTypes from 'prop-types';

const Wrapper = styled.article`
  margin: 2rem 1rem;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: ${props => props.theme.shadow.card};
  border-left: 15px solid #69BACC;
`;


const EventTitle = styled.h2`
  margin: 0;
`;

const Excerpt = styled.p`
  margin: 0;
`;

const Date = styled.p`
  margin: 0;
  font-weight: bold;
`;

const SingleEvent = ({ title, date, excerpt }) => (
  <Wrapper>

    <EventTitle>{title}</EventTitle>
    <Date>{date}</Date>
    <Excerpt>{excerpt}</Excerpt>
  </Wrapper>
);

export default SingleEvent;

SingleEvent.propTypes = {
  excerpt: PropTypes.string,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array,
};
