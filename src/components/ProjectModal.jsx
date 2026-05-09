import React, { useEffect } from 'react';

const ProjectModal = ({ isOpen, onClose, project }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="modal-overlay" onClick={onClose} style={{ display: 'flex' }}>
      <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '800px', padding: 0, overflow: 'hidden' }}>
        <button className="modal-close" onClick={onClose}>&times;</button>

        <div style={{ height: '400px', position: 'relative' }}>
          <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-primary), transparent)' }}></div>
          <div style={{ position: 'absolute', bottom: '40px', left: '40px' }}>
            <span className="section-tag" style={{ background: 'var(--accent-gold)', color: 'black' }}>{project.tag}</span>
            <h2 className="serif" style={{ fontSize: '42px', marginTop: '10px' }}>{project.title}</h2>
          </div>
        </div>

        <div style={{ padding: '40px' }}>
          <p style={{ fontSize: '18px', color: 'var(--text-primary)', lineHeight: '1.6', marginBottom: '30px' }}>
            {project.longDesc || project.desc}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '30px' }}>
            <div>
              <h4 style={{ color: 'var(--accent-gold)', fontSize: '12px', letterSpacing: '2px', marginBottom: '10px' }}>STATUS</h4>
              <p style={{ color: 'var(--text-secondary)' }}>Ongoing Initiative</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--accent-gold)', fontSize: '12px', letterSpacing: '2px', marginBottom: '10px' }}>LOCATION</h4>
              <p style={{ color: 'var(--text-secondary)' }}>Pan-Kerala</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--accent-gold)', fontSize: '12px', letterSpacing: '2px', marginBottom: '10px' }}>GOAL</h4>
              <p style={{ color: 'var(--text-secondary)' }}>Sustainable Legacy</p>
            </div>
          </div>

          <div style={{ marginTop: '40px' }}>
            <button className="btn-explore" onClick={onClose} style={{ width: '100%' }}>CLOSE DETAILS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
