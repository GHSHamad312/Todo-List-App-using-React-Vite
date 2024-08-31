import React from 'react';
import './footer.css';
import githubIcon from '../assets/github-142-svgrepo-com.svg';
import linkedinIcon from '../assets/linkedin-svgrepo-com.svg';
import gmailIcon from '../assets/gmail-svgrepo-com.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footertitle">Todo app Made by Hamad Ali Shah</div>
      <div className="contact">
        <div className="icons">
          <a href="https://github.com/GHSHamad312"><img src={githubIcon} alt="github icon" /></a>
          <a href="https://www.linkedin.com/in/ghshamad/"><img src={linkedinIcon} alt="linkedin icon" /></a>
          <a href="#"><img src={gmailIcon} alt="gmail icon" /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
