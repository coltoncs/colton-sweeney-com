import React from "react";
import { Link } from "gatsby";
import ThemeChanger from "../components/themeChanger";
import { DiGithubBadge } from 'react-icons/di';

export default (props) => (
  <nav className="navigation">
    <Link to="/about">About</Link>
    <Link to="/portfolio">Portfolio</Link>
    <Link to="/contact">Contact</Link>
    <a href="https://github.com/coltoncs" target="_blank" rel="noopener noreferrer"><DiGithubBadge size={35}/></a>
    <ThemeChanger />
  </nav>
);
