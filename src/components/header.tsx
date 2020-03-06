import { Link } from "gatsby";
import React from "react";
import Logo from "../images/logo.svg";
import GithubLogo from "../icons/logo-github.svg";
import SlackLogo from "../icons/logo-slack.svg";
import HeaderStyles from "./header.module.css";

const Header = () => (
  <header className={HeaderStyles.root}>
    <div className={HeaderStyles.container}>
      <div className={HeaderStyles.left}>
        <Link to="/">
          <img src={Logo} className={HeaderStyles.logo} />
        </Link>
      </div>
      <div className={HeaderStyles.right}>
        <a
          href="https://github.com/nettiopsu/designtechnologist"
          target="_blank"
          className={HeaderStyles.iconLink}
        >
          <img
            src={GithubLogo}
            alt="Github repository"
            className={HeaderStyles.icon}
          />
        </a>
        <a
          target="_blank"
          href="https://join.slack.com/t/designtechnologists/shared_invite/enQtOTU2MTc4OTE5NDI3LTUzYzZhM2Y0NDEwODgzZWNjNTAxYzVjM2EyNTI4ODIyYjFmZTg1YTRmOTdiNmQ0MDNkZGFhMTFiOGUxNDc5NmM"
          className={HeaderStyles.iconLink}
        >
          <img
            src={SlackLogo}
            alt="Slack channel"
            className={HeaderStyles.icon}
          />
        </a>
      </div>
    </div>
  </header>
);

export default Header;
