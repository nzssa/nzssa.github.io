import React from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { Header, SingleEvent } from 'components';
import { Layout, Container } from 'layouts';
import { graphql } from 'gatsby';

const Text = styled.div`
  margin: 2rem 10rem;
`;
// const Events = () => {
//   // const { edges } = data.allFile;
//   return (
//     <Layout>
//       <Helmet title={'Events Page'} />
//       <Header title="Events Page">Gatsby Tutorial Starter</Header>
//       <Container>
//         <Text>
//           <h3>
//             If you would like to build this site completely from scratch, you go
//             can go read the guide{' '}
//             <a href="https://justinformentin.com/gatsby-v2-guide">here.</a>
//           </h3>
//           <br />
//           <h3>
//             Or you can watch the video{' '}
//             <a href="https://youtube.com/#">on Youtube.</a>
//           </h3>
//         </Text>
//       </Container>
//     </Layout>
//   );
// };
const Events = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Helmet title={'Events Page'} />
      <Header title="Events Page">Gatsby Tutorial Starter</Header>
      {edges.map(({ node }) => (
        <SingleEvent
          key={node.id}
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          excerpt={node.excerpt}
        />
      ))}
    </Layout>
  );
};

export default Events;
//
// Events.propTypes = {
//   data: PropTypes.shape({
//     allFile: PropTypes.shape({
//       edges: PropTypes.arrayOf(
//         PropTypes.shape({
//           node: PropTypes.shape({
//             excerpt: PropTypes.string,
//             frontmatter: PropTypes.shape({
//               cover: PropTypes.object.isRequired,
//               path: PropTypes.string.isRequired,
//               title: PropTypes.string.isRequired,
//               date: PropTypes.string.isRequired,
//               tags: PropTypes.array,
//             }),
//           }),
//         }).isRequired
//       ),
//     }),
//   }),
// };

Container.propTypes = {
  center: PropTypes.object,
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(/content/events)/.*\\.md$/" } }
    ) {
      edges {
        node {
        excerpt(pruneLength: 200)
          frontmatter {
            title
            path
            slug
            date
            published
            _PARENT
          }
        }
      }
    }
  }
`;
