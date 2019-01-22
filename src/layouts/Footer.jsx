import React from 'react';
import styled from 'react-emotion';

const Wrapper = styled.footer`
  position: relative;
  padding-top: 1rem;
  bottom: 0;
  // box-shadow: ${props => props.theme.shadow.footer};
  background: ${props => props.theme.colors.base};
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding-top: 7rem;
  }
`;

const Text = styled.div`
  margin: 0;
  padding-bottom: 1rem;
  text-align: center;
  color: ${props => props.theme.colors.black.light};
`;

const Footer = () => (
  <Wrapper>
    <Text>
      <span>© 2019 New Zealand Students' Space Association.</span>
    </Text>
  </Wrapper>
);
export default Footer;
