import React from 'react';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <p className={styles.pretitle}>Data Visualization & Analytics</p>
          <h1 className={styles.title}>
            Rishiwant Kumar <span className={styles.italic}>Maurya</span>
          </h1>
          <p className={styles.description}>
            Transforming complex datasets into actionable insights. 
            I craft elegant, interactive solutions to drive informed decision-making.
          </p>
          <div className={styles.cta}>
            <a href="#projects" className={styles.primaryBtn}>Explore Projects</a>
            <a href="#contact" className={styles.secondaryBtn}>Get in Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};
