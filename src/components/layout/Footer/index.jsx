import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { footerContent } from "../../../helpers/constants";
import "./style.scss";

const FooterInput = ({ styling }) => {
  return (
    <form className={`footer-form-${styling}`}>
      <input type="email" placeholder="Your email..." name="email" />
      <input className="submit-btn" type="submit" value="Subscribe" />
    </form>
  );
};

const Footer = () => {
  return (
    <footer className="footer-container">
      <section className="footer-white">
        <div className="footer-top">
          <div className="footer-top-content">
            <h4>Join the Sooth family</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
          <FooterInput styling="brown" />
        </div>
      </section>
      <div className="footer-middle">
        <section className="footer-middle-left">
          <h3>sooth</h3>
          <p>Explore our innovative skincare products</p>
          <FooterInput styling="white" />
        </section>
        <section className="footer-middle-right">
          {footerContent.articles.map((article) => (
            <article key={article.id}>
              <h5>{article.title}</h5>
              {article.paragraphs.map((pg) => (
                <p key={pg.id}>{pg.text}</p>
              ))}
            </article>
          ))}
        </section>
      </div>
      <div className="footer-bottom">
        <h5>sooth all rights reserved</h5>
        <section>
          <article className="footer-bottom-left">
            {footerContent.links.map((link) => (
              <a key={link.id} href={link.linkRef}>
                {link.text}
              </a>
            ))}
          </article>
          <article className="footer-bottom-right">
            <FaFacebook color={"white"} size={25} />
            <FaInstagram color={"white"} size={25} />
            <FaTwitter color={"white"} size={25} />
            <FaYoutube color={"white"} size={25} />
          </article>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
