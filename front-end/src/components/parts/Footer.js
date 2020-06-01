import React from "react";

const Footer = () => {
  return (
    <footer>
      <div classNameName="container">
        <h1>Complete Blog</h1>
        <p classNameName="copyright-line">
          © Copyright 2020 - All rights reserved.
        </p>
        <ul classNameName="social-list">
          <li>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
