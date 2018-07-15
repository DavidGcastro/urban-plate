import React from 'react';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-row1">
        <img
          src="https://d33wubrfki0l68.cloudfront.net/d572e4e96f680e3f07482265cc0e3900cebc9056/3cc56/images/logo_urbanplate-d572e4e9.svg"
          width="150"
          className="footer-row1-logo"
          alt="Logo urbanplate"
        />
        <p className="footer-row1-text">
          Urban Plate is a side project of
          <a href="https://twitter.com/CoreyGinnivan" target="_blank">
            Corey Ginnivan
          </a>. I'm currently looking for companies interested in taking this to
          the next level - feel free to get in touch.
        </p>
      </div>
      <div className="footer-row2">
        <div className="footer-row2-left">
          <a href="/about/">About Urban Plate</a>
          <a href="/legal/">Terms &amp; Legal</a>
          <a href="mailto:corey@ginnivan.net?subject=Hi%20Corey%20%F0%9F%91%8B">
            Contact Us
          </a>
        </div>
        <div className="footer-row2-right">
          <a href="http://instagram.com/urbanplateco" target="_blank">
            Instagram
            <img
              src="https://d33wubrfki0l68.cloudfront.net/6b5971a47f6ffedfd4929db284ada8cd3f7d4dae/86294/images/icon_instagram-6b5971a4.svg"
              width="22"
              alt="Instagram"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
