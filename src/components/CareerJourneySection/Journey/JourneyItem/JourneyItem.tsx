import React, { useEffect } from 'react';
import styles from './JourneyItem.module.scss';
import clsx from 'clsx';
import CompanyIcon from '@/assets/icon-company.svg';
import DateIcon from '@/assets/icon-date.svg';
import { JourneyDescription } from './JourneyDescription';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type JourneyItemProps = {
  title: string;
  companyName: string;
  dateFrom: string;
  dateTo: string;
  lastItem?: boolean;
  children: React.ReactNode;
};

type SubComponents = {
  Description: typeof JourneyDescription;
};

export const JourneyItem: React.FC<JourneyItemProps> &
SubComponents = ({
  title,
  companyName,
  dateFrom,
  dateTo,
  lastItem,
  children,
}) => {
  const { ref, inView } = useInView({ threshold: 1, triggerOnce: true });
  const lineControls = useAnimation();

  useEffect(() => {
    if (inView) lineControls.start({ height: '107%' });
  }, [inView, lineControls]);

  return (
    <>
      <div ref={ref} className={styles.timeline}>
        {!lastItem && (
          <motion.div
            className={styles.line}
            initial={{ height: 0 }}
            animate={lineControls}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        )}

        <div className={styles.circle}></div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.detail}>
          <div className={clsx(styles.company, styles.detailItem)}>
            <CompanyIcon />
            <span className={styles.companyName}>{companyName}</span>
          </div>
          <div className={clsx(styles.date, styles.detailItem)}>
            <DateIcon />
            <span>
              {dateFrom} - {dateTo}
            </span>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

JourneyItem.Description = JourneyDescription;
