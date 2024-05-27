import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.socialMedia}>
        <a href="https://github.com/Ashminkhadka" style={styles.icon}>
          <FontAwesomeIcon icon={faGithub} size="1x" />
        </a>
        <a href="https://www.linkedin.com/in/ashmin-khadka-785033287/" style={styles.icon}>
          <FontAwesomeIcon icon={faLinkedin} size="1x" />
        </a>
      </div>
      <p style={styles.copyright}>
        &copy; 2024 Ashmin Kumar Khadka, All rights reserved.
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '20px',
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
  },
  socialMedia: {
    marginBottom: '10px',
    display:'flex',
  },
  icon: {
    margin: '0 10px',
    color: '#fff',
    textDecoration: 'none',
  },
  copyright: {
    margin: '0',
    textAlign:'center',
  },
};

export default Footer;

