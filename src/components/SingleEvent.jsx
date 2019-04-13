import React from 'react';
import styled from 'react-emotion';
import { Link } from 'gatsby';
import { Container } from 'layouts';
import PropTypes from 'prop-types';

const Wrapper = styled.article`
  margin: 2rem 1rem;
  border-radius: 10px;
  padding: 1rem;
  padding-top: 0.5rem;
  box-shadow: ${props => props.theme.shadow.card};
  border-left: 15px solid;
`;

const EventTitle = styled.div`
  margin: 0;
  color: #000;
  display: block;
`;

const EventLocation = styled.p`
  display: inline-block;
  float: right;
  color: #000;
  margin: auto 0;
  font-style: italic;
`;

const Excerpt = styled.p`
  margin: 0;
  color: #000;
`;

const Date = styled.p`
  margin: 0;
  font-weight: bold;
  color: #000;
`;

const EventLink = styled.a`
  color: ${props => props.theme.colors.black.blue};
  transition: color 0.2s;
  font-weight: bold;
  font-size: 1.5rem;
  &:hover {
    color: ${props => props.theme.colors.primary.base};
  }
`;
const SingleEvent = ({ title, date, excerpt, colour, path, location }) => (
  <Link to={path}>
    <Wrapper css={{ borderColor: colour, backgroundColor: '#fff' }}>
      <EventTitle>
        <EventLink>{title}</EventLink>

        <EventLocation>{location}</EventLocation>
      </EventTitle>
      <Date>{date}</Date>
      <Excerpt>{excerpt}</Excerpt>
    </Wrapper>
  </Link>
);

export default SingleEvent;

SingleEvent.propTypes = {
  excerpt: PropTypes.string,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array,
  location: PropTypes.string,
};
