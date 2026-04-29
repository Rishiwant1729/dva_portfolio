import styles from './HomePage.module.css';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TechStack } from '@/components/TechStack';
import { Projects } from '@/components/Projects';
import { Footer } from '@/components/Footer';

export function HomePage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
