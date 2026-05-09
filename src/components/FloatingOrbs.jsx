import React from 'react';

const FloatingOrbs = () => {
  return (
    <div className="floating-orbs-container">
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-orb orb-3"></div>
      <style>
        {`
          .floating-orbs-container {
            position: absolute;
            inset: 0;
            overflow: hidden;
            pointer-events: none;
            z-index: 1;
          }
        `}
      </style>
    </div>
  );
};

export default FloatingOrbs;
