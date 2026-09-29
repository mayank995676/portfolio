import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Info, Sparkles, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import './Projects.css';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterOptions = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'webapp', label: 'Web Applications' },
    { key: 'ai', label: 'AI & Concepts' }
  ];

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.filterKey === filter);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Engineering Projects</span>
          </h2>
          <p className="section-subtitle">
            Demonstrating full-stack engineering, responsive interfaces, secure API design, and practical software solutions.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="project-filters" role="tablist" aria-label="Project filter tabs">
          {filterOptions.map((opt) => (
            <button
              key={opt.key}
              role="tab"
              aria-selected={filter === opt.key}
              className={`filter-btn ${filter === opt.key ? 'active' : ''}`}
              onClick={() => setFilter(opt.key)}
            >
              {opt.label}
              <span className="filter-count">
                ({opt.key === 'all' ? projectsData.length : projectsData.filter(p => p.filterKey === opt.key).length})
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card glass-card">
              {/* Media Preview */}
              <div className="project-media-wrap">
                <img
                  src={project.image}
                  alt={`${project.name} preview interface`}
                  className="project-img"
                  loading="lazy"
                />
                <div className="project-overlay-glow" />
                <span className="project-badge">{project.badge}</span>
              </div>

              {/* Card Body */}
              <div className="project-content">
                <div className="project-header">
                  <div className="project-category-sub">{project.category}</div>
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-tagline">{project.tagline}</p>
                </div>

                <p className="project-desc">{project.description}</p>

                {/* Tech Stack Badges */}
                <div className="project-tech-stack">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="project-actions">
                  {/* Live Demo Button */}
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <button
                      className="btn btn-disabled btn-sm"
                      title="Placeholder: Local evaluation staging"
                      disabled
                      aria-disabled="true"
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo (Staging)</span>
                    </button>
                  )}

                  {/* GitHub Button */}
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      title="View GitHub repository"
                    >
                      <GithubIcon size={14} />
                      <span>GitHub</span>
                    </a>
                  ) : (
                    <button
                      className="btn btn-disabled btn-sm"
                      disabled
                      aria-disabled="true"
                    >
                      <GithubIcon size={14} />
                      <span>GitHub</span>
                    </button>
                  )}

                  {/* Architecture & Details Modal Trigger */}
                  <button
                    className="btn btn-outline btn-sm details-trigger-btn"
                    onClick={() => setSelectedProject(project)}
                    title="View technical details and architecture"
                  >
                    <Info size={14} />
                    <span>Details</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
