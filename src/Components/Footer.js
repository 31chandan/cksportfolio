import React from "react";
import "../Component_StyleSheet/footer.css";

const Footer = () => {
  const RecentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <h3 className="footer_text1">
        Designed and Developed by Chandan Kr Singh
      </h3>
      <h3 className="footer_text2">Copyright © {RecentYear} CKS</h3>
      <a
        href="https://github.com/31ChandanTech?tab=repositories"
        target="_blank"
        rel="noreferrer"
        className="footerGitLink"
      >
        <i className="fa-brands fa-github footer_text3"></i>
      </a>
    </div>
  );
};

export default Footer;
