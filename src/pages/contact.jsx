import React from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import christchurchLogo from '../../static/christchurchLogo.jpg';
import nationalLogo from '../../static/logo/white-logo.png';
import wellingtonLogo from '../../static/wellingtonLogo.png';
import theme from '../../config/theme';
import { FaFacebookSquare } from 'react-icons/fa';

const Text = styled.div`
  margin: 2rem 10rem;
`;

const GridWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 400px 400px 400px;
  grid-template-rows: 400px;
  grid-row-gap: 20px;
  width: 75%;
  justify-content: space-around;
  align-content: space-around;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 90%;
    grid: 400px 400px 400px/ 300px 300px;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 95%;
    grid: repeat(6, 400px) / 300px;
  }
  max-width: ${props => props.theme.layout[props.type]};
  height: 100%;
  padding-bottom: 80px;
`;

const Card = styled.div`
  box-shadow: ${theme.shadow.navbar};
`;

const HeadingName = styled.h2`
  text-align: center;
  padding-top: 30px;
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  margin: 10px;
  transition: all ${props => props.theme.transitions.default.duration};
  &:hover {
    color: ${props => props.theme.colors.primary.base};
  }
`;

const HeadingPosition = styled.h4`
  text-align: center;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
`;

const Information = styled.div`

  text-align: center;
  flex-basis: 100%;
  max-width: 100%;
  width: 100%;
  @media (max-width: 800px) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
  }
`;

const Logo = styled.img`
  align: center;
  margin-left: 120px;
`;

const Button = styled.button`
  background-color: #ffffff;
  color: black;
  padding: 15px 5px;
  align: center;
  display: inline-block;
  font-size: 20px;
  font-family: 'Rubik', sans-serif;
  margin: 2px 2px;
  cursor: pointer;
  border-radius: 25px;
  width: 50%;
  margin: auto;
  display: block;
`;

const ButtonText = styled.div`
    display: inline-block;
    font-family: 'Rubik', sans-serif;
    font-weight: bold;
    align: center;
  }
`;

const UnderlineText = styled.text`
  text-decoration: underline;
`;

const Line = styled.div`
  background-color: #ffffff;
  display: block;
  margin: auto;
  width: 50%;
  align: center;
  overflow: hidden;
  border-style: inset;
  border-width: 1px;
`;

const Contact = center => (
  <Layout>
    <Helmet title={'Contact Page'} />
    <Header title="Contact us" />

    <GridWrapper css={{ paddingTop: '100px' }}>
      {/*MISSION CONTROL*/}
      <Card>
        <Logo
          css={{ height: '140px', align: 'center' }}
          src={nationalLogo}
          alt={'nationalLogo'}
        />
        <Information>
          <HeadingName style={{ color: '#FFF' }} css={{ fontWeight: 'bold' }}>
            MISSION CONTROL
          </HeadingName>
        </Information>
        <HeadingPosition>
          National Organisation
          <br />
          <br />
          sample@gmail.com
        </HeadingPosition>
      </Card>

      {/*WELLINGTON*/}
      <Card>
        <a href="https://www.facebook.com/studentsInSpace/">
          <Logo
            css={{ height: '145px', align: 'center' }}
            src={wellingtonLogo}
            alt={'wellingtonLogo'}
          />
        </a>
        <Information>
          <a href="https://www.facebook.com/studentsInSpace/">
            <HeadingName css={{
              fontWeight: 'bold',
              color: '#FFF',
              transition: 'all 0.1s ease-in-out',
              ':hover': {
                color: theme.colors.teams.wellington,
              },
            }}>WELLINGTON</HeadingName>
          </a>
        </Information>
        <HeadingPosition>
          Victoria University of Wellington
          <br />
          <br />
          <a
            css={{
              color: '#FFF',
              fontSize: '2.5em',
              transition: 'all 0.1s ease-in-out',
              ':hover': {
                color: theme.colors.teams.wellington,
              },
            }}
            href="https://www.facebook.com/studentsInSpace/"
          >
            <FaFacebookSquare />
          </a>
          <br />
          <br />
          sample@gmail.com
        </HeadingPosition>
      </Card>

      {/*CHRISTCHURCH*/}
      <Card>
        <a href="https://www.facebook.com/nzssachch/">
          <Logo
            css={{ height: '150px', align: 'center' }}
            src={christchurchLogo}
            alt={'christchurchLogo'}
          />
        </a>
        <Information>
          <a href="https://www.facebook.com/nzssachch/">
            <HeadingName css={{
              fontWeight: 'bold',
              color: '#FFF',
              transition: 'all 0.1s ease-in-out',
              ':hover': {
                color: theme.colors.teams.christchurch,
              },
            }}>{' '}CHRISTCHURCH
            </HeadingName>
          </a>
        </Information>
        <HeadingPosition>
          University of Canterbury
          <br />
          <br />
          <a css={{
              color: '#FFF',
              fontSize: '2.5em',
              transition: 'all 0.1s ease-in-out',
              ':hover': {
                color: theme.colors.teams.christchurch,
              },
            }}
            href="https://www.facebook.com/nzssachch/"
          >
            <FaFacebookSquare />
          </a>
          <br />
          <br />
          sample@gmail.com
        </HeadingPosition>
      </Card>
    </GridWrapper>

    <Line></Line>

    < br />< br />< br />
      {/*BUTTON TO BOOK WORKSHOP*/}
      <Button>
        <ButtonText>
          <a
            style={{ color: '#000' }}
            href="mailto:someone@yoursite.com?subject=I would like to book a NZSSA Workshop!"
          >
            Book a workshop
          </a>
        </ButtonText>
      </Button>

    < br />< br />
      {/*BUTTON TO BECOME AN AMBASSADOR*/}
      <Button>
        <ButtonText>
          <a
            style={{ color: '#000' }}
            href="mailto:someone@yoursite.com?subject=I would like to become an NZSSA ambassador!"
          >
            Become an ambassador
          </a>
        </ButtonText>
      </Button>

    < br />< br />
      {/*BUTTON TO START A BRANCH*/}
      <Button>
        <ButtonText>
          <a
            style={{ color: '#000' }}
            href="mailto:someone@yoursite.com?subject=I would like to start my own NZSSA branch!"
          >
            Start a branch
          </a>
        </ButtonText>
      </Button>
    < br />< br />< br />

    <h1 css={{ textAlign: 'center' }}>We look forward to hearing from you!</h1>

    {/*<img css={{textAlign: 'center'}} src={christchurchLogo} alt={"christchurchLogo"} height={"100px"} ></img>*/}

    {/*<NameForm css={{border: '2px solid blue', height: '75%', fitContent: '40%', display: 'inline-block', width: '50px'}}></NameForm>*/}
  </Layout>
);

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form export={this.handleSubmit}>
        <label>
          Name:
          <input
            css={{ border: '2px solid blue' }}
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Message:
          <textarea
            css={{ height: '200px', width: '400px' }}
            value={this.state.message}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Contact;

Container.propTypes = {
  center: PropTypes.object,
};
