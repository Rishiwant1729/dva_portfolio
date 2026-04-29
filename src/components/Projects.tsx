import React from 'react';
import { ProjectCard } from './ProjectCard';
import styles from './Projects.module.css';

const PROJECTS = [
  {
    title: 'Datacron — Automotive Data Quality & Analytics Dashboard',
    description: 'An interactive web-based analytics dashboard performing a comprehensive, seven-domain data quality audit on an automotive dataset of 2,250 records. Featuring dynamic brand filtering and a natural-language vehicle finder chatbot.',
    techStack: ['React', 'Python', 'Recharts', 'Vite', 'Vercel'],
    image: '/assets/datacron_dashboard_preview_1777480104295.png',
    githubLink: 'https://github.com/ratinto/datacron',
    highlights: [
      'Corrected 1,674 data issues achieving 100% quality',
      'End-to-end data pipeline & NLP-style query parsing',
      'Multi-domain audit framework with interactive visuals'
    ]
  },
  {
    title: 'Judging a Car by Its Cover — Automotive Price Prediction',
    description: 'A collaborative data science project focused on predicting used car prices from vehicle attributes using exploratory data analysis and machine learning. Involves sourcing, preprocessing, and building regression models.',
    techStack: ['Python', 'Pandas', 'Scikit-learn', 'Tableau', 'Jupyter'],
    image: '/assets/car_price_prediction_eda_1777480146959.png',
    githubLink: 'https://github.com/Abhinavbajpai30/SectionB_TeamG4_JudgingACarByItsCover',
    highlights: [
      'Full data science lifecycle from ingestion to model evaluation',
      'Professional project organization with structured directories',
      'Tableau storytelling for non-technical stakeholders'
    ]
  }
];

export const Projects: React.FC = () => {
  return (
    <section className={styles.projects} id="projects">
      <div className="container">
        <h2 className={styles.sectionTitle}>Featured Analytics Projects</h2>
        <div className={styles.grid}>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
