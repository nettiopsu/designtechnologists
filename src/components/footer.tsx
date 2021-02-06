import React from "react";
import Container from "./container";
import FooterStyles from "./footer.module.css";
import LayoutStyles from "./layout.module.css";
import Newsletter from "./newsletter";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className={LayoutStyles.content}>
          <Newsletter />
        </div>
        <div className={FooterStyles.container}>
          <a href="/book">Handbook</a>
          <a href="/slack">Slack community</a>
          <a href="/newsletter">Newsletter</a>
          <a href="/contact">Contacts</a>
          <a href="/license">License</a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
