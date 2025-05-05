import React from 'react';
import styles from './Home.module.scss';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { About } from './About';
import { AchievementSection } from './AchievementSection';
import { CareerJourneySection } from './CareerJourneySection';
import { CoreSkillSection } from './CoreSkillSection';
import { ComparisonSection } from './ComparisonSection';
import { ProjectsSection } from './ProjectsSection';
import { Testimony } from './Testimony';
import { FAQSection } from './FAQSection';
import { ContactUs } from './ContactUs';
import { Footer } from './Footer';

export const Home: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <Navbar />
      <Hero />
      <About />
      <AchievementSection />
      <CareerJourneySection />
      <CoreSkillSection />
      <ComparisonSection />
      <ProjectsSection />
      <Testimony />
      <FAQSection />
      <ContactUs />
      <Footer />
    </div>
  );
};
