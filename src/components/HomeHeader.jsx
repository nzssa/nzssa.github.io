import React from 'react';
import styled from 'react-emotion';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const Wrapper = styled.header`
  background: ${props => props.theme.colors.white.base};
  height: 600px;
  top: 60px;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    height: 300px;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: 275px;
  }
  position: relative;
  overflow: hidden;
`;

const Text = styled.div`
  color: ${props => props.theme.colors.black.base};
  z-index: 1;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
  max-width: ${props => props.theme.layout.base};
  padding: 0 2rem;
  margin-bottom: 3rem;
  align-items: center;
`;

const Subtitle = styled.p`
  max-width: 650px;
  color: ${props => props.theme.colors.black.base};
  z-index: 2;
`;



const HomeHeader = ({ children, title, date, cover }) => (
  <Wrapper>
      <Img css={{zIndex: '-1'}} fluid={cover || {} || [] || ''}/>
      <Text>
        <h1 css={{fontSize: '70px', fontWeight: 'bold', zIndex: '2'}}>{title}</h1>

          <h3>{date}</h3>

        {children && <Subtitle css={{fontSize: '30px', fontWeight: 'light'}}>{children}</Subtitle>}
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
