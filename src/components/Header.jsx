import React from 'react';
import styled from 'react-emotion';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import starHeader from '../../static/black-stars-header.png';
//import starHeader from '../../static/stars.svg'

const Wrapper = styled.header`
  // background-image: url('../../static/stars.svg');
  // background-position: center;
  // background-size: cover;
  // background: ${props => props.theme.gradient.rightToLeft};
  object-fit: cover;
  object-position: 50% 50%;
  height: 300px;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    height: 200px;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: 150px;
  }
  position: relative;
  overflow: hidden;
`;

const Text = styled.div`
  color: ${props => props.theme.colors.white.base};
  background-color: #000000;
  z-index: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  max-width: ${props => props.theme.layout.base};
  padding: 0 2rem;
  margin-bottom: 3rem;
  align-items: center;
`;

const Subtitle = styled.p`
  max-width: 650px;
  color: ${props => props.theme.colors.white.light};
`;

const Header = ({ children, title, date, cover }) => (
  <Wrapper>
    {/*<Img fluid={cover || {} || [] || ''} />*/}
    {/*<img src={starHeader} alt={"black star header"}*/}
    {/*css={{width: '100%', top: '-100px', position: 'relative'}}*/}
    <img
      src={starHeader}
      alt={'black star header'}
      css={{ width: '35%', top: '30px', position: 'relative', zIndex: '-1' }}
    />
    <img
      src={starHeader}
      alt={'black star header'}
      css={{
        width: '35%',
        top: '30px',
        position: 'absolute',
        transform: 'scaleX(-1)',
        right: '0px',
        zIndex: '-1',
      }}
    />
    <Text>
      {/*<br />*/}
      {/*<br />*/}
      <h1 css={{ fontSize: '3rem', zIndex: 100 }}>{title}</h1>
      <hr css={{ width: '300px', border: '0.5px solid white' }} />
      <h3>{date}</h3>

      {children && <Subtitle>{children}</Subtitle>}
    </Text>
  </Wrapper>
);

export default Header;

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  cover: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

Header.defaultProps = {
  children: false,
  cover: false,
  date: false,
  title: false,
};
