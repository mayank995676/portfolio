import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Code2 } from 'lucide-react';
import { navLinks, personalInfo } from '../data/portfolioData';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`navbar-wrapper ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#home" className="navbar-logo" onClick={closeMenu} aria-label="Mayank Rajpoot Home">
          <div className="logo-badge">
            <Code2 size={18} className="logo-icon" />
            <span className="logo-code">MR</span>
          </div>
          <div className="logo-text">
            <span className="logo-name">{personalInfo.name}</span>
            <span className="logo-role">{personalInfo.role}</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-nav desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <li key={link.name} className="nav-item">
                  <a
                    href={link.href}
                    className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.name}
                    {isActive && <span className="nav-active-pill" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="navbar-actions desktop-actions">
          <a href="#contact" className="btn btn-primary btn-sm">
            <span>Get In Touch</span>
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`} onClick={closeMenu}>
        <div className="mobile-menu-drawer" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-drawer-header">
            <div className="logo-badge">
              <span className="logo-code">MR</span>
            </div>
            <span className="mobile-drawer-title">{personalInfo.name}</span>
            <button className="mobile-drawer-close" onClick={closeMenu} aria-label="Close menu">
              <X size={20} />
            </button>
          </div>

          <ul className="mobile-nav-list">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                    onClick={closeMenu}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={16} className="mobile-nav-arrow" />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mobile-drawer-footer">
            <a href="#contact" className="btn btn-primary" style={{ width: '100%' }} onClick={closeMenu}>
              Contact Me
            </a>
            <div className="mobile-status-tag">
              <span className="pulse-dot" />
              <span>Available for Internship Roles</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
