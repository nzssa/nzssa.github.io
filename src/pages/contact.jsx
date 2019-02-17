import React from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import christchurchLogo from '../../static/christchurchLogo.jpg';
import nationalLogo from '../../static/logo/white-logo.png';
import wellingtonLogo from '../../static/wellingtonLogo.png';
import theme from '../../config/theme';


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
  h1 {
    font-size: 2rem;
    display: inline-block;
    color: ${props => props.theme.colors.white.base};
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.primary.base};
    }
  }
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
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  font-family: 'Rubik', sans-serif;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 25px;
  margin-left: 80px;
`;

const ButtonText = styled.div`
    display: inline-block;
    font-family: 'Rubik', sans-serif;
    font-weight: bold;
    padding-bottom: 160px;
    padding-top: 60px;

  }
`

const Contact = center => (
  <Layout>
    <Helmet title={'Contact Page'} />
    <Header title="Contact us"></Header>

    <GridWrapper css={{paddingTop: '100px'}}>
      <Card>
        <Logo css={{height: '150px', align: 'center'}}  src={christchurchLogo} alt={"christchurchLogo"} />
        <Information>
          <HeadingName css={{fontWeight: 'bold'}}>CHRISTCHURCH</HeadingName>
        </Information>
        <HeadingPosition>
          University of Canterbury
          < br />< br />
          <a href="https://www.facebook.com/nzssachch/">Visit our Facebook Page</a>
          < br />< br />
          sample@gmail.com
        </HeadingPosition>
      </Card>

      <Card>
        <Logo css={{height: '145px', align: 'center'}}  src={wellingtonLogo} alt={"wellingtonLogo"} />
        <Information>
          <HeadingName css={{fontWeight: 'bold'}}>WELLINGTON</HeadingName>
        </Information>
        <HeadingPosition>
          Victoria University of Wellington
          < br />< br />
          <a href="https://www.facebook.com/studentsInSpace/">Visit our Facebook Page</a>
          < br />< br />
          sample@gmail.com
        </HeadingPosition>
      </Card>

      <Card>
        <Logo css={{height: '140px', align: 'center'}}  src={nationalLogo} alt={"nationalLogo"} />
        <Information>
          <HeadingName css={{fontWeight: 'bold'}}>MISSON CONTROL</HeadingName>
        </Information>
        <HeadingPosition>
          National Organisation
          < br />< br />
          sample@gmail.com
        </HeadingPosition>
      </Card>

      {/*BUTTON TO BOOK WORKSHOP*/}
      <ButtonText css={{align: 'center'}}>
        <Button><a href="mailto:someone@yoursite.com?subject=I would like to book a NZSSA Workshop!">Book a workshop</a></Button>
      </ButtonText>
      {/*BUTTON TO START A BRANCH*/}
      <ButtonText css={{align: 'center'}}>
        <Button><a href="mailto:someone@yoursite.com?subject=I would like to start my own NZSSA branch!">Start a branch</a></Button>
      </ButtonText>
      {/*BUTTON TO BECOME AN AMBASSADOR*/}
      <ButtonText css={{align: 'center'}}>
        <Button><a href="mailto:someone@yoursite.com?subject=I would like to become an NZSSA ambassador!">Become an ambassador</a></Button>
      </ButtonText>

    </GridWrapper>

    <h1 css={{textAlign: 'center'}}>We look forward to hearing from you!</h1>

    {/*<img css={{textAlign: 'center'}} src={christchurchLogo} alt={"christchurchLogo"} height={"100px"} ></img>*/}

    {/*<NameForm css={{border: '2px solid blue', height: '75%', fitContent: '40%', display: 'inline-block', width: '50px'}}></NameForm>*/}
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
