import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  MessageSquare,
  Sparkles,
  Clock
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  // Validation function
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message content is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate clean frontend response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <MessageSquare size={14} />
            <span>Connect &amp; Collaborate</span>
          </div>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Exceptional</span>
          </h2>
          <p className="section-subtitle">
            Currently open to Full Stack Developer internships, technical apprenticeships, and engineering evaluations.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="contact-grid">
          {/* Left Column: Contact Information Cards */}
          <div className="contact-info-col">
            <div className="contact-card glass-card">
              <h3 className="contact-card-title">
                <Sparkles size={18} className="icon-accent" />
                Contact Information
              </h3>
              <p className="contact-card-desc">
                Feel free to reach out directly via email, connect on LinkedIn, or inspect my repositories on GitHub.
              </p>

              {/* Direct Info List */}
              <div className="info-items-list">
                {/* Email Item with Copy action */}
                <div className="info-item">
                  <div className="info-icon-box">
                    <Mail size={18} className="icon-cyan" />
                  </div>
                  <div className="info-text-group">
                    <span className="info-label">EMAIL ADDRESS</span>
                    <span className="info-val">{personalInfo.email}</span>
                  </div>
                  <button
                    type="button"
                    className="copy-btn"
                    onClick={handleCopyEmail}
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copied ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                    <span className="copy-tooltip">{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>

                {/* Location Item */}
                <div className="info-item">
                  <div className="info-icon-box">
                    <MapPin size={18} className="icon-cyan" />
                  </div>
                  <div className="info-text-group">
                    <span className="info-label">CURRENT LOCATION</span>
                    <span className="info-val">{personalInfo.location}</span>
                  </div>
                </div>

                {/* GitHub Item */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-item info-item-link"
                >
                  <div className="info-icon-box">
                    <GithubIcon size={18} className="icon-cyan" />
                  </div>
                  <div className="info-text-group">
                    <span className="info-label">GITHUB PROFILE</span>
                    <span className="info-val">github.com/mayankrajpoot</span>
                  </div>
                </a>

                {/* LinkedIn Item */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-item info-item-link"
                >
                  <div className="info-icon-box">
                    <LinkedinIcon size={18} className="icon-cyan" />
                  </div>
                  <div className="info-text-group">
                    <span className="info-label">LINKEDIN NETWORK</span>
                    <span className="info-val">linkedin.com/in/mayank-rajpoot</span>
                  </div>
                </a>
              </div>

              {/* Opportunity Availability Notice */}
              <div className="availability-box">
                <div className="availability-header">
                  <span className="pulse-dot" />
                  <span className="availability-title">Immediate Availability</span>
                </div>
                <p className="availability-desc">
                  Ready to contribute to agile teams, implement responsive web features, and learn production-scale systems.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-col">
            <div className="form-card glass-card">
              <h3 className="form-title">Send a Message</h3>
              <p className="form-subtitle">
                Please fill in the form below. Proper validation is enforced on all input fields.
              </p>

              {/* Success Notification */}
              {isSubmitted ? (
                <div className="form-success-banner" role="alert">
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="success-title">Message Received!</h4>
                  <p className="success-desc">
                    Thank you for reaching out. The frontend validation succeeded and the form state has been processed cleanly.
                  </p>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => setIsSubmitted(false)}
                    style={{ marginTop: '0.75rem' }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  {/* Name Field */}
                  <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                    <label htmlFor="contact-name" className="form-label">
                      Your Name <span className="required-star">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Johnson"
                      className="form-input"
                      aria-invalid={errors.name ? 'true' : 'false'}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      required
                    />
                    {errors.name && (
                      <span id="name-error" className="error-message">
                        <AlertCircle size={14} />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                    <label htmlFor="contact-email" className="form-label">
                      Email Address <span className="required-star">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@example.com"
                      className="form-input"
                      aria-invalid={errors.email ? 'true' : 'false'}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      required
                    />
                    {errors.email && (
                      <span id="email-error" className="error-message">
                        <AlertCircle size={14} />
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div className={`form-group ${errors.subject ? 'has-error' : ''}`}>
                    <label htmlFor="contact-subject" className="form-label">
                      Subject <span className="required-star">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Full Stack Internship Opportunity"
                      className="form-input"
                      aria-invalid={errors.subject ? 'true' : 'false'}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                      required
                    />
                    {errors.subject && (
                      <span id="subject-error" className="error-message">
                        <AlertCircle size={14} />
                        {errors.subject}
                      </span>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
                    <label htmlFor="contact-message" className="form-label">
                      Message <span className="required-star">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here (min. 10 characters)..."
                      className="form-textarea"
                      aria-invalid={errors.message ? 'true' : 'false'}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      required
                    />
                    {errors.message && (
                      <span id="message-error" className="error-message">
                        <AlertCircle size={14} />
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn btn-primary submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span>Validating &amp; Sending...</span>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>

                  <p className="form-disclaimer">
                    🔒 Frontend validation enabled. Form data is verified locally without third-party email leakage.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
