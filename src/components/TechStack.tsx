import React from 'react';
import styles from './TechStack.module.css';

const TECH_ITEMS = [
  { name: 'Python', category: 'Programming' },
  { name: 'Tableau', category: 'Visualization' },
  { name: 'Excel', category: 'Analysis' },
  { name: 'Pandas', category: 'Data Science' },
  { name: 'NumPy', category: 'Data Science' },
  { name: 'Scikit-Learn', category: 'Machine Learning' },
  { name: 'React', category: 'Frontend' },
  { name: 'JavaScript', category: 'Programming' },
  { name: 'SQL', category: 'Database' },
  { name: 'Vite', category: 'Tools' },
];

export const TechStack: React.FC = () => {
  return (
    <section className={styles.techStack} id="skills">
      <div className="container">
        <h2 className={styles.sectionTitle}>Analytical Tech Stack</h2>
        <div className={styles.grid}>
          {TECH_ITEMS.map((item) => (
            <div key={item.name} className={styles.item}>
              <div className={styles.iconPlaceholder}>
                {item.name[0]}
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{item.name}</h3>
                <span className={styles.category}>{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
