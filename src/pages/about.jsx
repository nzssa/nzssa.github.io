import React from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import AboutUsArticle from '../components/AboutUsArticle';
import backpackGirl from '../../static/backpack-girl.jpg';
import committee from '../../static/committee.png';

const Card = styled.div``;

const ButtonText = styled.div`
  display: inline-block;
  font-family: 'Rubik', sans-serif;
  font-weight: bold;
  transition: all ${props => props.theme.transitions.default.duration};
  &:hover {
    color: ${props => props.theme.colors.primary.base};
  }
`;

const PurposeText = styled.text`
  font-family: 'Rubik', sans-serif;
  font-weight: bold;
  font-size: 64px;
  color: #ffffff;
`;

const HeadingName = styled.h2`
  font-family: 'Rubik', sans-serif;
  text-align: left;
  padding-top: 30px;
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  margin: 10px;
`;

const HeadingPosition = styled.h4`
  text-align: left;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
`;

const EmphasisBlue = styled.text`
  font-family: 'Rubik', sans-serif;
  font-weight: bold;
  font-size: 30px;
  color: #69bacc;
`;

const EmphasisYellow = styled.text`
  font-family: 'Rubik', sans-serif;
  font-weight: bold;
  font-size: 30px;
  color: #f8e074;
`;

const GridWrapperHalf = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 600px 600px;
  grid-template-rows: 20px;
  grid-row-gap: 20px;
  grid-column-gap: 20px;

  width: 75%;
  justify-content: space-around;
  align-content: space-around;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 90%;
    grid: 300px 600px / 300px 600px;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 95%;
    grid: repeat(6, 600px) / 600px;
  }
  max-width: ${props => props.theme.layout[props.type]};
  height: 30%;
`;

const GridWrapperThirds = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 400px 400px 400px;
  grid-template-rows: 200px;
  grid-row-gap: 0px;
  grid-column-gap: 20px;
  width: 75%;
  justify-content: space-around;
  align-content: space-around;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 90%;
    grid: 400px 400px 400px/ 300px;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 95%;
    grid: repeat(6, 400px) / 300px;
  }
  max-width: ${props => props.theme.layout[props.type]};
  height: 100%;
`;

const Button = styled.button`
  background-color: #ffffff;
  color: black;
  padding: 15px 5px;
  text-align: top;
  display: inline-block;
  font-size: 20px;
  font-family: 'Rubik', sans-serif;
  margin: 2px 2px;
  cursor: pointer;
  border-radius: 25px;
  width: 300px;
  margin: auto;
  display: block;
`;

const LinkColor = styled.div`
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

const About = center => (
    <Layout>
      <Helmet title={'About Us'}/>
      <Header title="About Us"></Header>
      <p css={{textAlign: 'center'}}>"A long time ago in a galaxy far, far away..."</p>


      {/*OUR PURPOSE*/}
      <Container center={center}>
        <PurposeText>OUR PURPOSE</PurposeText>
        <br/>
        <h3 css={{lineHeight: '1.6'}}>
          To <EmphasisBlue>empower</EmphasisBlue> and <EmphasisBlue>inspire</EmphasisBlue> students to realise their
          potential to contribute to the future of the space industry.
        </h3>
        <br/>
        <h3 css={{lineHeight: '1.6'}}>
          This involves keeping their <EmphasisYellow>passion</EmphasisYellow> for all things space related alive,
          connecting them with industry professionals, and surrounding them with positive, like-minded people who
          challenge each other to explore their abilities in space related subjects.
        </h3>
        <br/>
      </Container>

      {/*WHY WE EXIST*/}
      <GridWrapperHalf css={{paddingBottom: '250px'}}>
        <AboutUsArticle/>
        <img src={backpackGirl} alt={"backpackGirl"} height={"700px"} ></img>
      </GridWrapperHalf>


      {/*PRIMARY SECONDARY TERTIARY DISPLAY*/}
      <GridWrapperHalf css={{height: '20px', paddingTop: '500px', paddingBottom: '150px'}}>
        <Card css={{height: '20px'}}>
          <HeadingName  css={{fontWeight: 'bold', fontSize: '40px'}}>OUR ENGAGEMENT</HeadingName>
        </Card>
      </GridWrapperHalf>

      <GridWrapperThirds css={{paddingLeft: '30px', paddingBottom: '70px'}}>

        {/*PRIMARY*/}
        <h3 css={{textAlign: 'left'}}>
          {/*<svg height="200" width="300"><circle cx="150" cy="100" r="80" fill="#F6CA68" /></svg>*/}
          <PurposeText css={{fontWeight: 'bold', fontSize: '40px'}}>Primary</PurposeText>
          <br/><br/>
          <h4 css={{lineHeight: '1.6', textAlign: 'left'}}>
            Creating opportunities for Primary School children to experience the wonder of space through Single and Multiple Event Learning Modules, some of which include ‘Rocket Building’, ‘Training Like an Astronaut’, and ‘Going to Space’.
          </h4>
        </h3>

        {/*SECONDARY*/}
        <h3 css={{textAlign: 'left'}}>
          {/*<svg height="200" width="300"><circle cx="150" cy="100" r="80" fill="#F6CA68" /></svg>*/}
          <PurposeText css={{fontWeight: 'bold', fontSize: '40px'}}>Secondary</PurposeText>
          <br/><br/>
          <h4 css={{lineHeight: '1.6', textAlign: 'left'}}>
            Encourage Secondary students to consider space as a viable career option through presentations at school assembly's, workshops, and competitions. Our long term goal is to introduce a NCEA Space Standard.
          </h4>
        </h3>

        {/*TERTIARY*/}
        <h3 css={{textAlign: 'left'}}>
          {/*<svg height="200" width="300"><circle cx="150" cy="100" r="80" fill="#F6CA68" /></svg>*/}
          <PurposeText css={{fontWeight: 'bold', fontSize: '40px'}}>Tertiary</PurposeText>
          <br/><br/>
          <h4 css={{lineHeight: '1.6', textAlign: 'left'}}>
            Empower Tertiary students to explore the current Space Industry through networking, inter-university competitions, Space Conferences, Industry tours, and networking events.  A strong focus on Entrepreneurship and what a career in space looks like.
          </h4>
        </h3>
      </GridWrapperThirds>
      < br />< br />

      {/*BUTTON TO BOOK WORKSHOP*/}
      <Button>
        <ButtonText><a style={{ color: '#000' }} href="mailto:info@nzssa.org.nz?subject=I would like to book a NZSSA Workshop!">Book a workshop</a></ButtonText>
      </Button>



      {/*VALUES AND CODE OF CONDUCT*/}
      <GridWrapperHalf>
        <Card>
          {/*VALUES*/}
          <HeadingName  css={{fontWeight: 'bold', fontSize: '40px'}}>OUR VALUES</HeadingName>
          <HeadingPosition css={{lineHeight: '1.6'}} >
            <EmphasisBlue>Be bold</EmphasisBlue>< br />
            EXPLORE > TAKE RISKS > CREATE > CHALLENGE YOURSELF
            < br />< br />
            <EmphasisBlue>Have fun</EmphasisBlue>< br />
            JOIN A COMMUNITY > MAKE MISTAKES > SUCCEED TOGETHER
            < br />< br />
            <EmphasisBlue>Build a better world</EmphasisBlue>< br />
            NEW KNOWLEDGE > INNOVATION > MAKE YOUR DIFFERENCE
          </HeadingPosition>

          {/*CODE OF CONDUCT*/}
          <HeadingName  css={{fontWeight: 'bold', fontSize: '40px'}}>CODE OF CONDUCT</HeadingName>
          <HeadingPosition css={{lineHeight: '1.6'}}>
            It's pretty simple.
            < br />< br/>
            DON'T BE A <EmphasisBlue>J.E.R.K</EmphasisBlue>
            < br />
            <EmphasisBlue>J</EmphasisBlue>udgmental, <EmphasisBlue>E</EmphasisBlue>xclusive, <EmphasisBlue>R</EmphasisBlue>ude, <EmphasisBlue>K</EmphasisBlue>now-it-all
            < br />< br />
            INSTEAD, BE <EmphasisBlue>N.I.C.E</EmphasisBlue>
            < br />
            <EmphasisBlue>N</EmphasisBlue>o pre-bias, <EmphasisBlue>I</EmphasisBlue>nclusive, <EmphasisBlue>C</EmphasisBlue>ommunicate, <EmphasisBlue>E</EmphasisBlue>ncouraging
          </HeadingPosition>
        </Card>

        {/*COMMITTEE IMAGE*/}
        <Card>
          <img css={{paddingTop: '100px'}} src={committee} alt={"committee"}></img>
        </Card>
      </GridWrapperHalf>

      <GridWrapperThirds css={{paddingTop: '800px'}}>
        {/*BUTTON TO BOOK WORKSHOP*/}
      <a
        style={{ color: '#000' }}
        href="mailto:info@nzssa.org.nz?subject=I would like to book a NZSSA Workshop!"
      >
        <Button>
          <ButtonText>Book a workshop</ButtonText>
        </Button>
      </a>
      {/*BUTTON TO BECOME AN AMBASSADOR*/}
      <a
        style={{ color: '#000' }}
        href="mailto:info@nzssa.org.nz?subject=I would like to become an NZSSA ambassador!"
      >
        <Button>
          <ButtonText>Become an ambassador</ButtonText>
        </Button>
      </a>
      {/*BUTTON TO START A BRANCH*/}
      <a
        style={{ color: '#000' }}
        href="mailto:info@nzssa.org.nz?subject=I would like to start my own NZSSA branch!"
      >
        <Button>
          <ButtonText>Start a branch</ButtonText>
        </Button>
      </a>
    </GridWrapperThirds>
  </Layout>
);

export default About;

Container.propTypes = {
  center: PropTypes.object,
};
