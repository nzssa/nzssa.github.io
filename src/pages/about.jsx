import React from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import AboutUsArticle from '../components/AboutUsArticle';
import planet from '../../static/planet.jpg'
import line from '../../static/line.png';
import line2 from '../../static/line2.png';
import rocket from '../../static/rocket.jpg';



const Text = styled.div`
    margin: 2rem 10rem;
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
`

const SubHeading = styled.text`
  font-family: 'Rubik', sans-serif;
  font-weight: bold;
  font-size: 40px;
`;

const EmphasisBlue = styled.text`
  font-family: 'Rubik', sans-serif;
  font-weight: bold;
  font-size: 30px;
  color: #69BACC;
`;

const EmphasisYellow = styled.text`
  font-family: 'Rubik', sans-serif;
  font-weight: bold;
  font-size: 30px;
  color: #F8E074;
`;

const GridWrapper = styled.div`
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
    grid: 1000px 600px / 1000px 600px;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 95%;
    grid: repeat(6, 600px) / 600px;
  }
  max-width: ${props => props.theme.layout[props.type]};
  height: 100%;
`;

const GridWrapper2 = styled.div`
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

const Image = styled.img`
  position: absolute;
  right: -30px;
  top: 470px;
  z-index: 2;
`;

const Image2 = styled.img`
  position: absolute;
  left: 40px;
  top: 350px;
  z-index: 2;
`;

const Image3 = styled.img`
  position: absolute;
  left: 180px;
  top: 480px;
  z-index: 2;
`;

const About = center => (
    <Layout>
      <Helmet title={'About Us'}/>
      <Header title="About Us">"A long time ago in a galaxy far, far away..."</Header>

      <Container center={center}>
        <Image
          src={line}
          alt={'line'}
          height={'100px'}
          width={'360px'}
          vspace="0"
        />
        <Image2
          src={rocket}
          alt={'line'}
          height={'150px'}
          width={'150px'}
          vspace="0"
        />
        <Image3
          src={line2}
          alt={'line'}
          height={'100px'}
          width={'150px'}
          vspace="0"
        />
        <PurposeText>
          OUR PURPOSE
        </PurposeText>
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
      <GridWrapper>
        <AboutUsArticle/>
        <img src={planet} alt={"planet"} height={"600px"} ></img>
        {/*<svg height="800" width="800">*/}
          {/*<circle cx="300" cy="250" r="200" stroke="black" fill="white" />*/}
        {/*</svg>*/}
      </GridWrapper>

      <GridWrapper2>
        <h3 css={{textAlign: 'center'}}>
          <svg height="200" width="300"><circle cx="150" cy="100" r="80" fill="#69BACC" /></svg>
          <PurposeText css={{fontWeight: 'bold', fontSize: '40px'}}>Primary</PurposeText>
          <br/><br/>
          <h4 css={{textAlign: 'center'}}>
            Creating opportunities for Primary School children to experience the wonder of space through Single and Multiple Event Learning Modules, some of which include ‘Rocket Building’, ‘Training Like an Astronaut’, and ‘Going to Space’.
          </h4>
        </h3>
        <h3 css={{textAlign: 'center'}}>
          <svg height="200" width="300">
            <circle cx="150" cy="100" r="80" fill="#71B585" />
          </svg>
          <PurposeText css={{fontWeight: 'bold', fontSize: '40px', padding: '80px'}}>Secondary</PurposeText>
          <br/><br/>
          <h4 css={{textAlign: 'center'}}>
            Encourage Secondary students to consider space as a viable career option through presentations at school assembly's, workshops, and competitions. Our long term goal is to introduce a NCEA Space Standard.
          </h4>
        </h3>
        <h3 css={{textAlign: 'center'}}>
          <svg height="200" width="300">
            <circle cx="150" cy="100" r="80" fill="#6F4D88" />
          </svg>
          <PurposeText css={{fontWeight: 'bold', fontSize: '40px', align: 'right', padding: '80px'}}>Tertiary</PurposeText>
          <br/><br/>
          <h4 css={{textAlign: 'center'}}>
            Empower Tertiary students to explore the current Space Industry through networking, inter-university competitions, Space Conferences, Industry tours, and networking events.  A strong focus on Entrepreneurship and what a career in space looks like.
          </h4>
        </h3>
      </GridWrapper2>
      <svg width="1000" height="110">
        <g>
          <rect y="50" x="650" rx="20" ry="20" width="200" height="50" fill="white" stroke="black" />
          <text y="80" x="670" font-family="Rubik" font-size="20" fill="black">Book a workshop</text>
        </g>
      </svg>

    </Layout>
);

export default About;

Container.propTypes = {
  center: PropTypes.object,
};

