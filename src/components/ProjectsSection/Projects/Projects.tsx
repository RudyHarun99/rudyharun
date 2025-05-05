import React from 'react';
import styles from './Projects.module.scss';
import clsx from 'clsx';
import { ProjectsGroup } from './ProjectsGroup';
import { Variants, motion } from 'framer-motion';

const projectsVariants: Variants = {
  inView: {
    transition: { staggerChildren: 0.4 },
  },
};

type ProjectsProps = {
  children: React.ReactNode;
};

type SubComponents = {
  Group: typeof ProjectsGroup;
  Item: typeof ProjectsGroup.Item;
};

export const Projects: React.FC<ProjectsProps> &
SubComponents = ({
  children,
}) => {
  return (
    <main>
      <motion.div
        className={clsx(styles.projectsContainer)}
        variants={projectsVariants}
        initial='outOfView'
        whileInView='inView'
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </main>
  );
};

Projects.Group = ProjectsGroup;
Projects.Item = ProjectsGroup.Item;
