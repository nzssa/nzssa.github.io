import React from 'react';
import styled from 'react-emotion';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const Wrapper = styled.header`
  background: #000000;;
  height: 600px;
  top: 60px;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    height: 400px;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: 375px;
  }
  position: relative;
  overflow: hidden;
  margin: 4rem;
`;

const Text = styled.div`
  color: ${props => props.theme.colors.white.base};
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: ${props => props.theme.layout.base};
  padding: 0 0 0 0;
  margin-bottom: 3rem;
  align-items: center;
  float: right;
`;

const Subtitle = styled.p`
  // position: relative;
  width: 100%;
  color: ${props => props.theme.colors.white.base};
  z-index: 2;
  text-align: right;
`;

const HomeHeader = ({ children, title, date, cover }) => (
  <Wrapper>
    <Img css={{ zIndex: '-1' }} fluid={cover || {} || [] || ''} />
    <Text>
      <h1
        css={{
          fontSize: '4rem',
          fontWeight: 'bold',
          zIndex: '2',
          textAlign: 'right',
          paddingLeft: '0'
        }}
      >
        {title}
      </h1>

      <h3>{date}</h3>

      {children && (
        <Subtitle css={{ fontSize: '30px', fontWeight: 'light' }}>
          {children}
        </Subtitle>
      )}
    </Text>
  </Wrapper>
);

export default HomeHeader;

HomeHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  cover: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

HomeHeader.defaultProps = {
  children: false,
  cover: false,
  date: false,
  title: false,
};
