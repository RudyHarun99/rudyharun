import React from 'react';
import styles from './TestimonyCard.module.scss';

type TestimonyCardProps = {
  img: string;
  name: string;
  position: string;
  testimony: string;
}

export const TestimonyCard: React.FC<TestimonyCardProps> = ({
  img,
  name,
  position,
  testimony,
}) => {
  return (
    <div className={styles.testimonyCard}>
      <div className={styles.testimonyCardHeader}>
        <img
          src={img}
          alt='testimony'
          className={styles.img}
        />
        <div>
          <p className={styles.name}>{name}</p>
          <p className={styles.position}>{position}</p>
        </div>
      </div>
      <p className={styles.testimony}>{testimony}</p>
    </div>
  );
};
