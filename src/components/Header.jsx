import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import starHeader from '../../static/black-stars-header.png';

const Wrapper = styled.header`
  object-fit: cover;
  object-position: 50% 50%;
  height: 200px;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    height: 150px;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: 100px;
  }
  position: relative;
  overflow: hidden;
`;

const Text = styled.div`
  color: ${props => props.theme.colors.white.base};
  background-color: #000000;
  z-index: 0;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  max-width: ${props => props.theme.layout.base};
  padding: 0 2rem;
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
      <h1
        css={{
          fontSize: '3rem',
          zIndex: 100,
          paddingBottom: '1rem',
          borderBottom: '2px solid white',
        }}
      >
        {title}
      </h1>
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
