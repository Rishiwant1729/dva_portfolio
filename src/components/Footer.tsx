import React from 'react';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer} id="contact">
      <div className="container">
        <div className={styles.content}>
          <div className={styles.brand}>
            <div className={styles.logo}>RKM<span className={styles.dot}>.</span></div>
            <p className={styles.tagline}>B.Tech in Computer Science & Artificial Intelligence</p>
          </div>
          <div className={styles.contact}>
            <h4 className={styles.title}>Let's collaborate</h4>
            <p className={styles.email}>rishiwant.kumar@example.com</p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialLink}>LinkedIn</a>
              <a href="#" className={styles.socialLink}>GitHub</a>
              <a href="#" className={styles.socialLink}>Twitter</a>
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
