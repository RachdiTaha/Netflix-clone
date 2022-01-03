import React from "react";
import "./Footer.scss";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";

function Footer() {
  return (
    <footer className="Footer">
      <div className="container">
        <div className="Footer__socials">
          <a href="/" className="Footer__social">
            <FacebookIcon />
          </a>
          <a href="/" className="Footer__social">
            <InstagramIcon />
          </a>
          <a href="/" className="Footer__social">
            <TwitterIcon />
          </a>
          <a href="/" className="Footer__social">
            <YouTubeIcon />
          </a>
        </div>
        <ul className="Footer__links">
          <li className="Footer__social">
            <a href="/">lien footer</a>
          </li>
          <li className="Footer__social">
            <a href="/">lien footer</a>
          </li>
          <li className="Footer__social">
            <a href="/">lien footer</a>
          </li>
          <li className="Footer__social">
            <a href="/">lien footer</a>
          </li>
          <li className="Footer__social">
            <a href="/">lien footer</a>
          </li>
          <li className="Footer__social">
            <a href="/">lien footer</a>
          </li>
          <li className="Footer__social">
            <a href="/">lien footer</a>
          </li>
          <li className="Footer__social">
            <a href="/">lien footer</a>
          </li>
        </ul>
        <div className="Footer_copy"> Netflix Clone - tous droit reserves</div>
      </div>
    </footer>
  );
}

export default Footer;
