import React, { useState } from 'react';
import { 
  Wrench, 
  Code2, 
  Palette, 
  FileCode, 
  Atom, 
  Layers, 
  Server, 
  Cpu, 
  Terminal, 
  Binary, 
  Hash, 
  Code, 
  Database, 
  HardDrive, 
  Flame, 
  GitBranch, 
  Monitor, 
  Globe, 
  Workflow, 
  CreditCard, 
  Smartphone,
  Sparkles
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { skillsData } from '../data/portfolioData';
import './Skills.css';

// Icon mapping helper
const iconMap = {
  Code2: <Code2 size={24} />,
  Palette: <Palette size={24} />,
  FileCode: <FileCode size={24} />,
  Atom: <Atom size={24} />,
  Layers: <Layers size={24} />,
  Server: <Server size={24} />,
  Cpu: <Cpu size={24} />,
  Terminal: <Terminal size={24} />,
  Binary: <Binary size={24} />,
  Hash: <Hash size={24} />,
  Code: <Code size={24} />,
  Database: <Database size={24} />,
  HardDrive: <HardDrive size={24} />,
  Flame: <Flame size={24} />,
  GitBranch: <GitBranch size={24} />,
  Github: <GithubIcon size={24} />,
  Monitor: <Monitor size={24} />,
  Globe: <Globe size={24} />,
  Workflow: <Workflow size={24} />,
  CreditCard: <CreditCard size={24} />,
  Smartphone: <Smartphone size={24} />
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsData.skills
    : skillsData.skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Wrench size={14} />
            <span>Technical Expertise</span>
          </div>
          <h2 className="section-title">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical stack across frontend engineering, backend services, systems programming, and database design.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="skills-tabs" role="tablist" aria-label="Skills categories">
          {skillsData.categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`skill-tab ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
              {activeCategory === cat.id && <span className="tab-indicator" />}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, idx) => (
            <div key={idx} className="skill-card glass-card">
              <div className="skill-card-top">
                <div className="skill-icon-wrap">
                  {iconMap[skill.icon] || <Code2 size={24} />}
                </div>
                <div className="skill-meta">
                  <div className="skill-name-row">
                    <h3 className="skill-name">{skill.name}</h3>
                    {skill.highlight && (
                      <span className="skill-core-badge">
                        <Sparkles size={10} />
                        Core
                      </span>
                    )}
                  </div>
                  <span className="skill-category-tag">{skill.category}</span>
                </div>
              </div>

              <div className="skill-competency">
                <span className="competency-label">Competency Scope:</span>
                <p className="competency-desc">{skill.level}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Principles Banner */}
        <div className="skills-principles-banner glass-card">
          <div className="principle-item">
            <span className="principle-bullet">⚡</span>
            <div>
              <h4 className="principle-title">Performance-First</h4>
              <p className="principle-desc">Optimized bundle sizes, responsive layouts, and efficient rendering cycles.</p>
            </div>
          </div>
          <div className="principle-divider" />
          <div className="principle-item">
            <span className="principle-bullet">🛡️</span>
            <div>
              <h4 className="principle-title">Robust Architecture</h4>
              <p className="principle-desc">Clean code structure, modular design patterns, and RESTful best practices.</p>
            </div>
          </div>
          <div className="principle-divider" />
          <div className="principle-item">
            <span className="principle-bullet">♿</span>
            <div>
              <h4 className="principle-title">Accessibility &amp; SEO</h4>
              <p className="principle-desc">Semantic HTML5, ARIA compliance, and search engine optimization.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
