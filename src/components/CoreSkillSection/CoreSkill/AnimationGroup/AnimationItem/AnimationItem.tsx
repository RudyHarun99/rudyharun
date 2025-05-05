import React from 'react';
import styles from './AnimationItem.module.scss';
import clsx from 'clsx';
import HTMLIcon from '@/assets/html.svg';
import CSSIcon from '@/assets/css.svg';
import JSIcon from '@/assets/javascript.svg';
import ReactIcon from '@/assets/react.svg';
import TSIcon from '@/assets/typescript.svg';
import { motion, Variants } from 'framer-motion';

const skillVariants: Variants = {
  start: {
    rotate: -360,
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

export const AnimationItem: React.FC = () => {
  return (
    <>
      <motion.div
        className={clsx(styles.htmlLogoContainer, styles.skillContainer)}
        variants={skillVariants}
      >
        <HTMLIcon className={styles.htmlIcon} />
      </motion.div>

      <motion.div
        className={clsx(styles.cssLogoContainer, styles.skillContainer)}
        variants={skillVariants}
      >
        <CSSIcon className={styles.cssIcon} />
      </motion.div>

      <motion.div
        className={clsx(styles.jsLogoContainer, styles.skillContainer)}
        variants={skillVariants}
      >
        <JSIcon className={styles.jsIcon} />
      </motion.div>

      <motion.div
        className={clsx(styles.reactLogoContainer, styles.skillContainer)}
        variants={skillVariants}
      >
        <ReactIcon className={styles.reactIcon} />
      </motion.div>

      <motion.div
        className={clsx(styles.tsLogoContainer, styles.skillContainer)}
        variants={skillVariants}
      >
        <TSIcon className={styles.tsIcon} />
      </motion.div>

    </>
  );
};
