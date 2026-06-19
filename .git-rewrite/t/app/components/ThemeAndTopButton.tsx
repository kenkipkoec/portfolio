'use client';

import { useEffect, useState } from 'react';

export default function ThemeAndTopButton() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initialTheme = storedTheme ?? (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 320);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem('theme', nextTheme);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="header-controls">
        <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label="Toggle light and dark mode">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
      {showTop && (
        <button type="button" className="scroll-top" onClick={scrollToTop} aria-label="Back to top">
          ↑
        </button>
      )}
    </>
  );
}
