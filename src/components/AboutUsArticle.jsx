import React from 'react';
import styled from 'react-emotion';
import { Container } from 'layouts';
import theme from '../../config/theme';
import { HomeHeader, Header, PostList } from 'components';

const Wrapper = styled.article`
  margin: 0 3rem;
`;


const Card = styled.div`
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
  color: #69BACC;
`;

const EmphasisYellow = styled.text`
  font-family: 'Rubik', sans-serif;
  font-weight: bold;
  font-size: 30px;
  color: #F8E074;
`;



const AboutUsArticle = ({ key, title, excerpt}) => (
  <Card>
    <HeadingName  css={{fontWeight: 'bold', fontSize: '40px'}}>WHY WE EXIST</HeadingName>
    <HeadingPosition>
      Space is arguably the most exciting upcoming industry of the modern age. What was once an exclusive sector, with a sole focus on rocket launches, is quickly developing into an innovative and fast paced industry. As we witness an exponential growth of space technologies, and understand more of the exciting possibilities space holds, it only makes sense that more and more students are looking towards a career that involves space.
      < br />< br />
      Despite this, there is still <EmphasisBlue>no clear path</EmphasisBlue> for students to immerse themselves, or even explore what the future of space is all about. There isn't exactly a degree for getting into the space industry; the closest we get is Astronomy or Physics, however neither of these include the wide and diverse range of skills the future space industry requires. It is apparent that the future of Space cannot be limited to Physicists, Engineers, and Scientists, despite the perceived “space career” image.
      < br />< br />
      The problem is clear; for most students, regardless of their passion for space, a future in the space Industry is not even on their agenda. And so we decided that <EmphasisYellow>every student in New Zealand</EmphasisYellow> should be able to recognise their ability to contribute to the future of the space industry.
    </HeadingPosition>
  </Card>
);

export default AboutUsArticle;

