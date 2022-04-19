import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PostLink from "../components/post-link";
import HeroHeader from "../components/heroHeader";

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {
  const BlogPosts = edges
    .filter((edge) => edge.node.frontmatter.type === "blog")
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

  const PortfolioPosts = edges
    .filter((edge) => edge.node.frontmatter.type === "portfolio")
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>

      <HeroHeader />

      <div className="container">
        <h2>Blog Posts &darr;</h2>
        <div className="grids">
          {BlogPosts}
          <a className="card flex_center page_link" href="/blog">See more...</a>
        </div>
      </div>

      <div className="container">
        <h2>Portfolio Posts &darr;</h2>
        <div className="grids">
          {PortfolioPosts}
          <a className="card flex_center page_link" href="/portfolio">See more...</a>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
export const pageQuery = graphql`
  query indexPageQuery {
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
`;
