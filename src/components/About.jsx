import React from 'react';
import { GraduationCap, Code2, Target, Globe, Compass, CheckCircle2, Cpu, Database } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Compass size={14} />
            <span>About Me</span>
          </div>
          <h2 className="section-title">
            Passionate About Crafting <span className="gradient-text">Scalable Solutions</span>
          </h2>
          <p className="section-subtitle">
            A Computer Science student combining technical rigor with modern frontend &amp; backend engineering to solve practical problems.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="about-grid">
          {/* Left Column: Narrative, Education, Interests */}
          <div className="about-left-col">
            <div className="about-card glass-card">
              <h3 className="about-card-title">
                <Code2 size={20} className="icon-accent" />
                Professional Background
              </h3>
              <p className="about-text">
                {personalInfo.bio}
              </p>
              <p className="about-text">
                My approach to software engineering centers on maintainable architectures, clean component composition, and responsive, accessible user interfaces. I bridge the gap between frontend aesthetics and robust backend APIs.
              </p>

              {/* Education Box */}
              <div className="education-box">
                <div className="education-icon-wrap">
                  <GraduationCap size={22} className="edu-icon" />
                </div>
                <div className="education-content">
                  <span className="edu-label">EDUCATION</span>
                  <h4 className="edu-degree">{personalInfo.education.degree}</h4>
                  <p className="edu-focus">{personalInfo.education.focus}</p>
                  <span className="edu-status-badge">{personalInfo.education.status}</span>
                </div>
              </div>

              {/* Development Interests */}
              <div className="interests-box">
                <h4 className="interests-title">
                  <Target size={16} className="icon-cyan" />
                  Primary Development Interests
                </h4>
                <div className="interests-tags">
                  {personalInfo.interests.map((interest, idx) => (
                    <span key={idx} className="interest-tag">
                      <CheckCircle2 size={13} className="check-icon" />
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: What I Build & Key Statistics */}
          <div className="about-right-col">
            {/* Stats Cards Grid */}
            <div className="stats-grid">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="stat-card glass-card">
                  <div className="stat-value gradient-text-accent">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-subtitle">{stat.subtitle}</div>
                </div>
              ))}
            </div>

            {/* What I Build Cards */}
            <div className="what-i-build-wrapper">
              <h3 className="what-i-build-heading">What I Build</h3>
              <div className="build-cards-list">
                {personalInfo.whatIBuild.map((item, idx) => (
                  <div key={idx} className="build-card glass-card">
                    <div className="build-card-number">0{idx + 1}</div>
                    <div className="build-card-content">
                      <h4 className="build-card-title">{item.title}</h4>
                      <p className="build-card-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
