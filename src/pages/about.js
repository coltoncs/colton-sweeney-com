import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import { Link } from "gatsby";

const AboutPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>About</title>
      </Helmet>
      <div className="headline">About</div>
      <div>
        <p>
          This is my personal, yet minimalists portfolio/blog website that I
          will be building upon and adding content to in my free time. Right
          now, this site is still in development, so please bare with me as I
          update and progress!
        </p>
        <p>
          Feel free to check out my <a href="https://github.com/coltoncs">Github</a> for my current and past projects, and keep an eye on my <a href="https://www.linkedin.com/in/colton-sweeney/">LinkedIn</a> for more information on me!
        </p>
      </div>
    </Layout>
  );
};

export default AboutPage;
