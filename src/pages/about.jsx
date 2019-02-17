import React from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import AboutUsArticle from '../components/AboutUsArticle';
import planet from '../../static/planet.jpg';
import line from '../../static/line.png';
import line2 from '../../static/line2.png';
import line3 from '../../static/line3.png';
import rocket from '../../static/rocket.jpg';
import test from '../../static/backpack-girl.jpg';

const Card = styled.div`
`;

const ButtonText = styled.div`
    display: inline-block;
    font-family: 'Rubik', sans-serif;
    font-weight: bold;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
    color: ${props => props.theme.colors.primary.base};
  }
`

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

const SubHeading = styled.text`
  font-family: 'Rubik', sans-serif;
  font-weight: bold;
  font-size: 40px;
`;

const HeadingPosition = styled.h4`
  text-align: left;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
`

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
  grid-template-rows: 600px;
  grid-row-gap: 20px;
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
  grid-template-rows: 400px;
  grid-row-gap: 20px;
  grid-column-gap: 40px;
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


const Line1 = styled.img`
  position: absolute;
  right: -30px;
  top: 470px;
  z-index: 2;
`;

const RocketImage = styled.img`
  position: absolute;
  left: 40px;
  top: 350px;
  z-index: 2;
`;

const Line2 = styled.img`
  position: absolute;
  left: 180px;
  top: 480px;
  z-index: 2;
`;

const Line3 = styled.img`
  position: absolute;
  left: -210px;
  top: 1250px;
  z-index: 2;
`;

const Line4 = styled.img`
  position: absolute;
  left: 1510px;
  top: 1750px;
  z-index: 2;
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
      <Header title="About Us">"A long time ago in a galaxy far, far away..."</Header>
      <p css={{textAlign: 'center'}}>"A long time ago in a galaxy far, far away..."</p>


      {/*OUR PURPOSE*/}
      <Container center={center}>
        <PurposeText>OUR PURPOSE</PurposeText>
        <br/>
        <h3 css={{color: '#ffffff'}}>
          To <EmphasisBlue>empower</EmphasisBlue> and <EmphasisBlue>inspire</EmphasisBlue> students to realise their
          potential to contribute to the future of the space industry.
        </h3>
        <br/>
        <h3>
          This involves keeping their <EmphasisYellow>passion</EmphasisYellow> for all things space related alive,
          connecting them with industry professionals, and surrounding them with positive, like-minded people who
          challenge each other to explore their abilities in space related subjects.
        </h3>
        <br/>
      </Container>

      {/*WHY WE EXIST*/}
      <GridWrapperHalf>
        <AboutUsArticle/>
        <img src={planet} alt={"planet"} height={"600px"} ></img>
      </GridWrapperHalf>

      {/*PRIMARY SECONDARY TERTIARY DISPLAY*/}
      <GridWrapperThirds>

        {/*PRIMARY*/}
        <h3 css={{textAlign: 'center'}}>
          <svg height="200" width="300"><circle cx="150" cy="100" r="80" fill="#69BACC" /></svg>
          <PurposeText css={{fontWeight: 'bold', fontSize: '40px'}}>Primary</PurposeText>
          <br/><br/>
          <h4 css={{textAlign: 'center'}}>
            Creating opportunities for Primary School children to experience the wonder of space through Single and Multiple Event Learning Modules, some of which include ‘Rocket Building’, ‘Training Like an Astronaut’, and ‘Going to Space’.
          </h4>
        </h3>

        {/*SECONDARY*/}
        <h3 css={{textAlign: 'center'}}>
          <svg height="200" width="300">
            <circle cx="150" cy="100" r="80" fill="#F6CA68" />
          </svg>
          <PurposeText css={{fontWeight: 'bold', fontSize: '40px', padding: '80px'}}>Secondary</PurposeText>
          <br/><br/>
          <h4 css={{textAlign: 'center'}}>
            Encourage Secondary students to consider space as a viable career option through presentations at school assembly's, workshops, and competitions. Our long term goal is to introduce a NCEA Space Standard.
          </h4>
        </h3>

        {/*TERTIARY*/}
        <h3 css={{textAlign: 'center'}}>
          <svg height="200" width="300">
            <circle cx="150" cy="100" r="80" fill="#1A4174" />
          </svg>
          <PurposeText css={{fontWeight: 'bold', fontSize: '40px', align: 'right', padding: '80px'}}>Tertiary</PurposeText>
          <br/><br/>
          <h4 css={{textAlign: 'center'}}>
            Empower Tertiary students to explore the current Space Industry through networking, inter-university competitions, Space Conferences, Industry tours, and networking events.  A strong focus on Entrepreneurship and what a career in space looks like.
          </h4>
        </h3>
      </GridWrapperThirds>


      {/*BUTTON TO BOOK WORKSHOP*/}
      <h1 css={{textAlign: 'center', paddingTop: '50px', color: 'black'}}>
        <Button><a href="mailto:someone@yoursite.com?subject=I would like to book a NZSSA Workshop!" >Book a workshop</a></Button>
      </h1>



      {/*VALUES AND CODE OF CONDUCT*/}
      <GridWrapperHalf>
        <Card>
          {/*VALUES*/}
          <HeadingName  css={{fontWeight: 'bold', fontSize: '40px'}}>OUR VALUES</HeadingName>
          <HeadingPosition >
            < br />< br />
            <EmphasisYellow>Be Bold</EmphasisYellow>< br />
            EXPLORE > TAKE RISKS > CREATE > CHALLENGE YOURSELF
            < br />< br />
            <EmphasisYellow>Have Fun</EmphasisYellow>< br />
            JOIN A COMMUNITY > MAKE MISTAKES > SUCCEED TOGETHER
            < br />< br />
            <EmphasisYellow>Build a better world</EmphasisYellow>< br />
            NEW KNOWLEDGE > INNOVATION > MAKE YOUR DIFFERENCE
          </HeadingPosition>

          {/*CODE OF CONDUCT*/}
          <HeadingName  css={{fontWeight: 'bold', fontSize: '40px'}}>CODE OF CONDUCT</HeadingName>
          <HeadingPosition >
            < br />< br />
            It's pretty simple.
            < br />< br />
            DON'T BE A <EmphasisBlue>J.E.R.K</EmphasisBlue>
            < br />< br />
            <EmphasisBlue>J</EmphasisBlue>udgmental, <EmphasisBlue>E</EmphasisBlue>xclusive, <EmphasisBlue>R</EmphasisBlue>ude, <EmphasisBlue>K</EmphasisBlue>now-it-all
            < br />< br />< br />< br />
            INSTEAD, BE <EmphasisBlue>N.I.C.E</EmphasisBlue>
            < br />< br />
            <EmphasisBlue>N</EmphasisBlue>o pre-bias, <EmphasisBlue>I</EmphasisBlue>nclusive, <EmphasisBlue>C</EmphasisBlue>ommunicate, <EmphasisBlue>E</EmphasisBlue>ncouraging
          </HeadingPosition>
        </Card>

        {/*BACKPACK-GIRL IMAGE*/}
        <Card>
          <img css={{paddingLeft: '0px'}} src={test} alt={"planet"} height={"800px"} ></img>
        </Card>
      </GridWrapperHalf>

      <GridWrapperThirds css={{paddingTop: '250px'}}>
        {/*BUTTON TO BOOK WORKSHOP*/}
        <ButtonText css={{align: 'left'}}>
          <Button><a href="mailto:someone@yoursite.com?subject=I would like to book a NZSSA Workshop!">Book a workshop</a></Button>
        </ButtonText>
        {/*BUTTON TO START A BRANCH*/}
        <ButtonText css={{align: 'center'}}>
          <Button><a href="mailto:someone@yoursite.com?subject=I would like to start my own NZSSA branch!">Start a branch</a></Button>
        </ButtonText>
        {/*BUTTON TO BECOME AN AMBASSADOR*/}
        <ButtonText css={{align: 'right'}}>
          <Button><a href="mailto:someone@yoursite.com?subject=I would like to become an NZSSA ambassador!">Become an ambassador</a></Button>
        </ButtonText>
      </GridWrapperThirds>

      {/*ADDED IMAGES*/}
      <Line1
        src={line}
        alt={'line'}
        height={'100px'}
        width={'360px'}
        vspace="0"
      />
      <Line2
        src={line2}
        alt={'line'}
        height={'100px'}
        width={'150px'}
        vspace="0"
      />
      <Line3
        src={line3}
        alt={'line'}
        height={'200px'}
        width={'460px'}
        vspace="0"
      />
      <Line4
        src={line3}
        alt={'line'}
        height={'200px'}
        width={'460px'}
        vspace="0"
      />
      <RocketImage
        src={rocket}
        alt={'line'}
        height={'150px'}
        width={'150px'}
        vspace="0"
      />

    </Layout>
);

export default About;

Container.propTypes = {
  center: PropTypes.object,
};
