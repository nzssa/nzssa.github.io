import React from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import { withFormik } from 'formik';
import Yup from 'yup';


const Text = styled.div`
    margin: 2rem 10rem;
`;


const Contact = center => (
  <Layout>
    <Helmet title={'Contact Page'} />
    <Header title="Contact us">Gatsby Tutorial Starter</Header>
    <NameForm css={{border: '2px solid blue', height: '75%', fitContent: '40%', display: 'inline-block', width: '50px'}}></NameForm>
  </Layout>
);

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form export ={this.handleSubmit}>
        <label>
          Name:
          <input css={{border: '2px solid blue'}} type="text" value={this.state.name} onChange={this.handleChange} />
        </label><br />
        <label>
          Email:
          <input type="text" value={this.state.email} onChange={this.handleChange} />
        </label><br />
        <label>
          Message:
          <textarea css={{height: '200px', width: '400px'}} value={this.state.message} onChange={this.handleChange} />
        </label><br />
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default Contact;

Container.propTypes = {
  center: PropTypes.object,
};
