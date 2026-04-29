import React from 'react';
import styles from './Navbar.module.css';

export const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logo}>
          RKM<span className={styles.dot}>.</span>
        </div>
        <div className={styles.links}>
          <a href="#projects" className={styles.link}>Projects</a>
          <a href="#skills" className={styles.link}>Skills</a>
          <a href="#contact" className={styles.contactBtn}>Contact</a>
        </div>
      </div>
    </nav>
  );
};
