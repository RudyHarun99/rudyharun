import React from 'react';
import styles from './FadeWrapper.module.scss';
import clsx from 'clsx';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { colorToRGBA } from '@/utils/colorToRGBA';

type FadeWrapperProps = {
  children: React.ReactNode;
  type: 'start' | 'end' | 'both' | 'none';
  direction?: 'horizontal' | 'vertical';
  fadeWidth?: number;
  className?: string;
  fadeColor?: string;
};

const fadeVariants: Variants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

export const FadeWrapper: React.FC<FadeWrapperProps> = ({
  children,
  type,
  direction = 'horizontal',
  fadeWidth = 100,
  className,
  fadeColor = '#000',
}) => {
  const fadeWidthRem = `${fadeWidth / 16}rem`;
  const transparentColor = colorToRGBA(fadeColor);

  const isStartVisible = type === 'start' || type === 'both';
  const isEndVisible = type === 'end' || type === 'both';

  const fadeStyle = {
    ...(direction === 'horizontal'
      ? { width: fadeWidthRem }
      : { height: fadeWidthRem }),
    '--fade-color': fadeColor,
    '--transparent-color': transparentColor,
  };

  return (
    <div className={clsx(styles.wrapper, className)}>
      <AnimatePresence initial={false}>
        {direction === 'horizontal' && (
          <>
            <motion.div
              className={styles.fade}
              initial="hidden"
              animate={isStartVisible ? 'visible' : 'hidden'}
              exit="hidden"
              variants={fadeVariants}
              style={fadeStyle}
            />
            <motion.div
              className={styles.fade}
              initial="hidden"
              animate={isEndVisible ? 'visible' : 'hidden'}
              exit="hidden"
              variants={fadeVariants}
              style={fadeStyle}
            />
          </>
        )}
        {direction === 'vertical' && (
          <>
            <motion.div
              className={styles.fade}
              initial="hidden"
              animate={isStartVisible ? 'visible' : 'hidden'}
              exit="hidden"
              variants={fadeVariants}
              style={fadeStyle}
            />
            <motion.div
              className={styles.fade}
              initial="hidden"
              animate={isEndVisible ? 'visible' : 'hidden'}
              exit="hidden"
              variants={fadeVariants}
              style={fadeStyle}
            />
          </>
        )}
      </AnimatePresence>
      {children}
    </div>
  );
};