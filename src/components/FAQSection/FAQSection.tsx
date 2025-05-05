import React from 'react';
import { FAQ } from './FAQ';
import { Section } from '../Section';
import { faqsData } from '@/constants/faqs';

export const FAQSection: React.FC = () => {
  return (
    <Section
      title='Your Questions, Answered'
      subtitle='Find answers to some of the frequently asked questions below.'
      id='faq'
    >
      <FAQ>
        {faqsData.map((faq, index) => (
          <FAQ.Item
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </FAQ>
    </Section>
  );
};
