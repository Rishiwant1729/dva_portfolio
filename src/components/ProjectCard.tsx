import React from 'react';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  githubLink: string;
  highlights: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, description, techStack, image, githubLink, highlights 
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
        <div className={styles.overlay}>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
            View Source
          </a>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.tags}>
          {techStack.map(tech => <span key={tech} className={styles.tag}>{tech}</span>)}
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.highlights}>
          <h4 className={styles.highlightsTitle}>Key Highlights:</h4>
          <ul>
            {highlights.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};
