import React from 'react';
import styles from './Testimony.module.scss';
import Marquee from 'react-marquee-slider';
import { Section } from '@/components/Section';
import { TestimonyListData } from '@/constants/testimonies';
import { TestimonyCard } from '@/components/ui/TestimonyCard';
import { FadeWrapper } from '@/components/ui/FadeWrapper';

export const Testimony: React.FC = () => {
  return (
    <main>
      <Section
        id='testimony'
        title='Testimony'
        subtitle='What My Client Say About Me'
        className={styles.testimonyWrapper}
      >
        <FadeWrapper
          type='both'
          direction='horizontal'
          fadeWidth={80} // Atur sesuai kebutuhan
          fadeColor='rgba(0, 0, 0, 1)' // Warna transparan
        >
          {/* @ts-ignore: Ignore TypeScript error for 'style' */}
          <Marquee
            velocity={50}
            direction='ltr'
            resetAfterTries={100}
          >
            {TestimonyListData.map((testimony) => (
              <TestimonyCard
                key={testimony.id}
                img={testimony.img}
                name={testimony.name}
                position={testimony.position}
                testimony={testimony.testimony}
              />
            ))}
          </Marquee>
        </FadeWrapper>
        <FadeWrapper
          type='both'
          direction='horizontal'
          fadeWidth={80}
          fadeColor='rgba(0, 0, 0, 1)'
        >
          {/* @ts-ignore: Ignore TypeScript error for 'style' */}
          <Marquee
            velocity={50}
            direction='rtl'
            resetAfterTries={100}
          >
            {TestimonyListData.map((testimony) => (
              <div
                key={testimony.id}
                className={styles.testimonyCardContainer}
              >
                <TestimonyCard
                  img={testimony.img}
                  name={testimony.name}
                  position={testimony.position}
                  testimony={testimony.testimony}
                />
              </div>
            ))}
          </Marquee>
        </FadeWrapper>
      </Section>
    </main>
  );
};
