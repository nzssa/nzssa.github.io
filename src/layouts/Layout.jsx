import React, { Fragment } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { injectGlobal } from 'react-emotion';
import PropTypes from 'prop-types';
import 'typeface-open-sans';
import 'typeface-candal';
import 'typeface-chivo';
import 'typeface-rubik';

import { SEO } from 'components';
import { NavBar, Footer } from 'layouts';
import theme from '../../config/theme';
import headroom from '../styles/headroom';

injectGlobal`

  *, *:before, *:after {
    box-sizing: inherit;
  }
  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  a {
    color: ${theme.colors.link};
    transition: color .5s;
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
    color: ${theme.colors.linkHover};
  }
  h1{
    font-family: ${theme.fontFamily.heading};
  }

  ${headroom}
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <SEO />
      <NavBar />
      {children}
      <Footer />
    </Fragment>
  </ThemeProvider>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};
