import React from 'react';
import { ArrowDown, Code2, Sparkles, MapPin, Terminal, Layers, Database, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* Background Floating Elements & Glowing Blobs */}
      <div className="hero-blob hero-blob-1" aria-hidden="true" />
      <div className="hero-blob hero-blob-2" aria-hidden="true" />
      
      {/* Floating Syntax Symbols */}
      <div className="floating-symbols" aria-hidden="true">
        <span className="symbol-tag symbol-1">&lt;/&gt;</span>
        <span className="symbol-tag symbol-2">&#123; ... &#125;</span>
        <span className="symbol-tag symbol-3">async / await</span>
        <span className="symbol-tag symbol-4">const [state, setState]</span>
        <span className="symbol-tag symbol-5">git commit -m &quot;feat&quot;</span>
        <span className="symbol-tag symbol-6">&lambda; =&gt; API</span>
      </div>

      <div className="container hero-container">
        {/* Left Column: Text & CTAs */}
        <div className="hero-content">
          {/* Status Indicator */}
          <div className="hero-status-badge">
            <span className="pulse-dot" />
            <span>{personalInfo.status}</span>
          </div>

          {/* Headline */}
          <h1 className="hero-headline">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          {/* Subheadline & Role */}
          <p className="hero-subheadline">
            {personalInfo.subheadline}
          </p>

          <p className="hero-tagline">
            {personalInfo.tagline}
          </p>

          {/* Location Badge */}
          <div className="hero-location-badge">
            <MapPin size={16} className="location-icon" />
            <span>Based in {personalInfo.location}</span>
          </div>

          {/* Action Buttons */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>View My Projects</span>
              <ArrowDown size={16} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              <span>Contact Me</span>
            </a>
          </div>

          {/* Quick Technology Chips */}
          <div className="hero-tech-strip">
            <span className="tech-strip-label">CORE STACK:</span>
            <div className="tech-chips">
              <span className="tech-chip"><Code2 size={13} /> React.js</span>
              <span className="tech-chip"><Cpu size={13} /> Node.js</span>
              <span className="tech-chip"><Layers size={13} /> Express</span>
              <span className="tech-chip"><Database size={13} /> MongoDB</span>
              <span className="tech-chip"><Terminal size={13} /> REST APIs</span>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Developer Visual & Holographic Badges */}
        <div className="hero-visual-wrapper">
          <div className="visual-glow-ring" aria-hidden="true" />
          
          <div className="visual-frame">
            <img
              src="/assets/hero-visual.jpg"
              alt="3D modern developer illustration and holographic code workspace"
              className="hero-image"
              loading="eager"
            />
            <div className="image-overlay" />

            {/* Floating Developer Holographic Cards */}
            <div className="floating-card floating-card-top animate-float">
              <div className="floating-card-header">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
                <span className="code-title">developer.config.json</span>
              </div>
              <div className="floating-card-code">
                <code>
                  <span className="code-key">"engineer"</span>: <span className="code-val">"Full Stack"</span>,<br/>
                  <span className="code-key">"cleanArchitecture"</span>: <span className="code-val">true</span>,<br/>
                  <span className="code-key">"performance"</span>: <span className="code-val">"High"</span>
                </code>
              </div>
            </div>

            <div className="floating-card floating-card-bottom animate-float-delayed">
              <div className="status-flex">
                <Sparkles size={16} className="sparkle-icon" />
                <div>
                  <div className="metric-title">Production Quality</div>
                  <div className="metric-subtitle">Frontend &amp; Backend Synergy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
