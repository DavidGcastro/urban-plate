import React from 'react';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="wrapper">
        <div className="footer-row1">
          <div className="footer-row1-left">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/f35f809c9ce71b20c2d7af12aeae6e7c05892fa5/5a38e/images/logo_urbanplate--white-f35f809c.svg"
              width="100"
              className="footer-row1-logo"
              alt="Logo urbanplate"
            />
            <p className="footer-row1-text">
              Urban Plate is a side project of
              <a href="https://twitter.com/CoreyGinnivan" target="_blank">
                {' '}
                Corey Ginnivan
              </a>. I'm currently looking for companies interested in taking
              this to the next level - feel free to get in touch.
            </p>
          </div>
        </div>
        <div className="footer-row2">
          <div className="footer-row2-left">
            <a href="/about/">About Urban Plate</a>
            <a href="/legal/">Terms &amp; Legal</a>
            <a href="mailto:corey@ginnivan.net?subject=Hi%20Corey%20%F0%9F%91%8B">
              Contact Us
            </a>
          </div>
          <a
            className="footer-row2-right"
            href="http://instagram.com/urbanplateco"
            target="_blank">
            <span className="instagram">Instagram</span>
            {'    '}
            <img
              src="https://d33wubrfki0l68.cloudfront.net/7caaf1a34822c0c738035831e2b0af4dd47081b3/7a796/images/icon_instagram--white-7caaf1a3.svg"
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
