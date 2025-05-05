import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import clsx from 'clsx';
import NavIcon from '@/assets/nav_icon.svg';
import CloseIcon from '@/assets/icon-close.svg';
import SMSIcon from '@/assets/Icon-message.svg';
import HamburgerIcon from '@/assets/icon-hamburger.svg';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-scroll';

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Fungsi toggle untuk membuka atau menutup menu
  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <header className={clsx(styles.header, 'container')}>
      {/* LOGO */}
      <div className={styles.logo}>
        <NavIcon />
      </div>

      {/* Navbar untuk desktop */}
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link to='home' smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to='about' smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to='skills' smooth={true} duration={800}>
              Skills
            </Link>
          </li>
          <li>
            <Link to='projects' smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to='faq' smooth={true} duration={500}>
              FAQ
            </Link>
          </li>
          <li>
            <Link to='contactMe' smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hire Me for desktop and mobile */}
      <Button as='a' href='#contactMe' className={styles.ctaButton}>
        <div className={styles.buttonContent}>
          <SMSIcon />
          <span className={clsx(styles.buttonText)}>
            Hire me
          </span>
        </div>
      </Button>

      {/* Hamburger Icon for mobile */}
      <div
        className={styles.hamburger}
        onClick={toggleMenu} // Panggil fungsi toggleMenu saat icon close di klik
        role='button'
        aria-label='Open Menu'
      >
        <HamburgerIcon />
      </div>

      {/* Navbar untuk mobile */}
      <nav className={clsx(styles.mobileMenu, {
        [styles.open]: menuOpen // tambahkan class open jika menuOpen bernilai true
      })}>
        <div className={styles.mobileHeader}>
          <div className={styles.logo}>
            <NavIcon />
          </div>
          <div
            className={styles.closeIcon}
            onClick={toggleMenu} // Panggil fungsi toggleMenu saat icon close di klik
            role='button'
            aria-label='Close Menu'
          >
            <CloseIcon />
          </div>
        </div>
        <ul className={styles.mobileNavLinks}>
          <li>
            <Link
              to='home'
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='about'
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to='skills'
              smooth={true}
              duration={800}
              onClick={toggleMenu}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to='projects'
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to='faq'
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              to='contactMe'
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
        <Button
          as='a'
          href='#contact'
          className={styles.ctaButton}
        >
          <div className={styles.buttonContent}>
            <SMSIcon />
            <span className={clsx(
              styles.buttonText,
              styles.buttonTextMobile
            )}>
              Hire me
            </span>
          </div>
        </Button>
      </nav>
    </header>
  )
}
