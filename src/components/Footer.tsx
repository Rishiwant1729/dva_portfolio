import React from 'react';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer} id="contact">
      <div className="container">
        <div className={styles.content}>
          <div className={styles.brand}>
            <div className={styles.logo}>RKM<span className={styles.dot}>.</span></div>
            <p className={styles.tagline}>B.Tech in Computer Science & Data Science</p>
          </div>
          <div className={styles.contact}>
            <h4 className={styles.title}>Let's collaborate</h4>
            <p className={styles.email}>rishiwant.maurya2024@nst.rishihood.edu.in</p>
            <div className={styles.socials}>
              <a
                href="https://www.linkedin.com/in/rishiwant-kumar-maurya-681735332/"
                className={styles.socialLink}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Rishiwant1729"
                className={styles.socialLink}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://x.com/R_WAN04"
                className={styles.socialLink}
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Rishiwant Kumar Maurya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
