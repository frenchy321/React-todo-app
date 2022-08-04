import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="py-5 footer-text text-center">
      <div className="footer-text">
        Copyright &copy; {new Date().getFullYear()}
      </div>
      <Link className="footer-links d-block" to="/terms">
        Terms
      </Link>{" "}
    </footer>
  );
}

export default Footer;
