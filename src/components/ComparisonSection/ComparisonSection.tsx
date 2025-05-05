import React from 'react';
import { Section } from '../Section';
import { Comparison } from './Comparison';

export const ComparisonSection: React.FC = () => {
  return (
    <main>
      <Section
        id='comparison'
        title='Why I Stand Out'
        subtitle='A showcase of my unique approach and skill set compared to conventional front-end developers.'
      >
        <Comparison>
          <Comparison.Header
            col1Title='Skill'
            col2Title='Me'
            col3Title='Other'
          />
          {new Array(7).fill(null).map((_, index) => (
            <Comparison.Item
              key={`${index}-item`}
              featureName='React Expert'
              ourState={true}
              competitorState={false}
            />
          ))}
        </Comparison>
      </Section>
    </main>
  );
};
