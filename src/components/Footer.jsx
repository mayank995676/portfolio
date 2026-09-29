import React from 'react';
import { ArrowUp, Mail, Code2, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo, navLinks } from '../data/portfolioData';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container footer-container">
        {/* Main Footer Row */}
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-badge">
                <span className="logo-code">MR</span>
              </div>
              <div>
                <span className="footer-name">{personalInfo.name}</span>
                <span className="footer-role">{personalInfo.role}</span>
              </div>
            </div>
            <p className="footer-tagline">
              {personalInfo.tagline}
            </p>
            <div className="footer-location">
              📍 {personalInfo.location}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect / Socials */}
          <div className="footer-social-col">
            <h4 className="footer-col-title">Connect</h4>
            <div className="footer-socials">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="GitHub profile"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="social-btn"
                aria-label="Send direct email"
              >
                <Mail size={18} />
              </a>
            </div>
            <span className="footer-avail-tag">
              ● Open for Full Stack Internship
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="footer-tech-note">
            Built with modern web technologies &bull; React &amp; Vanilla CSS
          </p>
          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Back to top of page"
            title="Back to top"
          >
            <span>Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
