import React from "react";
import Helmet from "react-helmet";
import { graphql } from 'gatsby';
import Layout from "../components/layout";
import PostLink from "../components/post-link"

const PortfolioPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {

  const Posts = edges
    .filter(edge => edge.node.frontmatter.type === 'portfolio')
    .map(edge => <PostLink style={{ width: '33%' }} key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <div className="headline">My Portfolio</div>
      <div className="gallery flex_center">
        {Posts}
      </div>
    </Layout>
  );
};

export default PortfolioPage;
export const pageQuery = graphql`
  query portfolioPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
            type
          }
        }
      }
    }
  }
`