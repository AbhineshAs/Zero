import React from 'react';
import './GuestExperience.css';

const GuestExperience = () => {
  return (
    <section className="guest-experience section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Memories</span>
          <h2 className="serif">Guest Experience</h2>
        </div>
      </div>
      
      <div className="video-floating-container">
        <div className="video-track">
          <div className="video-card">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              src="https://player.vimeo.com/external/494252666.sd.mp4?s=727f71182cf50257e875ec8231e64903c734892c&profile_id=164&oauth2_token_id=57447761"
            ></video>
            <div className="video-overlay">
              <span>Kerala Heritage</span>
            </div>
          </div>
          <div className="video-card">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              src="https://player.vimeo.com/external/459389137.sd.mp4?s=910d65b7ca74fb24e390c5c361957f00171a80d5&profile_id=164&oauth2_token_id=57447761"
            ></video>
            <div className="video-overlay">
              <span>Luxury Stays</span>
            </div>
          </div>
          <div className="video-card">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              src="https://player.vimeo.com/external/371433846.sd.mp4?s=231da65c170669f338d388ae43455b57353132e4&profile_id=164&oauth2_token_id=57447761"
            ></video>
            <div className="video-overlay">
              <span>Cultural Immersion</span>
            </div>
          </div>
          {/* Duplicate for seamless loop */}
          <div className="video-card">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              src="https://player.vimeo.com/external/494252666.sd.mp4?s=727f71182cf50257e875ec8231e64903c734892c&profile_id=164&oauth2_token_id=57447761"
            ></video>
            <div className="video-overlay">
              <span>Kerala Heritage</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestExperience;
