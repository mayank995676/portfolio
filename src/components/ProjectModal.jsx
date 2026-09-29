import React from 'react';
import { X, ExternalLink, CheckCircle2, Cpu, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import './ProjectModal.css';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="project-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="project-modal-content glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close project modal">
          <X size={20} />
        </button>

        {/* Modal Header Media */}
        <div className="modal-media-wrapper">
          <img src={project.image} alt={project.name} className="modal-image" />
          <div className="modal-category-badge">{project.category}</div>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          <div className="modal-title-row">
            <div>
              <h3 className="modal-title">{project.name}</h3>
              <p className="modal-tagline">{project.tagline}</p>
            </div>
          </div>

          <div className="modal-section">
            <h4 className="modal-section-title">Overview</h4>
            <p className="modal-desc">{project.description}</p>
          </div>

          {/* Architecture Details */}
          <div className="modal-section">
            <h4 className="modal-section-title">
              <Cpu size={16} className="modal-icon-accent" />
              Technical Architecture
            </h4>
            <div className="modal-arch-box">
              <p>{project.architecture}</p>
            </div>
          </div>

          {/* Key Features */}
          <div className="modal-section">
            <h4 className="modal-section-title">
              <Layers size={16} className="modal-icon-cyan" />
              Key System Features
            </h4>
            <ul className="modal-features-list">
              {project.features.map((feat, idx) => (
                <li key={idx} className="modal-feature-item">
                  <CheckCircle2 size={16} className="feature-check" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Badges */}
          <div className="modal-section">
            <h4 className="modal-section-title">Technologies &amp; Libraries</h4>
            <div className="modal-tech-tags">
              {project.technologies.map((t, idx) => (
                <span key={idx} className="tech-badge">{t}</span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="modal-actions">
            {project.liveUrl ? (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <ExternalLink size={16} />
                <span>Visit Live Platform</span>
              </a>
            ) : (
              <div className="disabled-btn-wrapper" title="Evaluation mode: Project demo runs in local staging environment">
                <button className="btn btn-disabled" disabled>
                  <ExternalLink size={16} />
                  <span>Live Demo (Local Staging)</span>
                </button>
              </div>
            )}

            {project.githubUrl ? (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <GithubIcon size={16} />
                <span>View Source Code</span>
              </a>
            ) : (
              <button className="btn btn-disabled" disabled>
                <GithubIcon size={16} />
                <span>Source Code</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
