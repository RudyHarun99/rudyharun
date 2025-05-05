import React from 'react';
import styles from './Footer.module.scss';
import clsx from 'clsx';
import linkedin from '@/assets/Linkedin.png';
import instagram from '@/assets/Instagram.png';
import browsing from '@/assets/browsing.png';
import logo from '@/assets/logo.png';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={clsx(styles.footer, 'container')}>
        <div className={styles.socialMedia}>
          <span className={styles.socialMediaItem}>
            <img src={linkedin} alt='linkedin' />
          </span>
          <span className={styles.socialMediaItem}>
            <img src={instagram} alt='logo' />
          </span>
          <span className={styles.socialMediaItem}>
            <img src={browsing} alt='logo' />
          </span>
        </div>
        <div className={styles.footerInfo}>
          <span>
            <img src={logo} alt='logo' />
          </span>
          <span>
            <p>© rudy2025</p>
          </span>
        </div>
      </div>
    </footer>
  );
};
