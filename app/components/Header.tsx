'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeAndTopButton from './ThemeAndTopButton';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="site-header">
      <div className="nav-inner">
        <Link href="#home" className="brand" onClick={closeMenu}>
          <Image src="/tab&icon.png" alt="Ngetich Ken logo" width={36} height={36} className="brand-logo" />
          <span>Ngetich Ken</span>
        </Link>

        <button
          type="button"
          className={`mobile-menu-toggle ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${isOpen ? 'mobile-open' : ''}`}>
          <Link href="#about" onClick={closeMenu}>About</Link>
          <Link href="#skills" onClick={closeMenu}>Skills</Link>
          <Link href="#projects" onClick={closeMenu}>Projects</Link>
          <Link href="#architecture" onClick={closeMenu}>Architecture</Link>
          <Link href="#contact" onClick={closeMenu}>Contact</Link>
          <Link href="#resume" onClick={closeMenu}>Resume</Link>
        </nav>

        <div className="header-controls">
          <ThemeAndTopButton />
        </div>
      </div>
    </header>
  );
}
