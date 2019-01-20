import React from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const Text = styled.div`
    margin: 2rem 10rem;
`;


const Contact = center => (
  <Layout>
    <Helmet title={'Contact Page'} />
    <Header title="Contact us">Gatsby Tutorial Starter</Header>
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </Layout>
);

export default Contact;

Container.propTypes = {
  center: PropTypes.object,
};
