import React from 'react';
import styles from './CareerJourneySection.module.scss';
import clsx from 'clsx';
import { Journey } from './Journey';
import { Section } from '../Section';
import { careerJourney } from '@/constants/careerJourney';

export const CareerJourneySection: React.FC = () => {
  return (
    <Section
      id='journey'
      title='Career Journey'
      subtitle='A visual timeline of key milestones and experiences from over the years.'
      className={clsx(styles.journeyWrapper, 'container')}
    >
      <Journey>
        {careerJourney.map((career, index) => (
          <Journey.Item
            title={career.title}
            companyName={career.companyName}
            dateFrom={career.dateFrom}
            dateTo={career.dateTo}
            key={`${index}-item`}
          >
            {career.description.map((desc, index) => (
              <Journey.Description key={`${index}-item`}>
                {desc}
              </Journey.Description>
            ))}
          </Journey.Item>
        ))}
      </Journey>
    </Section>
  );
};
