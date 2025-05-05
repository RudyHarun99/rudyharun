import React, { useCallback, useState } from 'react';
import styles from './FAQItem.module.scss';
import clsx from 'clsx';
import DownArrowIcon from '@/assets/down-arrow-icon.svg';
import { Variants, motion } from 'framer-motion';

type FAQItemProps = {
  question: string;
  answer: string;
};

const faqItemVariants: Variants = {
  inView: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  outOfView: {
    opacity: 0,
    x: -30,
  },
  collapsed: {
    transition: {
      duration: 0.3,
    },
  },
  expanded: {
    padding: '2px',
    transition: {
      duration: 0.3,
    },
  },
};

const detailVariants: Variants = {
  collapsed: {
    height: 0,
    opacity: 0,
  },
  expanded: {
    height: 'auto',
    opacity: 1,
  },
};

const expandVariants: Variants = {
  collapsed: {
    scaleX: 0,
    border: '2px solid transparent',
    transformOrigin: 'left',
    transition: {
      duration: 0.3,
    },
  },
  expanded: {
    scaleX: 1,
    backgroundImage:
      'linear-gradient(black, black), linear-gradient(to right, #e96cf3, #8746eb)',
    backgroundOrigin: 'border-box',
    backgroundClip: 'content-box, border-box',
    transformOrigin: 'right',
    transition: {
      duration: 0.3,
    },
  },
};

const questionVariants: Variants = {
  collapsed: {
    padding: '1 1.5rem',
    transition: {
      duration: 0.3,
    },
  },
  expanded: {
    padding: '1.5rem 1.5rem 1rem 1.5rem',
    transition: {
      duration: 0.3,
    },
  },
};

const arrowVariants: Variants = {
  collapsed: {
    rotate: 0,
    transition: {
      duration: 0.2,
    },
  },
  expanded: {
    rotate: 180,
    transition: {
      duration: 0.2,
    },
  },
};

export const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded]);

  return (
    <motion.div
      className={styles.faqItem}
      variants={faqItemVariants}
      initial='outOfView'
      whileInView='inView'
      animate={isExpanded ? 'expanded' : 'collapsed'}
    >
      <motion.div
        className={styles.borderAnimation}
        variants={expandVariants}
        initial='collapsed'
        animate={isExpanded ? 'expanded' : 'collapsed'}
      />

      <motion.div
        className={clsx(styles.faq, {
          [styles.expand]: isExpanded === true,
        })}
        initial='collapsed'
        animate={isExpanded ? 'expanded' : 'collapsed'}
      >
        <motion.div
          className={clsx(styles.faqHeader)}
          onClick={handleExpand}
          variants={questionVariants}
        >
          <p className={styles.faqQuestion}>{question}</p>
          <motion.div className={styles.faqIcon} variants={arrowVariants}>
            <DownArrowIcon />
          </motion.div>
        </motion.div>

        <motion.div className={styles.faqDetail} variants={detailVariants}>
          <p className={styles.faqAnswer}>{answer}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
