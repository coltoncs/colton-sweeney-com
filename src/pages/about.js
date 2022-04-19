import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import {
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiDjango,
  DiDotnet,
  DiGithubFull,
  DiFirebase,
  DiGoogleAnalytics,
  DiLinux,
  DiReact,
  DiUbuntu,
  DiSwift,
  DiNodejs,
  DiWordpress,
  DiPhotoshop,
  DiPostgresql,
  DiSqllite,
  DiMongodb,
  DiMysql,
  DiGoogleDrive,
  DiIllustrator,
  DiDocker,
  DiDreamweaver,
  DiPython,
} from "react-icons/di";

const AboutPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>About</title>
      </Helmet>
      <div className="headline">About</div>
      <div>
        <blockquote style={{ color: "rgba(256,256,256,0.4)", margin: "50px" }}>
          This is my personal, yet minimalistic portfolio/blog website that I
          will be building upon and adding content to in my free time. Right
          now, this site is still in development, so please bare with me as I
          update and progress!
          <br />
          <br /> UPDATE 4/19: Stay tuned as content gets added to both Blog and
          Portfolio pages, both of which are new additions.
        </blockquote>
        <p style={{ textIndent: "35px" }}>
          My name is Colton Sweeney, and I'm a full-stack web and sofware
          developer living in Raleigh, NC. I've been programming for close to a
          decade, while more recently working with web technologies, both front
          end and back end. I primarily enjoy building front-end experiences
          with React and other tools, but also find myself exploring backend
          systems written in NodeJS (Express), Go (Gin), C# (.NET), and other
          languages.
        </p>
        <p>
          I currently work for United Restaurant Equipment Company in Downtown
          Raleigh, NC. There, I work part-time on their{" "}
          <a href="https://ureco.com" target="_blank" rel="noopener noreferrer">
            ecommerce store
          </a>{" "}
          while I finish up my Associates in Web Development from Wake Technical
          Community College, due Spring of 2022. After graduation, I hope to
          continue working in web development while pursuing a Bachelors in
          Computer Science.
        </p>
        <p>
          Feel free to check out my{" "}
          <a href="https://github.com/coltoncs">Github</a> for my current and
          past projects, and keep an eye on my{" "}
          <a href="https://www.linkedin.com/in/colton-sweeney/">LinkedIn</a> for
          more information on me!
        </p>
        <p className="attn">
          Old portfolio viewable{" "}
          <a href="https://coltonsoldportfolio.netlify.app/">here</a>
        </p>
        <div className="showcase">
          <DiHtml5 size={"3rem"} />
          <DiCss3 size={"3rem"} />
          <DiJavascript size={"3rem"} />
          <DiReact size={"3rem"} />
        </div>
        <div className="showcase">
          <DiDjango size={"3rem"} />
          <DiDotnet size={"3rem"} />
          <DiNodejs size={"3rem"} />
          <DiSwift size={"3rem"} />
        </div>
        <div className="showcase">
          <DiLinux size={"3rem"} />
          <DiUbuntu size={"3rem"} />
          <DiPhotoshop size={"3rem"} />
          <DiIllustrator size={"3rem"} />
        </div>
        <div className="showcase">
          <DiPostgresql size={"3rem"} />
          <DiMysql size={"3rem"} />
          <DiSqllite size={"3rem"} />
          <DiMongodb size={"3rem"} />
        </div>
        <div className="showcase">
          <DiFirebase size={"3rem"} />
          <DiGithubFull size={"3rem"} />
          <DiGoogleAnalytics size={"3rem"} />
          <DiGoogleDrive size={"3rem"} />
        </div>
        <div className="showcase">
          <DiWordpress size={"3rem"} />
          <DiDocker size={"3rem"} />
          <DiDreamweaver size={"3rem"} />
          <DiPython size={"3rem"} />
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
