import React from 'react'
// import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer>
        <div className="footer-icons">
    <a href="https://github.com/your-profile" className="icon-link">
        <FaGithub size={32} />
    </a>
    <a href="https://twitter.com/your-profile" className="icon-link">
        <FaTwitter size={32} />
    </a>
    <a href="https://linkedin.com/in/your-profile" className="icon-link">
        <FaLinkedin size={32} />
    </a>
</div>
<div className="footer-author">
    <span>© 2024 by </span><a href="https://your-website.com" className="author-link">Your Name</a>
</div>
</footer>
  )
}

export default Footer;
